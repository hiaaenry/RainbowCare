-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Tag" ADD VALUE 'HEALTH';
ALTER TYPE "Tag" ADD VALUE 'HOME';
ALTER TYPE "Tag" ADD VALUE 'LEISURE';
ALTER TYPE "Tag" ADD VALUE 'EDUCATION';
ALTER TYPE "Tag" ADD VALUE 'NEWS';
ALTER TYPE "Tag" ADD VALUE 'ENTERTAINMENT';
ALTER TYPE "Tag" ADD VALUE 'BIOGRAPHY';
ALTER TYPE "Tag" ADD VALUE 'EVENTS';
ALTER TYPE "Tag" ADD VALUE 'LIFESTYLE';
ALTER TYPE "Tag" ADD VALUE 'PSYCHOLOGY';
