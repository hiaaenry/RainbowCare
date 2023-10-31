/*
  Warnings:

  - You are about to drop the `notifications` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `foster_home` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recipient_email` to the `foster_home` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "notifications" DROP CONSTRAINT "notifications_recipient_email_fkey";

-- AlterTable
ALTER TABLE "foster_home" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "recipient_email" TEXT NOT NULL;

-- DropTable
DROP TABLE "notifications";
