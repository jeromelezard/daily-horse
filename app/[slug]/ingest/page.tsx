import DisplayImageBatch from "@/components/ingest/DisplayImageBatch";
import { auth } from "@/lib/auth/auth";
import { AnimalType, Role } from "@/lib/generated/prisma";
import { capitalise, checkAnimalType } from "@/lib/utils";
import { getUnapprovedImageBatch } from "@/lib/ingest";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

export default async function IngestPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const animalType = capitalise(slug) as AnimalType;
    if (!checkAnimalType(animalType)) return notFound();

    const images = await getUnapprovedImageBatch(animalType);
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session || (session.user.role as Role) != "Admin") return notFound();

    return (
        <div className="flex flex-col items-center justify-center">
            <DisplayImageBatch initialImages={images} animalType={animalType} />
        </div>
    );
}
