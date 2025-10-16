import { BetterAuthSession } from "@/lib/types";
import { prisma } from "@/lib/prisma";
import ErrorLayout from "../error";
import { revalidatePath } from "next/cache";
import { toggleUserFavourite } from "@/lib/auth/utils";
import ImageList from "./ImageList";
import { AnimalType } from "@/lib/generated/prisma";

export default async function FavouritesWithSession({ session, animalType }: { session: BetterAuthSession; animalType: AnimalType }) {
    const user = await prisma.user.findUnique({ where: { id: session.user.id }, include: { favourites: { where: { animalType } } } });
    if (!user) return <ErrorLayout errorText="Could not find user" errorCode="500" action="home" />;
    const favourites = user.favourites;

    async function removeFavourite(animalId: string) {
        "use server";
        await toggleUserFavourite(session.user.id, animalId, true);
        revalidatePath("/favourites");
    }

    return (
        <ImageList
            images={favourites}
            removeImage={removeFavourite}
            withDialog
            pageTitle="Your favourites"
            notFoundMessage="No favourites yet. Go add some animals!"
        />
    );
}
