"use client";

import { Heart } from "lucide-react";
import { HeaderDropdownMenu } from "./HeaderDropdown";
import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="flex flex-col items-center w-full mb-6 text-center transition-all">
            <div className="flex items-center gap-2 mb-2 pb-2 px-4 ">
                <Link href={"/"}>
                    <Image src={"/yellow-guy-rich.png"} alt="Daily Horse Logo" width="50" height="50" />
                </Link>
                <h1 className="text-2xl font-bold uppercase px-2 decoration-wavy relative inline-block after:content-[''] after:block after:h-1 after:w-full after:bg-slate-700 after:rounded-full after:mt-1">
                    Daily Horsey
                </h1>

                <HeaderDropdownMenu />
            </div>
        </header>
    );
}

export default Header;
