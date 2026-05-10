"use client";

import DisplayImage from "@/components/home/DisplayImage";
import { ScheduledImage } from "@/lib/generated/prisma";
import { BetterAuthSession } from "@/lib/types";
import { animate, motion, PanInfo, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
    images: ScheduledImage[];
    session: BetterAuthSession | null;
    userFavourites?: ScheduledImage[];
}

const SPRING = { type: "spring" as const, stiffness: 320, damping: 34, mass: 0.8 };
const SLIDE_GAP = 24;

export default function ImageCarousel({ images, session, userFavourites }: Props) {
    const [index, setIndex] = useState(0);
    const [width, setWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);

    useEffect(() => {
        function update() {
            if (containerRef.current) setWidth(containerRef.current.offsetWidth);
        }
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    useEffect(() => {
        if (width > 0) animate(x, -index * (width + SLIDE_GAP), SPRING);
    }, [index, width, x]);

    useEffect(() => {
        if (width > 0) {
            const t = setTimeout(() => {
                animate(x, [0, -24, 0], { duration: 0.9, ease: [0.4, 0, 0.2, 1], times: [0, 0.5, 1] });
            }, 350);
            return () => clearTimeout(t);
        }
    }, [width, x]);

    function handleDragEnd(_: unknown, info: PanInfo) {
        const swipe = info.offset.x + info.velocity.x * 0.18;
        const threshold = width / 4;
        if (swipe < -threshold && index < images.length - 1) {
            setIndex(index + 1);
        } else if (swipe > threshold && index > 0) {
            setIndex(index - 1);
        } else {
            animate(x, -index * (width + SLIDE_GAP), SPRING);
        }
    }

    return (
        <div className="w-full max-w-5xl flex flex-col items-center">
            <div ref={containerRef} className="relative w-full overflow-hidden">
                <motion.div
                    className="flex cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ left: -(images.length - 1) * (width + SLIDE_GAP), right: 0 }}
                    dragElastic={0.18}
                    onDragEnd={handleDragEnd}
                    style={{ x, gap: SLIDE_GAP, touchAction: "pan-y" }}
                >
                    {images.map((image) => (
                        <div key={image.scheduledImageId} className="flex-shrink-0 w-full flex justify-center">
                            <DisplayImage image={image} session={session} userFavourites={userFavourites} />
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="flex gap-2 mt-4 items-center">
                {images.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-label={`Show image ${i + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                            i === index ? "bg-slate-700 w-6" : "bg-slate-300 w-2 hover:bg-slate-400"
                        }`}
                    />
                ))}
            </div>
            <p className="text-xs text-slate-500 mt-1">Swipe ← → to see more</p>
        </div>
    );
}
