import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import authConfig from "./auth.config";

const publicRoutes = ["/signin", "/signup"];

const { auth } = NextAuth(authConfig);
export default auth(async function middleware(req: NextRequest) {
  const session = req.cookies.get("authjs.session-token");
  const isSignInPage = req.nextUrl.pathname === "/signin";

  if (!session && !publicRoutes.includes(req.nextUrl.pathname)) {
    const newUrl = new URL("/signin", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  if (session && isSignInPage) {
    const newUrl = new URL("/dashboard", req.nextUrl.origin);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|pictures).*)"],
};
