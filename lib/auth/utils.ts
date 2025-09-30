"use server";

import { prisma } from "@/lib/prisma";

export async function toggleUserFavourite(userId: string, imageId: string, added: boolean) {
    try {
        await prisma.user.update({
            where: { id: userId },
            data: {
                favourites: added ? { disconnect: { scheduledImageId: imageId } } : { connect: { scheduledImageId: imageId } },
            },
        });
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}
