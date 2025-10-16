"use client";
import type { AnimalType, IngestedUnsplashImage } from "@/lib/generated/prisma";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { getUnapprovedImageBatch, reviewImage } from "@/lib/ingest";
import { Spinner } from "../ui/spinner";
import { AnimatePresence, motion } from "framer-motion";
import { loadingVariants } from "../home/DisplayImage";

interface DisplayImageBatchProps {
    initialImages: IngestedUnsplashImage[];
    animalType: AnimalType;
}

function DisplayImageBatch({ initialImages, animalType }: DisplayImageBatchProps) {
    /**
     * FIRST HORSE: HFX5CB5PPPQ
     */

    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageBatch, setImageBatch] = useState(initialImages);
    const [portrait, setPortrait] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(false);

    const [finished, setFinished] = useState(false);

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

        await reviewImage(batch[index], approved, animalType);

        setCurrentIndex((prev) => prev + 1);
    }, []);

    useEffect(() => {
        async function handleBatch() {
            const newBatch = await getUnapprovedImageBatch(animalType);
            if (newBatch.length == 0) setFinished(true);
            setImageBatch(newBatch);
            setCurrentIndex(0);
            setLoading(false);
        }

        if (currentIndex === imageBatch.length) {
            setLoading(true);
            handleBatch();
        }
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
                    {!loading && imageBatch[currentIndex] ? (
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
                    ) : (
                        <>{finished ? "Ingest more images" : <Spinner />}</>
                    )}
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
