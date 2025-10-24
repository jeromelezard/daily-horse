"use server";

import { auth } from "./auth";
import { redirect } from "next/navigation";
import { AuthProvider } from "../generated/prisma";
import { headers } from "next/headers";

export async function signIn(provider: AuthProvider, callbackURL: string) {
    const { url } = await auth.api.signInSocial({
        body: {
            provider: provider.toLowerCase(),
            callbackURL,
        },
    });

    if (url) redirect(url);
}

export async function signOut() {
    return await auth.api.signOut({ headers: await headers() });
}
