"use client";

import { ScheduledImage } from "@/lib/generated/prisma";
import { BetterAuthSession } from "@/lib/types";
import DisplayImage from "./DisplayImage";

export interface DisplayImageProps {
    image: ScheduledImage;
    session: BetterAuthSession | null;
    userFavourites?: ScheduledImage[];
}

export default function MainPage({ image, session, userFavourites = [] }: DisplayImageProps) {
    return <DisplayImage image={image} session={session} userFavourites={userFavourites} />;
}
