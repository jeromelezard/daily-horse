"use client";

import { AnimalType } from "@/lib/generated/prisma";
import { faCarrot, faHeart, faHorseHead, faPaw, faWater } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion } from "framer-motion";

interface AnimalCardProps {
    animal: AnimalType;
    selected?: boolean;
}

export default function AnimalCard({ animal, selected = false }: AnimalCardProps) {
    return (
        <Link href={`/${animal.toLowerCase()}`} aria-current={selected ? "page" : undefined} aria-label={animal}>
            <motion.div
                key={animal}
                whileTap={{ scale: 0.85 }}
                className={
                    selected
                        ? "bg-slate-700 ring-2 ring-slate-700 rounded-2xl flex items-center justify-center p-5 cursor-default shadow-md"
                        : "bg-slate-300/50 hover:bg-slate-300 rounded-2xl flex items-center justify-center p-5 cursor-pointer transition-colors"
                }
            >
                <FontAwesomeIcon icon={getAnimalIcon(animal)} className={selected ? "text-3xl text-white" : "text-3xl text-slate-700"} />
            </motion.div>
        </Link>
    );
}

function getAnimalIcon(animal: AnimalType) {
    switch (animal) {
        case "Horse":
            return faHorseHead;
        case "Bobby":
            return faPaw;
        case "Bunny":
            return faCarrot;
        case "Dolphin":
            return faWater;
        case "Schnuk":
            return faHeart;
    }
}
