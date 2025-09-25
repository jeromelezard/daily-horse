/*
  Warnings:

  - The primary key for the `GlobalState` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `GlobalState` table. All the data in the column will be lost.
  - The primary key for the `IngestedUnsplashImage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `collectionPage` on the `IngestedUnsplashImage` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `IngestedUnsplashImage` table. All the data in the column will be lost.
  - You are about to drop the column `pageIndex` on the `IngestedUnsplashImage` table. All the data in the column will be lost.
  - The primary key for the `ScheduledImage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ScheduledImage` table. All the data in the column will be lost.
  - The primary key for the `UnsplashCollection` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UnsplashCollection` table. All the data in the column will be lost.
  - The required column `ingestedImageId` was added to the `IngestedUnsplashImage` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `scheduledImageId` was added to the `ScheduledImage` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `collectionId` was added to the `UnsplashCollection` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "GlobalState" DROP CONSTRAINT "GlobalState_pkey",
DROP COLUMN "id",
ADD COLUMN     "globalStateId" INTEGER NOT NULL DEFAULT 1,
ADD CONSTRAINT "GlobalState_pkey" PRIMARY KEY ("globalStateId");

-- AlterTable
ALTER TABLE "IngestedUnsplashImage" DROP CONSTRAINT "IngestedUnsplashImage_pkey",
DROP COLUMN "collectionPage",
DROP COLUMN "id",
DROP COLUMN "pageIndex",
ADD COLUMN     "ingestedImageId" TEXT NOT NULL,
ADD CONSTRAINT "IngestedUnsplashImage_pkey" PRIMARY KEY ("ingestedImageId");

-- AlterTable
ALTER TABLE "ScheduledImage" DROP CONSTRAINT "ScheduledImage_pkey",
DROP COLUMN "id",
ADD COLUMN     "scheduledImageId" TEXT NOT NULL,
ADD CONSTRAINT "ScheduledImage_pkey" PRIMARY KEY ("scheduledImageId");

-- AlterTable
ALTER TABLE "UnsplashCollection" DROP CONSTRAINT "UnsplashCollection_pkey",
DROP COLUMN "id",
ADD COLUMN     "collectionId" TEXT NOT NULL,
ADD CONSTRAINT "UnsplashCollection_pkey" PRIMARY KEY ("collectionId");

-- AddForeignKey
ALTER TABLE "IngestedUnsplashImage" ADD CONSTRAINT "IngestedUnsplashImage_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "UnsplashCollection"("collectionId") ON DELETE RESTRICT ON UPDATE CASCADE;
