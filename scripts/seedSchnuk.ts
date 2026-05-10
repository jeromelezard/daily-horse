import { readdirSync, statSync } from "fs";
import { join } from "path";
import { PrismaClient } from "../lib/generated/prisma";
import { SCHNUK_TOTAL_IMAGES } from "../lib/schnuk";

const prisma = new PrismaClient();

const SCHNUK_DIR = join(process.cwd(), "public", "schnuk");

async function main() {
    const files = readdirSync(SCHNUK_DIR)
        .filter((name) => !statSync(join(SCHNUK_DIR, name)).isDirectory())
        .filter((name) => !name.startsWith("."))
        .sort();

    if (files.length === 0) {
        console.log(`No files in public/schnuk/. Drop your images there and re-run.`);
        return;
    }

    const existing = await prisma.scheduledImage.findMany({
        where: { animalType: "Schnuk" },
        orderBy: { index: "asc" },
    });
    const existingUrls = new Set(existing.map((r) => r.url));
    const usedIndices = new Set(existing.map((r) => r.index).filter((i): i is number => i !== null));

    const newFiles = files.filter((f) => !existingUrls.has(`/schnuk/${f}`));
    if (newFiles.length === 0) {
        console.log(`No new files. ${existing.length} Schnuk row(s) already seeded.`);
        return;
    }

    let nextIndex = 1;
    let created = 0;
    for (const file of newFiles) {
        while (usedIndices.has(nextIndex)) nextIndex++;
        if (nextIndex > SCHNUK_TOTAL_IMAGES) {
            console.log(`Reached cap of ${SCHNUK_TOTAL_IMAGES} indices; ${newFiles.length - created} new file(s) ignored.`);
            break;
        }
        await prisma.scheduledImage.create({
            data: {
                source: "Other",
                url: `/schnuk/${file}`,
                animalType: "Schnuk",
                index: nextIndex,
                sourceId: `schnuk-${nextIndex}-${file}`,
            },
        });
        console.log(`  index ${nextIndex}: created with ${file}`);
        usedIndices.add(nextIndex);
        created++;
    }
    console.log(`Done. Created ${created} new row(s); ${existing.length} were already present.`);
}

main()
    .catch((err) => {
        console.error(err);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
