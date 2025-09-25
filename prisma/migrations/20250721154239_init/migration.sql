-- CreateEnum
CREATE TYPE "ImageSource" AS ENUM ('Unsplash', 'Other');

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "source" "ImageSource" NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "pHash" TEXT,
    "dateIngested" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_pHash_key" ON "Image"("pHash");
