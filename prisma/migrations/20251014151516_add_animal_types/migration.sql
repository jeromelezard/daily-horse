/*
  Warnings:

  - A unique constraint covering the columns `[animalType,index]` on the table `ScheduledImage` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
ALTER TYPE "public"."AnimalType" ADD VALUE 'Bobby';

-- DropIndex
DROP INDEX "public"."ScheduledImage_index_key";

-- AlterTable
ALTER TABLE "public"."IngestedUnsplashImage" ADD COLUMN     "animalType" "public"."AnimalType" NOT NULL DEFAULT 'Horse';

-- AlterTable
ALTER TABLE "public"."ScheduledImage" ADD COLUMN     "animalType" "public"."AnimalType" NOT NULL DEFAULT 'Horse',
ALTER COLUMN "index" DROP DEFAULT;
DROP SEQUENCE "scheduledimage_index_seq";

-- CreateIndex
CREATE UNIQUE INDEX "ScheduledImage_animalType_index_key" ON "public"."ScheduledImage"("animalType", "index");

CREATE OR REPLACE FUNCTION set_index_per_type()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.index IS NULL THEN
    SELECT COALESCE(MAX(index), 0) + 1
    INTO NEW.index
    FROM "ScheduledImage"
    WHERE "animalType" = NEW."animalType";
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_index_per_type_trigger ON "ScheduledImage";

CREATE TRIGGER set_index_per_type_trigger
BEFORE INSERT ON "ScheduledImage"
FOR EACH ROW
EXECUTE FUNCTION set_index_per_type();