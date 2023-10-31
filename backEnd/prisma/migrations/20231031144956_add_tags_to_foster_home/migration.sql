-- CreateEnum
CREATE TYPE "Tag" AS ENUM ('JOB', 'BOOTCAMP');

-- AlterTable
ALTER TABLE "foster_home" ADD COLUMN     "tags" "Tag"[];
