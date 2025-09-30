import FavouritesWithLocal from "@/components/favourites/FavouritesWithLocal";
import FavouritesWithSession from "@/components/favourites/FavouritesWithSession";
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";

export default async function Favourites() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    return !session ? <FavouritesWithLocal /> : <FavouritesWithSession session={session} />;
}
