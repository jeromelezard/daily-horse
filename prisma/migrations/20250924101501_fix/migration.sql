/*
  Warnings:

  - You are about to drop the column `pHash` on the `IngestedUnsplashImage` table. All the data in the column will be lost.
  - You are about to drop the column `pHash` on the `ScheduledImage` table. All the data in the column will be lost.
  - The `published` column on the `ScheduledImage` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `collectionId` to the `ScheduledImage` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."IngestedUnsplashImage_pHash_key";

-- DropIndex
DROP INDEX "public"."ScheduledImage_pHash_key";

-- AlterTable
ALTER TABLE "public"."IngestedUnsplashImage" DROP COLUMN "pHash",
ALTER COLUMN "source" SET DEFAULT 'Unsplash';

-- AlterTable
ALTER TABLE "public"."ScheduledImage" DROP COLUMN "pHash",
ADD COLUMN     "collectionId" TEXT NOT NULL,
DROP COLUMN "published",
ADD COLUMN     "published" TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "public"."ScheduledImage" ADD CONSTRAINT "ScheduledImage_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "public"."UnsplashCollection"("collectionId") ON DELETE RESTRICT ON UPDATE CASCADE;
