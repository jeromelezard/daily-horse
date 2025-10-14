"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { faBars, faBoxArchive, faHeart, faUser, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import SignInDialog from "../auth/SignInDialog";
import { BetterAuthSession } from "@/lib/types";
import Avatar from "../ui/avatar";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth/auth-actions";
import SecretDialog from "../home/SecretDialog";

export function HeaderDropdownMenu({ session }: { session: BetterAuthSession | null }) {
    const router = useRouter();
    const [openDialog, setOpenDialog] = useState(false);
    const [openSecretDialog, setOpenSecretDialog] = useState(false);

    async function handleSignOut() {
        await signOut();
        router.push("/");
    }
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="select-none">
                        <FontAwesomeIcon icon={faBars} className="text-slate-700" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" border-[1px] border-slate-200 mx-1 text-slate-700 " align="start">
                    <DropdownMenuGroup>
                        <Link href="/favourites">
                            <DropdownMenuItem>
                                Your favs
                                <DropdownMenuShortcut>
                                    <FontAwesomeIcon icon={faHeart} className="text-red-500 text-lg" />
                                </DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </Link>
                        {session && (
                            <DropdownMenuItem onClick={() => setOpenSecretDialog(true)}>
                                Secret
                                <DropdownMenuShortcut>
                                    <FontAwesomeIcon icon={faUserSecret} className="text-gray-500 text-lg" />
                                </DropdownMenuShortcut>
                            </DropdownMenuItem>
                        )}
                        <Link href="/archive">
                            <DropdownMenuItem>
                                Archive
                                <DropdownMenuShortcut>
                                    <FontAwesomeIcon icon={faBoxArchive} className="text-gray-500 text-lg" />
                                </DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    {session ? (
                        <DropdownMenuItem onClick={handleSignOut}>
                            <span className="flex gap-3 select-none items-center justify-between w-full">
                                <span>Sign out</span>
                                <Avatar imageUrl={session.user.image ?? ""} fallback={session.user.name ?? session.user.email} size="xs" />
                            </span>
                        </DropdownMenuItem>
                    ) : (
                        <DropdownMenuItem onClick={() => setOpenDialog(true)}>
                            Log in
                            <DropdownMenuShortcut>
                                <FontAwesomeIcon icon={faUser} className="text-slate-700 text-lg" />
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
            <SignInDialog open={openDialog} setOpen={setOpenDialog} />
            {session ? <SecretDialog open={openSecretDialog} setOpen={setOpenSecretDialog} userId={session.user.id} /> : null}
        </>
    );
}
