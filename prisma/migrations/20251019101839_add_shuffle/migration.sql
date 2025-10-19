-- AlterTable
ALTER TABLE "public"."GlobalState" ADD COLUMN     "cycleImages" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "shuffleOrder" INTEGER[] DEFAULT ARRAY[]::INTEGER[];
