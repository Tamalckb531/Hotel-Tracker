/*
  Warnings:

  - You are about to drop the column `firtName` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[firstName]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_firtName_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "firtName",
ADD COLUMN     "firstName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_firstName_key" ON "User"("firstName");
