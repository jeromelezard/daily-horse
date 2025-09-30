// import * as dotenv from "dotenv";
// dotenv.config();

import { prisma } from "@/lib/prisma";

const COLLECTION_ID = "2432560";
const IMAGES_PER_PAGE = 20;

async function ingestImages() {
    const collectionData = await fetch(`${process.env.NEXT_PUBLIC_UNSPLASH_API_ENDPOINT}/collections/${COLLECTION_ID}`, {
        headers: {
            Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
    });

    if (!collectionData.ok) {
        console.error("Something went wrong fetching collection");
        return false;
    }

    const collection = await collectionData.json();

    const rateLimit = collectionData.headers.get("x-ratelimit-remaining");
    if (!rateLimit || parseInt(rateLimit) == 0) return false;

    console.log("Rate limit: ", rateLimit);
    const totalPhotos = collection.total_photos;

    let startingPage = 1;
    let startingIndex = 0;

    let ingestedCollection = await prisma.unsplashCollection.findUnique({
        where: { collectionId: COLLECTION_ID },
        include: { ingestedUnsplashImages: true },
    });

    if (ingestedCollection) {
        const ingestedImages = ingestedCollection.ingestedUnsplashImages.length;

        if (ingestedCollection.ingestionComplete) {
            console.log("Collection already ingested");
            return true;
        }

        startingPage = Math.floor(ingestedImages / IMAGES_PER_PAGE) + 1;
        startingIndex = ingestedImages % IMAGES_PER_PAGE;
    } else {
        ingestedCollection = await prisma.unsplashCollection.create({
            data: { collectionId: COLLECTION_ID },
            include: { ingestedUnsplashImages: true },
        });
    }

    for (let i = 0; i < parseInt(rateLimit); i++) {
        try {
            const imagesData = await fetch(
                `${process.env.NEXT_PUBLIC_UNSPLASH_API_ENDPOINT}/collections/${COLLECTION_ID}/photos?page=${
                    startingPage + i
                }&per_page=${IMAGES_PER_PAGE}`,
                {
                    headers: {
                        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
                    },
                }
            );

            if (!imagesData.ok) {
                console.error("Something went wrong fetching images");
                return false;
            }

            const images: { id: string; urls: { regular: string } }[] = await imagesData.json();

            if (images.length == 0) return true;
            for (let j = 0; j < images.length; j++) {
                await prisma.ingestedUnsplashImage.create({
                    data: {
                        sourceId: images[j].id,
                        url: images[j].urls.regular,
                        source: "Unsplash",
                        collectionId: COLLECTION_ID,
                    },
                });
            }

            if (ingestedCollection.ingestedUnsplashImages.length == totalPhotos) {
                await prisma.unsplashCollection.update({
                    where: { collectionId: COLLECTION_ID },
                    data: { ingestionComplete: true },
                });
                console.log("Collection fully ingested");
                return true;
            }
        } catch (err) {
            console.error(err, "something went wrong xd");
            return false;
        }
    }
}

async function checkTable() {
    let ingestedCollection = await prisma.unsplashCollection.findUnique({
        where: { collectionId: COLLECTION_ID },
        include: { ingestedUnsplashImages: true },
    });

    console.log("In collection: ", ingestedCollection?.ingestedUnsplashImages.length);

    const images = await prisma.ingestedUnsplashImage.count();
    console.log("count", images);
}

// ingestImages();
checkTable();
