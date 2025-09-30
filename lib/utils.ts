import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { prisma } from "./prisma";
import { Provider } from "./generated/prisma";
import { faApple, faGoogle, faMicrosoft } from "@fortawesome/free-brands-svg-icons";

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

export async function getHorseIndexWithSkips(): Promise<{
    currentIndex: number;
    skips: number;
} | null> {
    const globalState = await prisma.globalState.findUnique({
        where: { category: "Horse" },
    });
    if (!globalState) return null;
    return {
        currentIndex: daysSince(globalState.startDate) + 1 + globalState.skips,
        skips: globalState.skips,
    };
}

export function getIconForProvider(provider: Provider) {
    switch (provider) {
        case "Google":
            return faGoogle;
        case "Microsoft":
            return faMicrosoft;
        case "Apple":
            return faApple;
    }
}
