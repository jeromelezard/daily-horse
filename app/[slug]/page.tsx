import AnimalCardGrid from "@/components/home/AnimalCardGrid";
import DisplayImage from "@/components/home/DisplayImage";
import { EmailTemplate } from "@/components/layout/EmailTemplate";
import Timer from "@/components/layout/Timer";
import { auth } from "@/lib/auth/auth";
import { AnimalType } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";
import { capitalise, checkAnimalType, getIndexWithSkips } from "@/lib/utils";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
    const session = await auth.api.getSession({ headers: await headers() });
    let foundUser = null;
    if (session)
        foundUser = (await prisma.user.findUnique({ where: { id: session?.user.id }, include: { favourites: { where: { animalType } } } })) ?? null;

    if (animalType == "Bobby" && (!foundUser || (foundUser.role != "Jasmine" && foundUser.role != "Admin"))) return notFound();

    if (!todaysImage.published) {
        await prisma.scheduledImage.update({ where: { scheduledImageId: todaysImage.scheduledImageId }, data: { published: new Date() } });
        const imagesLeft = await prisma.scheduledImage.count({ where: { animalType, index: { gt: currentIndex } } });
        if (imagesLeft < 8) {
            try {
                const { data, error } = await resend.emails.send({
                    from: "Horsey Info <jerome@dailyhorsey.com>",
                    to: ["jerome.lezard@gmail.com"],
                    subject: "Images are running out",
                    react: EmailTemplate({ imagesLeft, animalType }),
                });

                if (error) console.error("Email failed", error);
                console.log("Email sent successfully", data);
            } catch (err) {
                console.error("Email failed", err);
            }
        }
    }

    if (todaysImage.index != currentIndex) {
        await prisma.globalState.update({
            where: { category: animalType },
            data: { skips: skips + (todaysImage.index! - currentIndex) },
        });
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <DisplayImage image={todaysImage} session={session} userFavourites={foundUser ? foundUser.favourites : undefined} />
            <Timer animal={animalType} />
            <AnimalCardGrid animalType={animalType} userRole={foundUser?.role ?? null} />
        </div>
    );
}
