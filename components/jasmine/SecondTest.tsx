"use client";

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { useEffect, useState } from "react";

export default function SecondTest() {
    const [phrase, setPhrase] = useState("");

    useEffect(() => {
        if (phrase == process.env.NEXT_PUBLIC_SECRET_PHRASE) console.log("win");
    }, [phrase]);
    return (
        <InputOTP maxLength={7} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} onChange={(value) => setPhrase(value)}>
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
    );
}
