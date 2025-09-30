import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import * as jose from "jose";

export async function POST() {
    const cookieStore = await cookies();

    const secret = new TextEncoder().encode(process.env.SECRET_KEY);

    const token = await new jose.SignJWT({ userId: Math.random() * 10 })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1h")
        .sign(secret);

    cookieStore.set("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60,
        path: "/",
    });

    return NextResponse.json({ success: true });
}
