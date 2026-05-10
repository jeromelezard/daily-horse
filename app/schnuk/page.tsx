import RequireSignIn from "@/components/auth/RequireSignIn";
import AnimalCardGrid from "@/components/home/AnimalCardGrid";
import DisplayImage from "@/components/home/DisplayImage";
import ImageCarousel from "@/components/home/ImageCarousel";
import Timer from "@/components/layout/Timer";
import { auth } from "@/lib/auth/auth";
import { Role } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";
import { SCHNUK_DAY_PLAN, SCHNUK_START_DATE, getSchnukDayIndices } from "@/lib/schnuk";
import { SCHNUK_DAY_CONTENT } from "@/lib/schnukContent";
import { daysSince } from "@/lib/utils";
import { Frown } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import { after } from "next/server";

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
