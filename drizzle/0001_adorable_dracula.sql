ALTER TABLE "departments" DROP CONSTRAINT "departments_name_unique";--> statement-breakpoint
ALTER TABLE "departments" ALTER COLUMN "updated_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "subjects" ALTER COLUMN "updated_at" SET NOT NULL;