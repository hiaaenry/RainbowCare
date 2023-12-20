/*
  Warnings:

  - Added the required column `house_number` to the `foster_home` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neighborhood` to the `foster_home` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `foster_home` table without a default value. This is not possible if the table is not empty.
  - Added the required column `site` to the `foster_home` table without a default value. This is not possible if the table is not empty.
  - Added the required column `social_network` to the `foster_home` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `foster_home` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `foster_home` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "foster_home" ADD COLUMN     "house_number" TEXT NOT NULL,
ADD COLUMN     "neighborhood" TEXT NOT NULL,
ADD COLUMN     "phone_number" TEXT NOT NULL,
ADD COLUMN     "site" TEXT NOT NULL,
ADD COLUMN     "social_network" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL;
