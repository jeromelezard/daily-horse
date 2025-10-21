"use client";
import { HeaderDropdownMenu } from "./HeaderDropdown";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { capitalise } from "@/lib/utils";
import { AnimalType } from "@/lib/generated/prisma";
import { BetterAuthSession } from "@/lib/types";

export default function Header({ session }: { session: BetterAuthSession | null }) {
    const [homeRoute, setHomeRoute] = useState("");
    const pathname = usePathname();

    useEffect(() => {
        setHomeRoute(pathname.split("/")[1]);
    }, [pathname]);

    function getTitle() {
        switch (capitalise(homeRoute) as AnimalType) {
            case "Bobby":
                return "Daily Bobby";
            case "Bunny":
                return "Daily Bunny";
            case "Dolphin":
                return "Daily Dolphin";
            default:
                return "Daily Horsey";
        }
    }
    return (
        <header className="flex flex-col items-center w-full mb-6 text-center transition-all">
            <div className="flex items-center gap-2 mb-2 pb-2 px-4 ">
                <Link href={`/${homeRoute}`} className="-mr-1">
                    {/* {homeRoute == "bobby" || homeRoute == "bunny" ? (
                        <Image src={"/cutie.png"} alt="Daily Horse Logo" width="90" height="90" className="min-w-[70px] -mr-8" />
                    ) : (
                    )} */}
                    <Image src={"/yellow-guy-rich.png"} alt="Daily Horse Logo" width="50" height="50" className="min-w-[50px]" />
                </Link>
                <h1 className="text-xl font-bold uppercase px-2 decoration-wavy relative inline-block after:content-[''] after:block after:h-1 after:w-full after:bg-slate-700 after:rounded-full after:mt-1">
                    {homeRoute ? getTitle() : "Daily Horsey"}
                </h1>

                <HeaderDropdownMenu session={session} homeRoute={homeRoute} />
            </div>
        </header>
    );
}
