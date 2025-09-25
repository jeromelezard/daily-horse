"use server";

import { prisma } from "@/lib/prisma";
import { IngestedUnsplashImage } from "../generated/prisma";

export async function getUnapprovedImageBatch() {
  const imageBatch = await prisma.ingestedUnsplashImage.findMany({
    where: { approved: null },
    take: 10,
    orderBy: { dateIngested: "asc" },
  });
  return imageBatch;
}

export async function reviewImage(
  image: IngestedUnsplashImage,
  approved: boolean,
) {
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
      },
    });

  return true;
}
