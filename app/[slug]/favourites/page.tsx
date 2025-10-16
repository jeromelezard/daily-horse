import FavouritesWithLocal from "@/components/favourites/FavouritesWithLocal";
import FavouritesWithSession from "@/components/favourites/FavouritesWithSession";
import { auth } from "@/lib/auth/auth";
import { AnimalType } from "@/lib/generated/prisma";
import { capitalise, checkAnimalType } from "@/lib/utils";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

export default async function Favourites({ params }: { params: Promise<{ slug: string }> }) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    // Initial check to make sure slug is valid.
    const { slug } = await params;
    const animalType = capitalise(slug) as AnimalType;
    if (!checkAnimalType(animalType)) return notFound();

    return !session ? <FavouritesWithLocal animalType={animalType} /> : <FavouritesWithSession session={session} animalType={animalType} />;
}
