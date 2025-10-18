import ImageList from "@/components/favourites/ImageList";
import { AnimalType } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";
import { capitalise, checkAnimalType, getIndexWithSkips } from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function Archive({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const animalType = capitalise(slug) as AnimalType;
    if (!checkAnimalType(animalType)) return notFound();

    const { currentIndex } = await getIndexWithSkips(animalType);
    const horses = await prisma.scheduledImage.findMany({ where: { animalType }, orderBy: { index: "asc" }, take: currentIndex });

    return <ImageList images={horses} pageTitle="Archive" notFoundMessage="Images not found." />;
}
