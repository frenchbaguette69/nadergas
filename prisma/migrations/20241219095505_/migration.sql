-- DropIndex
DROP INDEX "idx_quote_id";

-- AlterTable
ALTER TABLE "Quote" ALTER COLUMN "id" SET DEFAULT generate_quote_id();
