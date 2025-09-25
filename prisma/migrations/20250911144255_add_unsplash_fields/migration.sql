/*
  Warnings:

  - You are about to drop the `IngestedImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "IngestedImage";

-- CreateTable
CREATE TABLE "IngestedUnsplashImage" (
    "id" TEXT NOT NULL,
    "source" "ImageSource" NOT NULL,
    "url" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "approved" BOOLEAN,
    "pHash" TEXT,
    "collectionId" TEXT NOT NULL,
    "indexInCollection" INTEGER NOT NULL,
    "dateIngested" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IngestedUnsplashImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IngestedUnsplashImage_pHash_key" ON "IngestedUnsplashImage"("pHash");
