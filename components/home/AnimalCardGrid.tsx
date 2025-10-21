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
        if (animalType != animal) {
            if (animal == "Bobby") {
                if (userRole == "Jasmine" || userRole == "Admin") return true;
                return false;
            }
            return true;
        }
    }
    return (
        <AnimatePresence>
            <motion.div
                variants={loadingVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col justify-center items-center gap-3 mt-3 pb-5"
            >
                <h2 className="font-semibold">Check out our other daily animals!</h2>

                <div className="flex gap-3">
                    {Object.values(AnimalType).map((animal, index) => (
                        <Fragment key={animal}>{showCard(animal) && <AnimalCard key={index} animal={animal} />}</Fragment>
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
