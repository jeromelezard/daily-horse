import { prisma } from "@/lib/prisma";
import { getIndexWithSkips } from "@/lib/utils";

const NEW_URLS = ["/horse2.jpeg", "/horse3.jpeg", "/horse4.jpeg"];

async function swapTodaysHorse() {
    const { currentIndex } = await getIndexWithSkips("Horse");

    const upcoming = await prisma.scheduledImage.findMany({
        where: { animalType: "Horse", index: { gte: currentIndex } },
        orderBy: { dateIngested: "asc" },
        take: NEW_URLS.length,
    });

    if (upcoming.length < NEW_URLS.length) {
        console.error(`Only found ${upcoming.length} upcoming horse images, need ${NEW_URLS.length}`);
        return;
    }

    for (let i = 0; i < NEW_URLS.length; i++) {
        const row = upcoming[i];
        const label = ["today", "tomorrow", "day after tomorrow"][i] ?? `day +${i}`;
        console.log(`${label} (index ${row.index}) ${row.url} -> ${NEW_URLS[i]}`);
        await prisma.scheduledImage.update({
            where: { scheduledImageId: row.scheduledImageId },
            data: { url: NEW_URLS[i], source: "Other" },
        });
    }
}

swapTodaysHorse()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
