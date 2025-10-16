import { auth } from "../auth/auth";
import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient();
export enum Provider {
    Google = "Google",
    Microsoft = "Microsoft",
    Apple = "Apple",
}

export type BetterAuthSession = typeof auth.$Infer.Session;
export type BetterAuthClientSession = typeof authClient.$Infer.Session;
