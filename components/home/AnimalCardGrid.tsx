"use client";
import { AnimalType } from "@/lib/generated/prisma";
import AnimalCard from "./AnimalCard";
import { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { loadingVariants } from "./DisplayImage";

interface AnimalCardGridProps {
    animalType: AnimalType;
}

export default function AnimalCardGrid({ animalType }: AnimalCardGridProps) {
    return (
        <AnimatePresence>
            <motion.div
                variants={loadingVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col justify-center items-center gap-3 mt-3"
            >
                <h2 className="font-semibold">Check out our other daily animals!</h2>

                <div className="flex gap-3">
                    {Object.values(AnimalType).map((animal, index) => (
                        <Fragment key={animal}>{animalType != animal && <AnimalCard key={index} animal={animal} />}</Fragment>
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
