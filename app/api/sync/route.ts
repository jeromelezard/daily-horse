import { auth } from "@/lib/auth/auth";
import { ScheduledImage } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data } = await req.json();
    const newFavourites = JSON.parse(data) as ScheduledImage[];

    const currentUser = await prisma.user.findUnique({ where: { id: session.user.id }, include: { favourites: true } });
    if (!currentUser) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const existingFavourites = currentUser.favourites;

    const favourites = [...new Set([...existingFavourites, ...newFavourites])];
    await prisma.user.update({
        where: { id: session.user.id },
        data: { favourites: { set: favourites } },
    });

    return NextResponse.json({ success: true });
}
