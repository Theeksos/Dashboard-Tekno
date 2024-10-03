/*
  Warnings:

  - You are about to drop the column `email` on the `login` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `login` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `login` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `login_email_key` ON `login`;

-- AlterTable
ALTER TABLE `login` DROP COLUMN `email`,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `login_username_key` ON `login`(`username`);
