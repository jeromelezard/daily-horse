import ImageList from "@/components/favourites/ImageList";
import { prisma } from "@/lib/prisma";
import { getHorseIndexWithSkips } from "@/lib/utils";

export default async function Archive() {
    const { currentIndex } = await getHorseIndexWithSkips();

    const horses = await prisma.scheduledImage.findMany({ orderBy: { index: "asc" }, take: currentIndex });
    return <ImageList images={horses} pageTitle="Archive" notFoundMessage="Images not found." />;
}
