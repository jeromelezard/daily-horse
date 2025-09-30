import { NextResponse, type NextRequest } from "next/server";
import * as jose from "jose";
// Define the paths you want to protect
const PROTECTED_PATHS = ["/jasmine"];

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    if (PROTECTED_PATHS.some((path) => pathname.startsWith(path))) {
        const authToken = request.cookies.get("access_token")?.value;

        if (!authToken) return NextResponse.redirect(new URL("/not-found", request.url));

        try {
            const secret = new TextEncoder().encode(process.env.SECRET_KEY);
            await jose.jwtVerify(authToken, secret);

            return NextResponse.next();
        } catch (err) {
            console.log(err);
            return NextResponse.redirect(new URL("/not-found", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
