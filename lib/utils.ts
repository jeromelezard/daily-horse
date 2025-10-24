import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { prisma } from "./prisma";
import { AnimalType, AuthProvider } from "./generated/prisma";
import { faApple, faGoogle, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { notFound } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function daysSince(givenDate: Date) {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const startOfDayGivenDate = new Date(givenDate);
    startOfDayGivenDate.setHours(0, 0, 0, 0);

    const timeDifferenceMs = currentDate.getTime() - startOfDayGivenDate.getTime();

    const daysDifference = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24));

    return daysDifference;
}

export function formatFullDate(date: Date = new Date()): string {
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    const getOrdinalSuffix = (n: number): string => {
        if (n >= 11 && n <= 13) return "th";
        switch (n % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    };

    return `${day}${getOrdinalSuffix(day)} of ${month}, ${year}`;
}

export async function getIndexWithSkips(category: AnimalType): Promise<{
    currentIndex: number;
    skips: number;
}> {
    const globalState = await prisma.globalState.findUnique({
        where: { category },
    });

    if (!globalState) return notFound();

    let currentIndex = daysSince(globalState.startDate) + 1;

    // ONLY USE ABOVE CURRENT INDEX IF DAYSSINCE IS GREATER THAN SHUFFLE ARRAY LENGTH BUT STILL ON FIRST CYCLE

    if (globalState.cycleImages) {
        let shuffleOrder = globalState.shuffleOrder;
        const todaysDate = new Date();
        const totalImages = await prisma.scheduledImage.count({ where: { animalType: category } });

        const newCycle = (daysSince(globalState.startDate) + 1) % totalImages == 1;

        const shuffleArrayOutOfSync = currentIndex > shuffleOrder.length && currentIndex <= totalImages && shuffleOrder.length != 0;

        if (!shuffleArrayOutOfSync) {
            if (newCycle && (!globalState.dateShuffled || daysSince(todaysDate) != daysSince(globalState.dateShuffled))) {
                const arr = [...Array(totalImages).keys()].map((i) => i + 1);
                const newShuffle = shuffleArray(arr);
                await prisma.globalState.update({ data: { shuffleOrder: newShuffle, dateShuffled: new Date() }, where: { category } });
                shuffleOrder = newShuffle;
            }

            currentIndex = shuffleOrder[daysSince(globalState.startDate) % totalImages];
        }
    }

    return {
        currentIndex: currentIndex + globalState.skips,
        skips: globalState.skips,
    };
}

export function getIconForProvider(provider: AuthProvider) {
    switch (provider) {
        case "Google":
            return faGoogle;
        case "Microsoft":
            return faMicrosoft;
        case "Apple":
            return faApple;
    }
}

export const capitalise = (s: string) => s && s[0].toUpperCase() + s.slice(1);

export function checkAnimalType(animalType: AnimalType) {
    return Object.values(AnimalType).includes(animalType);
}

export function shuffleArray(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
