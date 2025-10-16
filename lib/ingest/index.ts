"use server";

import { prisma } from "@/lib/prisma";
import { AnimalType, IngestedUnsplashImage } from "../generated/prisma";

export async function getUnapprovedImageBatch(animalType: AnimalType) {
    const imageBatch = await prisma.ingestedUnsplashImage.findMany({
        where: { approved: null, animalType },
        take: 10,
        orderBy: { dateIngested: "asc" },
    });
    return imageBatch;
}

export async function reviewImage(image: IngestedUnsplashImage, approved: boolean, animalType: AnimalType) {
    await prisma.ingestedUnsplashImage.update({
        where: { ingestedImageId: image.ingestedImageId },
        data: { approved },
    });

    if (approved)
        await prisma.scheduledImage.create({
            data: {
                sourceId: image.sourceId,
                source: "Unsplash",
                url: image.url,
                collectionId: image.collectionId,
                animalType,
            },
        });

    return true;
}
