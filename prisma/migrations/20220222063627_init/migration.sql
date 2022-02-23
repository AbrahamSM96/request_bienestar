/*
  Warnings:

  - Made the column `area` on table `Requerimientos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Requerimientos" ALTER COLUMN "area" SET NOT NULL;
