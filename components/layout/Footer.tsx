"use client";
import { AnimatePresence, motion } from "framer-motion";
import CountdownToMidnight from "../home/Countdown";
import { loadingVariants } from "../home/DisplayHorse";

export default function Footer() {
    return (
        <AnimatePresence>
            <motion.span variants={loadingVariants} initial="initial" animate="animate" exit="exit">
                <h2 className="text-md font-semibold mb-2 text-center mt-4 flex flex-row gap-1 items-center justify-center">
                    Next horse in <CountdownToMidnight />
                </h2>
            </motion.span>
        </AnimatePresence>
    );
}
