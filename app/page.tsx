import CountdownToMidnight from "@/components/home/Countdown";
import DisplayHorse from "@/components/home/DisplayHorse";
import FavouritesButton from "@/components/home/FavouritesButton";
import { prisma } from "@/lib/prisma";
import { formatFullDate, getHorseIndexWithSkips } from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function Home() {
    const globalState = await getHorseIndexWithSkips();
    if (!globalState) return notFound();
    const { currentIndex, skips } = globalState;

    const todaysHorse = await prisma.scheduledImage.findFirst({
        where: { index: { gte: currentIndex + 2 } },
        orderBy: { dateIngested: "asc" },
    });

    if (!todaysHorse) return notFound();

    // if (todaysHorse.index != currentIndex)
    //     await prisma.globalState.update({
    //         where: { category: "Horse" },
    //         data: { skips: skips + (todaysHorse.index - currentIndex) },
    //     });

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-semibold mb-8 text-center">It's the {formatFullDate()}, here is your horse OwO</h1>
            <DisplayHorse horse={todaysHorse} />

            <h2 className="absolute bottom-0 text-lg font-semibold mb-2 text-center mt-4">
                Next horse in <CountdownToMidnight />
            </h2>
        </div>
    );
}
