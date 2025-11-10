import { AnimalType } from "@/lib/generated/prisma";

interface EmailTemplateProps {
    imagesLeft: number;
    animalType: AnimalType;
}

export function EmailTemplate({ imagesLeft, animalType }: EmailTemplateProps) {
    return (
        <div>
            <p>
                There {imagesLeft == 1 ? "is" : "are"} {imagesLeft} {imagesLeft == 1 ? "image" : "images"} left on the "{animalType}" category.
            </p>
            <a href={`https://dailyhorsey.com/${animalType}/ingest`}>Click here to ingest</a>
        </div>
    );
}
