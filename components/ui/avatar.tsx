/**
 * @file Displays a user's avatar or fallback text based on their name.
 * @author Francesco Compagnoni
 * @version 2023-07-20
 */

"use client";

// Imports
import Image from "next/image";
import { useState, useEffect } from "react";

// Component props.
export type AvatarTheme = "default" | "transparent" | "pure-light";
export interface AvatarProps {
    /**
     * The avatar image's URL.
     */
    imageUrl: string;

    /**
     * The fallback text to display if the URL is unavailable.
     */
    fallback: string;

    /**
     * Theme of Avatar.
     */
    theme: AvatarTheme;

    /**
     * Size of Avatar.
     */
    size: "sm" | "md" | "xs";

    /**
     * Whether the avatar should have an outline and what tailwind class it should be.
     * @example "outline-amber-500"
     */
    outline?: string;
}

/**
 * Displays a user's avatar or fallback text based on their name.
 * @param {AvatarProps} props Component props.
 */
export default function Avatar({ imageUrl, fallback, theme = "default", size = "md", outline }: Partial<AvatarProps>) {
    return (
        <div
            className={`rounded-full p-3 ${outline && `${outline}  outline`} overflow-hidden select-none flex-shrink-0 aspect-square ${
                size == "md" && "w-10 h-10"
            } ${size == "sm" && "w-6 h-6"} ${size == "xs" && "w-2 h-2"} relative ${getBackgroundColour(theme)}`}
        >
            {!imageUrl && <AvatarFallback size={size} fallback={fallback || "Avatar"} theme={theme} />}
            {imageUrl && <AvatarImage imageUrl={imageUrl} fallback={fallback || "Avatar"} />}
        </div>
    );
}

/**
 * Displays abbreviated fallback text.
 * @param {AvatarProps} props Component props.
 */
function AvatarFallback({ fallback, theme, size }: { fallback: string; theme: AvatarTheme; size: "sm" | "md" | "xs" }) {
    const [displayFallback, setDisplayFallback] = useState("");

    useEffect(() => {
        if (!fallback) return setDisplayFallback("");

        // Split by word, limit to 2 words.
        const words = fallback.split(" ").slice(0, 2);

        // Return multiple letters of first word if there's only one.
        if (words.length == 1) return setDisplayFallback(words[0].substring(0, 2));

        // Return first letter of multiple words.
        setDisplayFallback(words.map((word) => word[0]).join(""));
    }, [fallback]);

    return (
        <div
            className={`${
                size == "md" ? "text-sm" : "text-xs"
            } font-semibold w-full h-full flex items-center uppercase justify-center ${getTextColour(theme)}`}
        >
            {displayFallback}
        </div>
    );
}

/**
 * Displays a user's avatar image.
 * @param {AvatarProps} props Component props.
 */
function AvatarImage({ imageUrl, fallback }: { imageUrl: string; fallback: string }) {
    return <Image style={{ objectFit: "cover" }} fill alt={fallback} src={imageUrl} />;
}

/**
 * Returns which background colour to render depending on the theme of the avatar.
 * @param theme The theme of avatar we're rendering.
 * @returns The class name for the background colour.
 */
function getBackgroundColour(theme: AvatarTheme) {
    switch (theme) {
        case "default":
            return "bg-slate-100";
        case "transparent":
            return "bg-white/30";
        case "pure-light":
            return "bg-slate-500/20";
    }
}

/**
 * Returns which text colour to render depending on the theme of the avatar.
 * @param theme The theme of avatar we're rendering.
 * @returns The class name for the text colour.
 */
function getTextColour(theme: AvatarTheme) {
    switch (theme) {
        case "default":
            return "text-slate-500";
        case "transparent":
            return "text-white/90";
        case "pure-light":
            return "text-slate-500";
    }
}
