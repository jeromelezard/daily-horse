-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('Admin', 'Jasmine', 'User');

-- AlterTable
ALTER TABLE "public"."user" ADD COLUMN     "role" "public"."Role" DEFAULT 'User';
