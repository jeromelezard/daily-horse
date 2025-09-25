"use client";

import { useEffect, useState } from "react";
import { ScheduledImage } from "@/lib/generated/prisma";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface FavouritesButtonProps {
    scheduledImage: ScheduledImage;
    toggleHeart: () => void;
}

export default function FavouritesButton({ scheduledImage, toggleHeart }: FavouritesButtonProps) {
    const [added, setAdded] = useState(false);
    const [userId, setUserId] = useState("");
    const [favourites, setFavourites] = useState<ScheduledImage[]>([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedId = localStorage.getItem("user_id");
            if (storedId) setUserId(storedId);

            const favourites = localStorage.getItem("favourites");
            if (favourites) {
                const favouritesArray: ScheduledImage[] = JSON.parse(favourites);
                setFavourites(favouritesArray);

                if (favouritesArray.find((fav) => fav.scheduledImageId == scheduledImage.scheduledImageId)) setAdded(true);
            }
        }
    }, []);

    function toggleFavourite() {
        // Check if this is a first time user.
        if (!userId) {
            const newId = crypto.randomUUID();
            localStorage.setItem("user_id", newId);
            setUserId(userId);
        }
        // Remove ID from local storage if already added.
        if (added) {
            localStorage.setItem("favourites", JSON.stringify(favourites.filter((fav) => fav.scheduledImageId != scheduledImage.scheduledImageId)));
            setFavourites((prevFavs) => prevFavs.filter((fav) => fav.scheduledImageId != scheduledImage.scheduledImageId));
            setAdded(false);
            return;
        }

        // Ensure ID is not already in storage to avoid duplicates, then add
        if (!favourites.find((fav) => fav.scheduledImageId == scheduledImage.scheduledImageId)) {
            toggleHeart();
            localStorage.setItem("favourites", JSON.stringify([...favourites, scheduledImage]));
            setFavourites((prevFavs) => [...prevFavs, scheduledImage]);
            setAdded(true);
        }
    }

    return (
        <motion.button
            onClick={toggleFavourite}
            whileTap={{ scale: 0.85 }}
            className="absolute bottom-3 right-3 rounded-full bg-white/80 p-2 shadow-md hover:bg-white"
        >
            <Heart className={`h-6 w-6 transition-colors ${added ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
        </motion.button>
    );
}
