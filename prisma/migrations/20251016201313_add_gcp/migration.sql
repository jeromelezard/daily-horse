-- AlterEnum
ALTER TYPE "public"."ImageSource" ADD VALUE 'GCP';

-- AlterTable
ALTER TABLE "public"."ScheduledImage" ALTER COLUMN "sourceId" DROP NOT NULL,
ALTER COLUMN "collectionId" DROP NOT NULL;
