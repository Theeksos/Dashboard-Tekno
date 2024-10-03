/*
  Warnings:

  - You are about to drop the column `userId` on the `worklog` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `worklog` DROP FOREIGN KEY `WorkLog_userId_fkey`;

-- AlterTable
ALTER TABLE `worklog` DROP COLUMN `userId`;
