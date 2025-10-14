"use client";

import { motion } from "framer-motion";
import { Apple, Carrot, Donut } from "lucide-react";
import { HorseFood } from "./MainPage";
export default function HorseFunctions({ feedAnimal }: { feedAnimal: (food: HorseFood) => void }) {
    return (
        <div className=" max-w-5xl flex justify-end items-center w-full">
            <div className="rounded-full bg-white/80 py-2 shadow-md hover:bg-white max-w-5xl flex gap-4 cursor-pointer mt-3 px-4">
                <motion.button onClick={() => feedAnimal("Carrot")} whileTap={{ scale: 0.85 }} transition={{ duration: 0.1 }}>
                    <Carrot className={`h-6 w-6 transition-colors text-orange-400 `} />
                </motion.button>
                <motion.button onClick={() => feedAnimal("Apple")} whileTap={{ scale: 0.85 }}>
                    <Apple className={`h-6 w-6 transition-colors text-red-600`} />
                </motion.button>
                <motion.button onClick={() => feedAnimal("Donut")} whileTap={{ scale: 0.85 }}>
                    <Donut className={`h-6 w-6 transition-colors text-stone-800`} />
                </motion.button>
            </div>
        </div>
    );
}
