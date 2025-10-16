"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getIconForProvider } from "@/lib/utils";

import { Provider } from "@/lib/types";
import { Button } from "../ui/button";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { signIn } from "@/lib/auth/auth-actions";
import { usePathname } from "next/navigation";

export interface DialogProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}
export default function SignInDialog({ open, setOpen }: DialogProps) {
    const pathname = usePathname();
    const [chosenProvider, setChosenProvider] = useState<Provider | null>(null);

    function isProviderEnabled(provider: Provider) {
        if (provider == "Google" && JSON.parse(process.env.NEXT_PUBLIC_GOOGLE_AUTH_ENABLED!)) return true;
        if (provider == "Microsoft" && JSON.parse(process.env.NEXT_PUBLIC_MICROSOFT_AUTH_ENABLED!)) return true;
        if (provider == "Apple" && JSON.parse(process.env.NEXT_PUBLIC_APPLE_AUTH_ENABLED!)) return true;
        return false;
    }

    async function signInSocial(provider: Provider) {
        setChosenProvider(provider);
        await signIn(provider, pathname);
    }

    useEffect(() => {
        setTimeout(() => {
            setChosenProvider(null);
        }, 5000);
    }, [chosenProvider]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>Sign in</DialogTitle>
                    <DialogDescription>Select auth provider</DialogDescription>
                </DialogHeader>

                <DialogFooter className="flex flex-row justify-start">
                    {Object.keys(Provider).map((provider) => (
                        <div key={provider} className="flex-row justify-start">
                            <Button
                                onClick={() => signInSocial(provider as Provider)}
                                disabled={!!chosenProvider || !isProviderEnabled(provider as Provider)}
                                className={"cursor-pointer"}
                            >
                                {chosenProvider == provider ? (
                                    <FontAwesomeIcon icon={faSpinner} spin />
                                ) : (
                                    <FontAwesomeIcon icon={getIconForProvider(provider as Provider)} />
                                )}

                                {provider}
                            </Button>
                        </div>
                    ))}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
