-- CreateTable
CREATE TABLE `WorkLog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pic` VARCHAR(191) NOT NULL,
    `week` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `opportunity` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `account` VARCHAR(191) NOT NULL,
    `activity` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `WorkLog` ADD CONSTRAINT `WorkLog_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `login`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
