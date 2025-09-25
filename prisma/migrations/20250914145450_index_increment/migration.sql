/*
  Warnings:

  - A unique constraint covering the columns `[sourceId]` on the table `IngestedUnsplashImage` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
CREATE SEQUENCE "public".scheduledimage_index_seq;
ALTER TABLE "public"."ScheduledImage" ALTER COLUMN "index" SET DEFAULT nextval('"public".scheduledimage_index_seq');
ALTER SEQUENCE "public".scheduledimage_index_seq OWNED BY "public"."ScheduledImage"."index";

-- CreateIndex
CREATE UNIQUE INDEX "IngestedUnsplashImage_sourceId_key" ON "public"."IngestedUnsplashImage"("sourceId");
