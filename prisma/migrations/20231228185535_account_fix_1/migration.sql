/*
  Warnings:

  - You are about to drop the column `provider_account_id` on the `accounts` table. All the data in the column will be lost.
  - Added the required column `providerAccountId` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_accounts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "compound_id" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "provider_type" TEXT NOT NULL,
    "provider_id" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "access_token_expires" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_accounts" ("access_token", "access_token_expires", "compound_id", "created_at", "id", "provider_id", "provider_type", "refresh_token", "updated_at", "user_id") SELECT "access_token", "access_token_expires", "compound_id", "created_at", "id", "provider_id", "provider_type", "refresh_token", "updated_at", "user_id" FROM "accounts";
DROP TABLE "accounts";
ALTER TABLE "new_accounts" RENAME TO "accounts";
CREATE UNIQUE INDEX "accounts_compound_id_key" ON "accounts"("compound_id");
CREATE INDEX "providerAccountId" ON "accounts"("providerAccountId");
CREATE INDEX "providerId" ON "accounts"("provider_id");
CREATE INDEX "userId" ON "accounts"("user_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
