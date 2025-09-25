"use client";
import { ScheduledImage } from "@/lib/generated/prisma";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function FavouritesPage() {
    const [favourites, setFavourites] = useState<ScheduledImage[]>([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [animalToRemove, setAnimalToRemove] = useState("");
    useEffect(() => {
        if (typeof window !== "undefined") {
            const favourites = localStorage.getItem("favourites");
            if (favourites) {
                const favouritesArray: ScheduledImage[] = JSON.parse(favourites);
                setFavourites(favouritesArray);
            }
        }
    }, []);

    function removeFavourite() {
        if (animalToRemove == "") return;
        localStorage.setItem("favourites", JSON.stringify(favourites.filter((fav) => fav.scheduledImageId != animalToRemove)));
        setFavourites((prevFavs) => prevFavs.filter((fav) => fav.scheduledImageId != animalToRemove));
        setOpenDialog(false);
        setAnimalToRemove("");
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Your Favourites</h1>

            {favourites.length === 0 ? (
                <p className="text-gray-600">No favourites yet. Go add some animals!</p>
            ) : (
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
                    {favourites.map((fav) => (
                        <div
                            key={fav.scheduledImageId}
                            className="mb-4 break-inside-avoid relative group rounded-xl overflow-hidden shadow-md bg-white"
                        >
                            {/* Remove button */}
                            <button
                                className="absolute top-2 right-2 z-10 rounded-full bg-white/80 p-1 shadow hover:bg-white opacity-0 group-hover:opacity-100 transition"
                                onClick={() => {
                                    setOpenDialog(true);
                                    setAnimalToRemove(fav.scheduledImageId);
                                }}
                            >
                                <X className="h-5 w-5 text-gray-700" />
                            </button>

                            {/* Animal image */}
                            <img src={fav.url} alt={`Animal from ${fav.published}`} className="w-full h-auto object-contain" />

                            {/* Date footer */}
                            <div className="p-3 border-t text-sm text-gray-700">{new Date(fav.published ?? "").toLocaleDateString()}</div>
                        </div>
                    ))}
                </div>
            )}
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent className="">
                    <DialogHeader>
                        <DialogTitle>Are you sure?</DialogTitle>
                        <DialogDescription>Once its gone, it ain't coming back {"</3"}</DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="flex-row">
                        {/* <DialogClose asChild> */}
                        <Button type="button" variant="outline">
                            Close
                        </Button>
                        <Button type="button" variant="destructive" onClick={removeFavourite}>
                            Remove
                        </Button>
                        {/* </DialogClose> */}
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
