/*
  Warnings:

  - You are about to drop the `userkeyboards` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `roleId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "userkeyboards" DROP CONSTRAINT "userkeyboards_keyboardId_fkey";

-- DropForeignKey
ALTER TABLE "userkeyboards" DROP CONSTRAINT "userkeyboards_userId_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "roleId" TEXT NOT NULL;

-- DropTable
DROP TABLE "userkeyboards";

-- CreateTable
CREATE TABLE "user_keyboards" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "keyboardId" TEXT NOT NULL,

    CONSTRAINT "user_keyboards_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_keyboards" ADD CONSTRAINT "user_keyboards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_keyboards" ADD CONSTRAINT "user_keyboards_keyboardId_fkey" FOREIGN KEY ("keyboardId") REFERENCES "keyboards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
