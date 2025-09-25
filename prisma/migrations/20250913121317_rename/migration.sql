/*
  Warnings:

  - You are about to drop the column `totalImages` on the `UnsplashCollection` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UnsplashCollection" DROP COLUMN "totalImages",
ADD COLUMN     "ingestionComplete" BOOLEAN NOT NULL DEFAULT false;
