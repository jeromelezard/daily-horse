"use client";

import { AnimalType, ScheduledImage } from "@/lib/generated/prisma";
import { useEffect, useState } from "react";

import ImageList from "./ImageList";

export default function FavouritesWithLocal({ animalType }: { animalType: AnimalType }) {
    const [favourites, setFavourites] = useState<ScheduledImage[]>([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const favourites = localStorage.getItem("favourites");
            if (favourites) {
                const favouritesArray: ScheduledImage[] = JSON.parse(favourites).filter((fav: ScheduledImage) => fav.animalType == animalType);
                setFavourites(favouritesArray);
            }
        }
    }, []);

    function removeFavourite(animalId: string) {
        if (animalId == "") return;
        localStorage.setItem("favourites", JSON.stringify(favourites.filter((fav) => fav.scheduledImageId != animalId)));
        setFavourites((prevFavs) => prevFavs.filter((fav) => fav.scheduledImageId != animalId));
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
