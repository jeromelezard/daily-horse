import { auth } from "@/lib/auth/auth";
import { Role } from "@/lib/generated/prisma";

import { headers } from "next/headers";
import { notFound } from "next/navigation";

export default async function Jasmine() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session || ((session.user.role as Role) != "Admin" && (session.user.role as Role) != "Jasmine")) return notFound();

    return <div className="flex flex-col items-center justify-center">love u</div>;
}
