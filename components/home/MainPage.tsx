"use client";

import { ScheduledImage } from "@/lib/generated/prisma";
import DisplayHorse from "./DisplayHorse";
import { BetterAuthSession } from "@/lib/types";
import HorseFunctions from "./HorseFunctions";
import { useEffect, useState } from "react";

export interface DisplayHorseProps {
    horse: ScheduledImage;
    session: BetterAuthSession | null;
    userFavourites?: ScheduledImage[];
}

export type HorseFood = "Carrot" | "Apple" | "Donut";

export default function MainPage({ horse, session, userFavourites = [] }: DisplayHorseProps) {
    const [iconStack, setIconStack] = useState<HorseFood[]>([]);
    function feedAnimal(food: HorseFood) {
        setIconStack((prevArray) => [...prevArray, food]);
    }

    return (
        <>
            <DisplayHorse horse={horse} session={session} userFavourites={userFavourites} />
            {/* <HorseFunctions feedAnimal={feedAnimal} /> */}
        </>
    );
}
