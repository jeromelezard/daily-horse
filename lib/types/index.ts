import { auth } from "../auth/auth";

export enum Provider {
    Google = "Google",
    Microsoft = "Microsoft",
    Apple = "Apple",
}

export type BetterAuthSession = typeof auth.$Infer.Session;
