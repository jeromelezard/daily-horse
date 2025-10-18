"use client";

import { AnimalType } from "@/lib/generated/prisma";
import { faCarrot, faHorseHead, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion } from "framer-motion";

interface AnimalCardProps {
    animal: AnimalType;
}

export default function AnimalCard({ animal }: AnimalCardProps) {
    return (
        <Link href={`/${animal.toLowerCase()}`}>
            <motion.div
                key={animal}
                whileTap={{ scale: 0.85 }}
                className={"bg-slate-300/50 rounded-2xl flex items-center justify-center p-5 cursor-pointer"}
            >
                <FontAwesomeIcon icon={getAnimalIcon(animal)} className="text-3xl text-slate-700" />
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
    }
}
