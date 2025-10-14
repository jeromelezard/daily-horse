"use client";

import Image from "next/image";
import { AnimatePresence, cubicBezier, motion } from "framer-motion";
import { useState } from "react";
import { Heart } from "lucide-react";
import FavouritesButtonSession from "./FavouritesButtonSession";
import FavouritesButtonLocal from "./FavouritesButtonLocal";
import { DisplayHorseProps } from "./MainPage";

export const loadingVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: { duration: 2, ease: cubicBezier(0.16, 1, 0.3, 1) },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.2, ease: cubicBezier(0.7, 0, 0.84, 0) },
    },
};

export default function DisplayHorse({ horse, session, userFavourites = [] }: DisplayHorseProps) {
    const [portrait, setPortrait] = useState<boolean | null>(null);
    const [showHeart, setShowHeart] = useState(false);

    function toggleHeart() {
        setShowHeart(true);
        setTimeout(() => setShowHeart(false), 1000);
    }

    return (
        <AnimatePresence>
            <motion.div
                key="horse1"
                id="horse"
                className={`${!portrait && "w-full"} relative max-w-5xl max-h-[80vh] flex justify-center`}
                variants={loadingVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Image
                    src={horse.url}
                    alt="Random picture"
                    width={1600}
                    height={1200}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-lg"
                    priority
                    onLoad={(event) => {
                        const imgElement = event.target as HTMLImageElement;
                        const isPortrait = imgElement.naturalHeight > imgElement.naturalWidth;
                        if (isPortrait) {
                            setPortrait(true);
                        } else {
                            setPortrait(false);
                        }
                    }}
                />
                <AnimatePresence>
                    {showHeart && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ y: -150, opacity: 0, rotateZ: 75 }}
                            transition={{
                                duration: 0.4,
                                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            }}
                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        >
                            <Heart className="fill-red-500 text-red-500 h-24 w-24" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {session ? (
                    <FavouritesButtonSession
                        scheduledImage={horse}
                        toggleHeart={toggleHeart}
                        userFavourites={userFavourites}
                        userId={session.user.id}
                    />
                ) : (
                    <FavouritesButtonLocal scheduledImage={horse} toggleHeart={toggleHeart} />
                )}
            </motion.div>
        </AnimatePresence>
    );
}
