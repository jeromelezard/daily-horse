import RequireSignIn from "@/components/auth/RequireSignIn";
import AnimalCardGrid from "@/components/home/AnimalCardGrid";
import DisplayImage from "@/components/home/DisplayImage";
import ImageCarousel from "@/components/home/ImageCarousel";
import Timer from "@/components/layout/Timer";
import { auth } from "@/lib/auth/auth";
import { Role } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";
import { SCHNUK_DAY_PLAN, SCHNUK_START_DATE, getSchnukDayIndices } from "@/lib/schnuk";
import { daysSince } from "@/lib/utils";
import { Frown } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import { after } from "next/server";
import type { ReactNode } from "react";

const SCHNUK_DAY_CONTENT: readonly ReactNode[] = [
    <>
        <h1 className="text-center text-xl">
            <b>Happy birthday week!!! ❤️</b>
        </h1>
        <p>
            One year of bliss and pure happiness is captured in this picture, and there is one thought present in mind at this moment:
            <br />
            <br /> How did I become <b>the luckiest man in the entire world?</b>
            <br />
            <br /> Let me take you on a journey into how this came to be. See you tomorrow x
        </p>
    </>,
    <>
        <h1 className="text-center text-xl">
            <b>Day 2 - Paradise with pookie</b>
        </h1>
        <p>
            I never realised how comfortable I could be around a person, truly, until this holiday. You made my heart so full with love I didnt know
            how to expel it. While staying in a true paradise of a place I couldn't believe my luck I got to live an even greater paradise every
            single night, falling asleep holing the person I love most dearly in my arms. How lucky I am, but we are not close to the beginning yet…
        </p>
    </>,
    <>
        <h1 className="text-center text-xl">
            <b>Day 3 - Home time</b>
        </h1>
        <p>
            Coming home to England was never going to be easy, and yet effortlessly, you made it so. I dread to think of the person I would be if I
            didn't have you to come back to, and luckily, I dont have to. This is when our life together truly started, but we still have more to
            explore on how I became the luckiest man in the world. <br /> <br />
            Lets go to where it all began…
        </p>
    </>,
    <>
        <h1 className="text-center text-xl">
            <b>Day 4 - 最后，我的女朋友</b>
        </h1>
        <p>
            Theres a reason it only took 4 days to realise I had to make you mine. Maybe it was your smile, maybe it was your reels feed, maybe it was
            you buying me Chinese McDonalds while was ill in your hotel room. All I know is after 4 days I couldn't stand the idea that I would keep
            on travelling not knowing where you would be in my life.
            <br />
            <br />
            This is where it all began.. this point is where I first thought to myself I am the luckiest man in the world… and yet its not the
            beginning, so what was?
        </p>
    </>,
    <>
        <h1 className="text-center text-xl">
            <b>Day 5 - Crossing paths</b>
        </h1>
        <p>
            You could say it started from a spontaneous instagram message, but in my opinion it really started here, in Port Barton. <br />
            <br /> I only came here because you told me to, and it's here that we went from nothing to something. The gruelling journey from Puerto
            Princesa always had one silver lining that beat any pristine beach I was about to come across: the opportunity to message you again. This
            magical place could easily be traced as the true origin to me being the luckiest man in the world, but its a lie…
        </p>
    </>,
    <>
        <p>
            <strong>Day 6.</strong> TODO.
        </p>
    </>,
];

const AUTH_BYPASS = process.env.SCHNUK_DISABLE_AUTH == "1";
const SHOW_DEV_DAY_LINKS = process.env.NODE_ENV !== "production";
const PREVIEW_EMAIL = "jerome.lezard@gmail.com";

function DevDayLinks({ active }: { active: number | null }) {
    if (!SHOW_DEV_DAY_LINKS) return null;
    return (
        <div className="flex flex-wrap justify-center gap-2 mt-6 px-4">
            {SCHNUK_DAY_PLAN.map((_, i) => {
                const day = i + 1;
                const isActive = active === day;
                return (
                    <Link
                        key={day}
                        href={`/schnuk?day=${day}`}
                        className={
                            isActive
                                ? "px-3 py-1 rounded-full bg-slate-700 text-white text-xs font-medium"
                                : "px-3 py-1 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-medium transition-colors"
                        }
                    >
                        Day {day}
                    </Link>
                );
            })}
            <Link
                href="/schnuk"
                className={
                    active === null
                        ? "px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-medium"
                        : "px-3 py-1 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-xs font-medium transition-colors"
                }
            >
                Today
            </Link>
        </div>
    );
}

export default async function SchnukPage({ searchParams }: { searchParams: Promise<{ day?: string }> }) {
    const session = AUTH_BYPASS ? null : await auth.api.getSession({ headers: await headers() });

    if (!AUTH_BYPASS) {
        if (!session) return <RequireSignIn message="Please sign in to view this page." />;
        const role = session.user.role as Role;
        if (role !== "Admin") return notFound();
    }

    const sp = await searchParams;
    const overrideDay = sp.day !== undefined ? Number.parseInt(sp.day, 10) : NaN;
    const canPreview = AUTH_BYPASS || session?.user.email === PREVIEW_EMAIL;
    const isPreview = canPreview && Number.isFinite(overrideDay);

    const dayIndex = isPreview ? overrideDay - 1 : daysSince(SCHNUK_START_DATE);
    const indices = getSchnukDayIndices(dayIndex);

    const [images, foundUser] = await Promise.all([
        indices.length === 0
            ? Promise.resolve([])
            : prisma.scheduledImage.findMany({
                  where: { animalType: "Schnuk", index: { in: indices } },
                  orderBy: { index: "asc" },
              }),
        session
            ? prisma.user.findUnique({
                  where: { id: session.user.id },
                  include: { favourites: { where: { animalType: "Schnuk" } } },
              })
            : Promise.resolve(null),
    ]);

    if (images.length === 0) {
        const beforeStart = dayIndex < 0;
        const afterEnd = dayIndex >= SCHNUK_DAY_PLAN.length;
        const message = beforeStart
            ? "Schnuk hasn't started yet — come back tomorrow!"
            : afterEnd
              ? "Schnuk's week is over :("
              : "No schnuk pics to show :(";
        return (
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-3 pt-16 pb-10 px-6 text-center">
                    <Frown className="size-16 text-muted-foreground" strokeWidth={1.5} />
                    <h2 className="text-xl font-semibold">{message}</h2>
                </div>
                <AnimalCardGrid animalType="Schnuk" userRole={AUTH_BYPASS ? "Admin" : (foundUser?.role ?? null)} />
                <DevDayLinks active={isPreview ? overrideDay : null} />
            </div>
        );
    }

    const unpublished = images.filter((img) => !img.published);
    if (!isPreview && unpublished.length > 0) {
        after(async () => {
            await prisma.scheduledImage.updateMany({
                where: { scheduledImageId: { in: unpublished.map((i) => i.scheduledImageId) } },
                data: { published: new Date() },
            });
        });
    }

    return (
        <div className="flex flex-col items-center justify-center">
            {images.length === 1 ? (
                <DisplayImage image={images[0]} session={session} userFavourites={foundUser ? foundUser.favourites : undefined} />
            ) : (
                <ImageCarousel images={images} session={session} userFavourites={foundUser ? foundUser.favourites : undefined} />
            )}
            {SCHNUK_DAY_CONTENT[dayIndex] && (
                <div className="w-full max-w-prose px-0 mt-6">
                    <div className="rounded-2xl bg-white shadow-sm border border-slate-200/70 px-6 py-5 text-slate-700 leading-relaxed space-y-3">
                        {SCHNUK_DAY_CONTENT[dayIndex]}
                    </div>
                </div>
            )}
            <Timer animal="Schnuk" />
            <AnimalCardGrid animalType="Schnuk" userRole={AUTH_BYPASS ? "Admin" : (foundUser?.role ?? null)} />
            <DevDayLinks active={isPreview ? overrideDay : null} />
        </div>
    );
}
