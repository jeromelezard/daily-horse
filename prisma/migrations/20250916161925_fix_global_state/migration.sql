/*
  Warnings:

  - You are about to drop the column `currentIndex` on the `GlobalState` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[category]` on the table `GlobalState` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `startDate` to the `GlobalState` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE "public".globalstate_globalstateid_seq;
ALTER TABLE "public"."GlobalState" DROP COLUMN "currentIndex",
ADD COLUMN     "skips" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "globalStateId" SET DEFAULT nextval('"public".globalstate_globalstateid_seq');
ALTER SEQUENCE "public".globalstate_globalstateid_seq OWNED BY "public"."GlobalState"."globalStateId";

-- CreateIndex
CREATE UNIQUE INDEX "GlobalState_category_key" ON "public"."GlobalState"("category");
