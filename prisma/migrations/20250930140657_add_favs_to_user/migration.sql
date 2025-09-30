-- CreateTable
CREATE TABLE "public"."_ScheduledImageToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ScheduledImageToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ScheduledImageToUser_B_index" ON "public"."_ScheduledImageToUser"("B");

-- AddForeignKey
ALTER TABLE "public"."_ScheduledImageToUser" ADD CONSTRAINT "_ScheduledImageToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."ScheduledImage"("scheduledImageId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ScheduledImageToUser" ADD CONSTRAINT "_ScheduledImageToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
