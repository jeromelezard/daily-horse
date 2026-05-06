"use server";

import { prisma } from "@/lib/prisma";
import { AnimalType, IngestedUnsplashImage } from "../generated/prisma";
import { getIndexWithSkips } from "../utils";

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

    if (!approved) return true;

    const { currentIndex } = await getIndexWithSkips(animalType);
    const lastImage = await prisma.scheduledImage.findFirst({
        where: { animalType, index: { not: null } },
        orderBy: { index: "desc" },
    });
    const nextIndex = Math.max(currentIndex, (lastImage?.index ?? 0) + 1);

    await prisma.scheduledImage.create({
        data: {
            sourceId: image.sourceId,
            source: "Unsplash",
            url: image.url,
            collectionId: image.collectionId,
            animalType,
            index: nextIndex,
        },
    });

    return true;
}
