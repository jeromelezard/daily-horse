"use client";

import { ScheduledImage } from "@/lib/generated/prisma";
import { useEffect, useState } from "react";
import FavouritesList from "./FavouritesList";

export default function FavouritesWithLocal() {
    const [favourites, setFavourites] = useState<ScheduledImage[]>([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const favourites = localStorage.getItem("favourites");
            if (favourites) {
                const favouritesArray: ScheduledImage[] = JSON.parse(favourites);
                setFavourites(favouritesArray);
            }
        }
    }, []);

    function removeFavourite(animalId: string) {
        if (animalId == "") return;
        localStorage.setItem("favourites", JSON.stringify(favourites.filter((fav) => fav.scheduledImageId != animalId)));
        setFavourites((prevFavs) => prevFavs.filter((fav) => fav.scheduledImageId != animalId));
    }

    return <FavouritesList favourites={favourites} removeFavourite={removeFavourite} />;
}
