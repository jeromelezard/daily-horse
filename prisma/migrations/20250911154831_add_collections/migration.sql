-- CreateTable
CREATE TABLE "UnsplashCollection" (
    "id" TEXT NOT NULL,
    "unsplashId" TEXT NOT NULL,
    "totalImages" INTEGER NOT NULL,
    "ingestedImages" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "UnsplashCollection_pkey" PRIMARY KEY ("id")
);
