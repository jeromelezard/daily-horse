/*
  Warnings:

  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "AnimalType" AS ENUM ('Horse');

-- DropTable
DROP TABLE "Image";

-- CreateTable
CREATE TABLE "IngestedImage" (
    "id" TEXT NOT NULL,
    "source" "ImageSource" NOT NULL,
    "url" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "approved" BOOLEAN,
    "pHash" TEXT,
    "dateIngested" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IngestedImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScheduledImage" (
    "id" TEXT NOT NULL,
    "source" "ImageSource" NOT NULL,
    "url" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "pHash" TEXT,
    "dateIngested" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "index" INTEGER NOT NULL,

    CONSTRAINT "ScheduledImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GlobalState" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "category" "AnimalType" NOT NULL,
    "currentIndex" INTEGER NOT NULL,

    CONSTRAINT "GlobalState_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IngestedImage_pHash_key" ON "IngestedImage"("pHash");

-- CreateIndex
CREATE UNIQUE INDEX "ScheduledImage_pHash_key" ON "ScheduledImage"("pHash");

-- CreateIndex
CREATE UNIQUE INDEX "ScheduledImage_index_key" ON "ScheduledImage"("index");
