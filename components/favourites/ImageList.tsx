"use client";

import { ScheduledImage } from "@/lib/generated/prisma";
import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Link from "next/link";

type FavouritesListProps = FavouritesNoDialog | FavouritesWithDialog;

interface Favourites {
    pageTitle: string;
    notFoundMessage: string;
    images: ScheduledImage[];
}
interface FavouritesWithDialog extends Favourites {
    removeImage: (animalId: string) => void;
    withDialog: boolean;
}

interface FavouritesNoDialog extends Favourites {
    removeImage?: (animalId: string) => void;
    withDialog?: undefined;
}

export default function ImageList({ pageTitle, notFoundMessage, images, removeImage, withDialog = true }: FavouritesListProps) {
    const [openDialog, setOpenDialog] = useState(false);
    const [animalToRemove, setAnimalToRemove] = useState("");

    return (
        <div className="max-w-6xl mx-auto p-0">
            <h1 className="text-3xl font-bold mb-6">{pageTitle}</h1>

            {images.length === 0 ? (
                <p className="text-gray-600">{notFoundMessage}</p>
            ) : (
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
                    {images.map((image) => (
                        <div
                            key={image.scheduledImageId}
                            className="mb-4 break-inside-avoid relative group rounded-xl overflow-hidden shadow-md bg-white"
                        >
                            {removeImage && (
                                <button
                                    className="absolute top-2 right-2 z-10 rounded-full bg-white/80 p-1 shadow hover:bg-white sm:opacity-0 group-hover:opacity-100 transition"
                                    onClick={() => {
                                        if (withDialog) setOpenDialog(true);
                                        setAnimalToRemove(image.scheduledImageId);
                                    }}
                                >
                                    <X className="h-5 w-5 text-gray-700" />
                                </button>
                            )}
                            <Link href={image.url} target="_blank">
                                <img src={image.url} alt={`Animal from ${image.published}`} className="w-full h-auto object-contain" />
                            </Link>

                            <div className="p-3 text-sm text-gray-700 font-semibold">
                                {image.published ? new Date(image.published).toLocaleDateString() : "No date found"}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {withDialog && removeImage && (
                <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you sure?</DialogTitle>
                            <DialogDescription>Once its gone, it ain't coming back {"</3"}</DialogDescription>
                        </DialogHeader>

                        <DialogFooter className="flex-row">
                            <Button type="button" variant="outline" onClick={() => setOpenDialog(false)}>
                                Close
                            </Button>
                            <Button
                                type="button"
                                variant="destructive"
                                onClick={() => {
                                    removeImage(animalToRemove);
                                    setOpenDialog(false);
                                    setAnimalToRemove("");
                                }}
                            >
                                Remove
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
}
