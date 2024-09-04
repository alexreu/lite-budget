// import { auth } from "@/auth";

import { NextResponse } from "next/server";

// export default auth((req) => {
//   const isLoggedIn = !!req.auth;
//   const isOnDashboard = req.nextUrl.pathname.startsWith("/dashboard");

//   if (isOnDashboard && !isLoggedIn) {
//     return Response.redirect(new URL("/signin", req.url));
//   }
// });

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

// export { auth as middleware } from "@/auth";

export default function middleware() {
  return NextResponse.next();
}
