import { prisma } from "@/lib/prisma";
import { shuffleArray } from "@/lib/utils";
import { Storage } from "@google-cloud/storage";
import * as path from "path";

async function ingestGCPImages(bucketName: string) {
    const storage = new Storage();
    const bucket = storage.bucket(bucketName);

    // Get all files in the bucket
    const [files] = await bucket.getFiles();

    // Filter to only include common image types
    const imageFiles = files.filter((file) => {
        const ext = path.extname(file.name).toLowerCase();
        return [".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp"].includes(ext);
    });

    // Construct public URLs

    for (let i = 0; i < imageFiles.length; i++) {
        const publicUrl = `https://storage.googleapis.com/${bucketName}/${encodeURIComponent(imageFiles[i].name)}`;
        await prisma.scheduledImage.create({ data: { source: "GCP", url: publicUrl, animalType: "Bobby" } });
    }

    return true;
}

// Example usage:
(async () => {
    const bucketName = "daily-animal-bucket-1";

    // await ingestGCPImages(bucketName);
    // const count = await prisma.scheduledImage.count({ where: { animalType: "Bobby" } });
    // console.log(count);

    // const arr = [...Array(20).keys()].map((i) => i + 1);
    // console.log(arr);
    // console.log(shuffleArray(arr));
})();
