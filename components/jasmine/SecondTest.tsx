"use client";

import { REGEXP_ONLY_CHARS } from "input-otp";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { useEffect, useState } from "react";

export default function SecondTest({
    handleSecondTestComplete,
    secondStagePassed,
}: {
    handleSecondTestComplete: () => void;
    secondStagePassed: boolean;
}) {
    const [phrase, setPhrase] = useState("");
    useEffect(() => {
        if (phrase == process.env.NEXT_PUBLIC_SECRET_PHRASE) handleSecondTestComplete();
    }, [phrase]);
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center">
                <span>Well done!</span>
                <span>You got the when...</span>
                <span className="font-semibold">But can you get the where?</span>
            </div>
            <InputOTP
                maxLength={7}
                pattern={REGEXP_ONLY_CHARS}
                onChange={(value) => setPhrase(value)}
                inputMode="text"
                value={secondStagePassed ? process.env.NEXT_PUBLIC_SECRET_PHRASE : undefined}
            >
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                    <InputOTPSlot index={6} />
                </InputOTPGroup>
            </InputOTP>
        </>
    );
}
