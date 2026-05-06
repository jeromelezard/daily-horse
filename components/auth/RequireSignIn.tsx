"use client";

import { useState } from "react";
import SignInDialog from "./SignInDialog";
import { Button } from "../ui/button";

export default function RequireSignIn({ message = "Please sign in to continue." }: { message?: string }) {
    const [open, setOpen] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center gap-4 mt-12 text-slate-700">
            <p>{message}</p>
            <Button onClick={() => setOpen(true)} className="cursor-pointer">
                Sign in
            </Button>
            <SignInDialog open={open} setOpen={setOpen} />
        </div>
    );
}
