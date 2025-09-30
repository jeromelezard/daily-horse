"use client";

import { useSession } from "@/lib/auth/auth-client";
import { useEffect } from "react";

export default function LoginSync() {
    const localData = typeof window !== "undefined" ? localStorage.getItem("favourites") : null;
    if (!localData || localData.length == 0) return null;
    const { data: session } = useSession();

    useEffect(() => {
        if (session?.user) {
            if (localData) {
                fetch("/api/sync", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        data: localData,
                    }),
                }).then(() => {
                    console.log("User data synced successfully");
                    localStorage.removeItem("favourites");
                });
            }
        }
    }, [session]);

    return null;
}
