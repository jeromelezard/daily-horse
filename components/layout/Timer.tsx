"use client";
import { AnimatePresence, motion } from "framer-motion";
import CountdownToMidnight from "../home/Countdown";
import { loadingVariants } from "../home/DisplayImage";
import { AnimalType } from "@/lib/generated/prisma";

export default function Timer({ animal }: { animal: AnimalType }) {
    return (
        <AnimatePresence>
            <motion.span variants={loadingVariants} initial="initial" animate="animate" exit="exit">
                <h2 className="text-xs font-semibold mb-2 text-center mt-2 flex flex-row gap-1 items-center justify-center">
                    Next {animal == "Bobby" ? animal : animal.toLowerCase()} in <CountdownToMidnight />
                </h2>
            </motion.span>
        </AnimatePresence>
    );
}
