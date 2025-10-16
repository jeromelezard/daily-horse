import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import LoginSync from "@/components/auth/LoginSync";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
config.autoAddCss = false;
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Daily horsey OwO",
    description: "Jasmine's daily horse",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth.api.getSession({ headers: await headers() });

    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <main className="w-screen min-h-screen p-4 bg-zinc-50">
                    <Header session={session} />
                    {children}
                </main>
                <LoginSync />
            </body>
        </html>
    );
}
