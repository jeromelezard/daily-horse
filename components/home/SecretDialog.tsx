"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useRouter } from "next/navigation";

export interface DialogProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    userId: string;
}
export default function SecretDialog({ open, setOpen, userId }: DialogProps) {
    const router = useRouter();
    const [code, setCode] = useState("");

    useEffect(() => {
        if (code == process.env.NEXT_PUBLIC_SECRET_CODE) {
            setCookie();
        }
    }, [code]);

    async function setCookie() {
        try {
            const response = await fetch("/api/set-cookie", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            if (response.ok) {
                setOpen(false);

                setTimeout(() => {
                    router.push("/jasmine");
                }, 300);
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="flex justify-center w-80" aria-describedby={undefined}>
                <DialogHeader hidden>
                    <DialogTitle>Enter passcode</DialogTitle>
                </DialogHeader>
                <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} onChange={(value) => setCode(value)} inputMode="numeric">
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
            </DialogContent>
        </Dialog>
    );
}
