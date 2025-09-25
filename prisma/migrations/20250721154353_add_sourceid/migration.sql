/*
  Warnings:

  - Added the required column `sourceId` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "sourceId" TEXT NOT NULL;
