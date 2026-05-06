import AnimalCardGrid from "@/components/home/AnimalCardGrid";
import DisplayImage from "@/components/home/DisplayImage";
import RequireSignIn from "@/components/auth/RequireSignIn";
import { EmailTemplate } from "@/components/layout/EmailTemplate";
import Timer from "@/components/layout/Timer";
import { auth } from "@/lib/auth/auth";
import { AnimalType } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";
import { capitalise, checkAnimalType, getIndexWithSkips } from "@/lib/utils";
import { Frown } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
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

    const session = await auth.api.getSession({ headers: await headers() });
    let foundUser = null;
    if (session)
        foundUser = (await prisma.user.findUnique({ where: { id: session?.user.id }, include: { favourites: { where: { animalType } } } })) ?? null;

    if (animalType == "Bobby") {
        if (!session) return <RequireSignIn message="Please sign in to view this page." />;
        if (!foundUser || (foundUser.role != "Jasmine" && foundUser.role != "Admin")) return notFound();
    }

    if (!todaysImage) {
        return (
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-3 pt-16 pb-10 px-6 text-center">
                    {animalType === "Horse" ? (
                        <Image src="/sneeze.png" alt="Sad horse" width={160} height={160} className="size-40 object-contain" />
                    ) : animalType === "Bunny" ? (
                        <Image src="/no.jpg" alt="Sad bunny" width={160} height={160} className="size-40 object-contain" />
                    ) : animalType === "Dolphin" ? (
                        <Image src="/deep.png" alt="Sad dolphin" width={160} height={160} className="size-40 object-contain" />
                    ) : (
                        <Frown className="size-16 text-muted-foreground" strokeWidth={1.5} />
                    )}
                    <h2 className="text-xl font-semibold">No more {animalType.toLowerCase()} pics to show :(</h2>
                </div>
                <AnimalCardGrid animalType={animalType} userRole={foundUser?.role ?? null} />
            </div>
        );
    }

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
