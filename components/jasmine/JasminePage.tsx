"use client";

import { useEffect, useState } from "react";
import SecondTest from "./SecondTest";
import ThirdTest from "./ThirdTest";
import { AnimatePresence, motion } from "framer-motion";
import { loadingVariants } from "../home/DisplayHorse";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function JasminePage() {
    const [secondStagePassed, setSecondStagePassed] = useState<boolean | null>(null);
    const [thirdStagePassed, setThirdStagePassed] = useState<boolean | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const secondStageDone = localStorage.getItem("secondStageDone");
            const thirdStageDone = localStorage.getItem("thirdStageDone");

            if (secondStageDone && JSON.parse(secondStageDone)) setSecondStagePassed(true);
            else setSecondStagePassed(false);
            if (thirdStageDone && JSON.parse(thirdStageDone)) setThirdStagePassed(true);
            else setThirdStagePassed(false);
        }
    }, []);

    function secondTestComplete() {
        setSecondStagePassed(true);
        localStorage.setItem("secondStageDone", "true");
    }

    function thirdTestComplete() {
        setThirdStagePassed(true);
        localStorage.setItem("thirdStageDone", "true");
    }

    return (
        <AnimatePresence mode="wait">
            {!thirdStagePassed ? (
                <motion.div
                    key="tests"
                    variants={loadingVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="flex justify-center items-center flex-col gap-5"
                >
                    {secondStagePassed === null ? (
                        <FontAwesomeIcon icon={faSpinner} spin />
                    ) : (
                        <SecondTest handleSecondTestComplete={secondTestComplete} secondStagePassed={secondStagePassed} />
                    )}

                    <ThirdTest thirdTestComplete={thirdTestComplete} />
                </motion.div>
            ) : (
                <motion.div
                    key="reward"
                    variants={loadingVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.4 }}
                    className="flex justify-center items-center flex-col gap-5"
                >
                    <div>🥳🥳🥳🥳🥳🥳🥳🥳🥳</div>
                    <div className="font-semibold">Well done!!</div>
                    <a href="https://www.youtube.com/watch?v=j5a0jTc9S10" target="_blank" className="text-blue-500 underline">
                        Click this link for your reward reward ❤️
                    </a>
                    <Image src={"/cutie.png"} alt="cutie" width={200} height={75} />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
