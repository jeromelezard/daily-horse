import DisplayImageBatch from "@/components/ingest/DisplayImageBatch";
import { auth } from "@/lib/auth/auth";
import { Role } from "@/lib/generated/prisma";

import { getUnapprovedImageBatch } from "@/lib/ingest";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

export default async function IngestPage() {
    const images = await getUnapprovedImageBatch();
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session || (session.user.role as Role) != "Admin") return notFound();

    return (
        <div className="flex flex-col items-center justify-center">
            <DisplayImageBatch initialImages={images} />
        </div>
    );
}
