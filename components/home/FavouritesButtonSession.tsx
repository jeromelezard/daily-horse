"use client";

import { useState } from "react";
import { ScheduledImage } from "@/lib/generated/prisma";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { toggleUserFavourite } from "@/lib/auth/utils";

interface FavouritesButtonProps {
    scheduledImage: ScheduledImage;
    toggleHeart: () => void;
    userFavourites: ScheduledImage[];
    userId: string;
}

export default function FavouritesButtonSession({ scheduledImage, toggleHeart, userFavourites, userId }: FavouritesButtonProps) {
    const [added, setAdded] = useState(!!userFavourites.find((fav) => fav.scheduledImageId == scheduledImage.scheduledImageId));

    async function toggleFavourite() {
        if (!added) toggleHeart();
        setAdded((prevAdded) => !prevAdded);
        const toggle = await toggleUserFavourite(userId, scheduledImage.scheduledImageId, added);
        if (!toggle) console.error("Failed to toggle fav"); // TODO proper error handling
    }

    return (
        <motion.button
            onClick={toggleFavourite}
            whileTap={{ scale: 0.85 }}
            className="absolute bottom-3 right-3 rounded-full bg-white/80 p-2 shadow-md hover:bg-white cursor-pointer"
        >
            <Heart className={`h-6 w-6 transition-colors ${added ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
        </motion.button>
    );
}
