"use client";

import { AnimalType, ScheduledImage } from "@/lib/generated/prisma";
import { useEffect, useState } from "react";

import { SCHNUK_DAY_CONTENT, getSchnukDayForImageIndex } from "@/lib/schnukContent";
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
    }, [animalType]);

    function removeFavourite(animalId: string) {
        if (animalId == "") return;
        localStorage.setItem("favourites", JSON.stringify(favourites.filter((fav) => fav.scheduledImageId != animalId)));
        setFavourites((prevFavs) => prevFavs.filter((fav) => fav.scheduledImageId != animalId));
    }

    const footers =
        animalType === "Schnuk"
            ? Object.fromEntries(
                  favourites.map((fav) => {
                      const day = getSchnukDayForImageIndex(fav.index);
                      return [fav.scheduledImageId, SCHNUK_DAY_CONTENT[day] ?? null];
                  })
              )
            : undefined;

    return (
        <ImageList
            images={favourites}
            removeImage={removeFavourite}
            withDialog
            pageTitle="Your favourites"
            notFoundMessage="No favourites yet. Go add some animals!"
            footers={footers}
        />
    );
}
