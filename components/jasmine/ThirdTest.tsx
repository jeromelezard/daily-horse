"use client";

import { REGEXP_ONLY_CHARS } from "input-otp";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { loadingVariants } from "../home/DisplayImage";

export default function ThirdTest({ thirdTestComplete }: { thirdTestComplete: () => void }) {
    const [phrase, setPhrase] = useState("");
    useEffect(() => {
        if (phrase.toLowerCase() == process.env.NEXT_PUBLIC_SECOND_SECRET_PHRASE) thirdTestComplete();
    }, [phrase]);
    return (
        <AnimatePresence>
            <motion.div key="thirdTest" variants={loadingVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-5">
                <div className="text-center flex flex-col">
                    <span>You're not done yet.</span>
                    <span>Lets give you a crossword style hint:</span>
                    <span className="font-semibold mt-3">Your Shein is on the move, say.</span>
                    <span className="font-semibold">Or a witty response to sign near a lift.</span>
                </div>
                <InputOTP
                    maxLength={12}
                    pattern={REGEXP_ONLY_CHARS}
                    onChange={(value) => setPhrase(value)}
                    inputMode="text"
                    value={phrase.toUpperCase()}
                    className="flex flex-col justify-center items-center w-full"
                >
                    <div className="flex flex-col justify-center items-center gap-3 text-center ml-4">
                        <InputOTPGroup className="text-center flex justify-center">
                            {[...Array(5)].map((_, idx) => (
                                <InputOTPSlot index={idx} key={idx} />
                            ))}
                        </InputOTPGroup>
                        <InputOTPGroup>
                            {[...Array(7)].map((_, idx) => (
                                <InputOTPSlot index={5 + idx} key={idx} />
                            ))}
                        </InputOTPGroup>
                    </div>
                </InputOTP>
            </motion.div>
        </AnimatePresence>
    );
}
