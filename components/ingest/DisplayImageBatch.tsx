"use client";
import type { IngestedUnsplashImage } from "@/lib/generated/prisma";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { getUnapprovedImageBatch, reviewImage } from "@/lib/ingest";
import { Spinner } from "../ui/spinner";
import { AnimatePresence, cubicBezier, motion } from "framer-motion";

interface DisplayImageBatchProps {
    initialImages: IngestedUnsplashImage[];
}
const loadingVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: { duration: 2, ease: cubicBezier(0.16, 1, 0.3, 1) },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.2, ease: cubicBezier(0.7, 0, 0.84, 0) },
    },
};
function DisplayImageBatch({ initialImages }: DisplayImageBatchProps) {
    /**
     * FIRST HORSE: HFX5CB5PPPQ
     */

    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageBatch, setImageBatch] = useState(initialImages);
    const [portrait, setPortrait] = useState<boolean | null>(null);

    const currentIndexRef = useRef(currentIndex);
    const imageBatchRef = useRef(imageBatch);

    useEffect(() => {
        currentIndexRef.current = currentIndex;
        imageBatchRef.current = imageBatch;
    }, [currentIndex, imageBatch]);

    const approveOrRejectImage = useCallback(async (approved: boolean) => {
        const index = currentIndexRef.current;
        const batch = imageBatchRef.current;

        if (!batch[index]) return;

        await reviewImage(batch[index], approved);

        setCurrentIndex((prev) => prev + 1);
    }, []);

    useEffect(() => {
        async function handleBatch() {
            const newBatch = await getUnapprovedImageBatch();
            setImageBatch(newBatch);
            setCurrentIndex(0);
        }

        if (currentIndex === imageBatch.length) handleBatch();
    }, [currentIndex, imageBatch.length]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowLeft") approveOrRejectImage(false);
            else if (event.key === "ArrowRight") approveOrRejectImage(true);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [approveOrRejectImage]);

    return (
        <>
            <main className="flex flex-col items-center justify-center p-6">
                <AnimatePresence>
                    <motion.div
                        key="horse1"
                        id="horse"
                        className={`${!portrait && "w-full"} max-w-5xl max-h-[80vh] flex justify-center`}
                        variants={loadingVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <Image
                            src={imageBatch[currentIndex].url}
                            alt="Random picture"
                            width={1600}
                            height={1200}
                            className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-lg"
                            priority
                            onLoad={(event) => {
                                console.log("hgello");
                                const imgElement = event.target as HTMLImageElement;
                                const isPortrait = imgElement.naturalHeight > imgElement.naturalWidth;
                                if (isPortrait) {
                                    setPortrait(true);
                                } else {
                                    setPortrait(false);
                                }
                            }}
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="flex gap-3 mt-3">
                    <Button variant={"outline"} onClick={() => approveOrRejectImage(false)}>
                        Reject
                    </Button>
                    <Button variant={"outline"} onClick={() => approveOrRejectImage(true)}>
                        Approve
                    </Button>
                </div>
            </main>
        </>
    );
}
export default DisplayImageBatch;
