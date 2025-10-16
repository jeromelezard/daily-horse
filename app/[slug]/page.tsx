import AnimalCardGrid from "@/components/home/AnimalCardGrid";
import MainPage from "@/components/home/MainPage";
import Timer from "@/components/layout/Timer";
import { auth } from "@/lib/auth/auth";
import { AnimalType } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";
import { capitalise, checkAnimalType, getIndexWithSkips } from "@/lib/utils";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

export default async function AnimalPage({ params }: { params: Promise<{ slug: string }> }) {
    // Initial check to make sure slug is valid.
    const { slug } = await params;
    const animalType = capitalise(slug) as AnimalType;

    if (!checkAnimalType(animalType)) return notFound();

    const globalState = await getIndexWithSkips(animalType);
    const { currentIndex, skips } = globalState;

    const todaysImage = await prisma.scheduledImage.findFirst({
        where: { animalType, index: { gte: currentIndex } },
        orderBy: { dateIngested: "asc" },
    });

    if (!todaysImage) return notFound();

    if (!todaysImage.published)
        await prisma.scheduledImage.update({ where: { scheduledImageId: todaysImage.scheduledImageId }, data: { published: new Date() } });

    const session = await auth.api.getSession({ headers: await headers() });
    let foundUser = null;
    if (session)
        foundUser = (await prisma.user.findUnique({ where: { id: session?.user.id }, include: { favourites: { where: { animalType } } } })) ?? null;

    if (todaysImage.index != currentIndex) {
        await prisma.globalState.update({
            where: { category: animalType },
            data: { skips: skips + (todaysImage.index! - currentIndex) },
        });
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <MainPage image={todaysImage} session={session} userFavourites={foundUser ? foundUser.favourites : undefined} />
            <Timer animal={animalType} />
            {/* <div className="flex flex-col justify-center items-center  gap-3"> */}
            <AnimalCardGrid animalType={animalType} />
            {/* </div> */}
        </div>
    );
}
