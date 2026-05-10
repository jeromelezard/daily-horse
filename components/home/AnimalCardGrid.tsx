"use client";
import { AnimalType, Role } from "@/lib/generated/prisma";
import AnimalCard from "./AnimalCard";
import { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { loadingVariants } from "./DisplayImage";

interface AnimalCardGridProps {
    animalType: AnimalType;
    userRole: Role | null;
}

export default function AnimalCardGrid({ animalType, userRole }: AnimalCardGridProps) {
    function showCard(animal: AnimalType) {
        if (animal == "Bobby") {
            if (userRole == "Jasmine" || userRole == "Admin") return true;
            return false;
        }
        if (animal == "Schnuk") {
            return userRole == "Admin";
        }
        return true;
    }
    return (
        <AnimatePresence>
            <motion.div
                variants={loadingVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col justify-center items-center gap-3 mt-3 pb-5 px-4 w-full"
            >
                <h2 className="font-semibold">Check out our daily animals!</h2>

                <div className="flex flex-wrap justify-center gap-3 max-w-full">
                    {Object.values(AnimalType).map((animal, index) => (
                        <Fragment key={animal}>{showCard(animal) && <AnimalCard key={index} animal={animal} selected={animal === animalType} />}</Fragment>
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
