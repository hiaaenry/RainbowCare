/*
  Warnings:

  - The `recipient_email` column on the `foster_home` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "foster_home" DROP COLUMN "recipient_email",
ADD COLUMN     "recipient_email" TEXT[];
