/*
  Warnings:

  - A unique constraint covering the columns `[sourceId]` on the table `ScheduledImage` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ScheduledImage_sourceId_key" ON "ScheduledImage"("sourceId");
