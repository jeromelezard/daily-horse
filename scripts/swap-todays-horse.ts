import { prisma } from "@/lib/prisma";
import { getIndexWithSkips } from "@/lib/utils";

const NEW_URL = "/horse.jpeg";

async function swapTodaysHorse() {
    const { currentIndex } = await getIndexWithSkips("Horse");

    const todaysImage = await prisma.scheduledImage.findFirst({
        where: { animalType: "Horse", index: { gte: currentIndex } },
        orderBy: { dateIngested: "asc" },
    });

    if (!todaysImage) {
        console.error("No scheduled horse image found for currentIndex", currentIndex);
        return;
    }

    console.log("Found today's horse image:", {
        scheduledImageId: todaysImage.scheduledImageId,
        index: todaysImage.index,
        oldUrl: todaysImage.url,
    });

    const updated = await prisma.scheduledImage.update({
        where: { scheduledImageId: todaysImage.scheduledImageId },
        data: { url: NEW_URL, source: "Other" },
    });

    console.log("Updated to:", updated.url);
}

swapTodaysHorse()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
