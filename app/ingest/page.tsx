import DisplayImageBatch from "@/components/ingest/DisplayImageBatch";
import { getUnapprovedImageBatch } from "@/lib/ingest";

async function IngestPage() {
    const images = await getUnapprovedImageBatch();

    return (
        <div className="flex flex-col items-center justify-center">
            <DisplayImageBatch initialImages={images} />
        </div>
    );
}

export default IngestPage;
