import MainPage from "@/components/home/MainPage";
import Footer from "@/components/layout/Footer";
import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/prisma";
import { getHorseIndexWithSkips } from "@/lib/utils";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

export default async function Home() {
    const globalState = await getHorseIndexWithSkips();
    const { currentIndex, skips } = globalState;

    const todaysHorse = await prisma.scheduledImage.findFirst({
        where: { index: { gte: currentIndex } },
        orderBy: { dateIngested: "asc" },
    });

    if (!todaysHorse) return notFound();

    if (!todaysHorse.published)
        await prisma.scheduledImage.update({ where: { scheduledImageId: todaysHorse.scheduledImageId }, data: { published: new Date() } });

    const session = await auth.api.getSession({ headers: await headers() });
    let foundUser = null;
    if (session) foundUser = (await prisma.user.findUnique({ where: { id: session?.user.id }, include: { favourites: true } })) ?? null;

    if (todaysHorse.index != currentIndex)
        await prisma.globalState.update({
            where: { category: "Horse" },
            data: { skips: skips + (todaysHorse.index - currentIndex) },
        });

    return (
        <div className="flex flex-col items-center justify-center">
            <MainPage horse={todaysHorse} session={session} userFavourites={foundUser ? foundUser.favourites : undefined} />
            <Footer />
        </div>
    );
}
