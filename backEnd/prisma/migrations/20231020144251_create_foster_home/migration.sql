-- CreateTable
CREATE TABLE "foster_home" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "foster_home_pkey" PRIMARY KEY ("id")
);
