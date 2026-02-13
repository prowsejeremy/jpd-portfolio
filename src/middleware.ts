import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const token = request.headers.get("authorization");
  const requestMethod = request.method;
  const secretKey = process.env.JWT_SECRET;

  if (!token || !secretKey) {
    return NextResponse.json({ status: 401, message: "Not authorized." });
  }

  const encodedSecret = new TextEncoder().encode(secretKey);
  const decoded = await jwtVerify(token, encodedSecret);

  if (decoded.payload.allowedMethod === requestMethod) {
    return NextResponse.next();
  } else {
    return NextResponse.json({ status: 401, message: "Auth required" });
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/:path",
};

// Potential future middleware for page access control, but currently not in use.
// --- IGNORE ---
//
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { SignJWT, jwtVerify } from "jose"; // 'jose' is optimized for Middleware

// const SECRET = new TextEncoder().encode(
//   process.env.JWT_SECRET || "fallback-secret-key",
// );

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   const guestToken = request.cookies.get("guest_session")?.value;

//   // CASE 1: The request is for an API route - VALIDATE
//   if (pathname.startsWith("/api")) {
//     if (!guestToken) {
//       return NextResponse.json(
//         { error: "Direct access denied" },
//         { status: 403 },
//       );
//     }

//     try {
//       const decoded = await jwtVerify(guestToken, SECRET);
//       console.log("Decoded token:", decoded);
//       return NextResponse.next(); // Valid token, let them through
//     } catch (err) {
//       return NextResponse.json({ error: "Invalid session" }, { status: 403 });
//     }
//   }

//   // CASE 2: The request is for a Page - ISSUE TOKEN IF MISSING
//   const response = NextResponse.next();

//   if (!guestToken) {
//     // Create a simple JWT that expires in 5 minutes
//     const token = await new SignJWT({ role: "guest" })
//       .setProtectedHeader({ alg: "HS256" })
//       .setIssuedAt()
//       .setExpirationTime("5m")
//       .sign(SECRET);

//     // Set the cookie as HttpOnly and SameSite=Strict
//     response.cookies.set("guest_session", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "strict",
//       path: "/",
//     });
//   }

//   return response;
// }

// // Config to ensure middleware only runs on specific paths
// export const config = {
//   matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
// };
