import type { Viewport } from "next";
import Game from "./Game";

export const metadata = {
    title: "BirthdayTap",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover",
};

export default function Page() {
    return <Game />;
}
