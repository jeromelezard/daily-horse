/*
  Warnings:

  - You are about to drop the column `ingestedImages` on the `UnsplashCollection` table. All the data in the column will be lost.
  - You are about to drop the column `unsplashId` on the `UnsplashCollection` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[collectionId]` on the table `UnsplashCollection` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "UnsplashCollection" DROP COLUMN "ingestedImages",
DROP COLUMN "unsplashId";

-- CreateIndex
CREATE UNIQUE INDEX "UnsplashCollection_collectionId_key" ON "UnsplashCollection"("collectionId");
