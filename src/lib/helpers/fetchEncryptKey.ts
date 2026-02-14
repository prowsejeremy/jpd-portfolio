"use server";

import { SignJWT } from "jose";

const fetchEncryptKey = async (payload: {
  allowedMethod: "GET" | "POST";
  user?: { playerName: string; playerScore: number };
}) => {
  try {
    const secretKey = process.env.JWT_SECRET;

    if (!secretKey || !payload || !payload.allowedMethod) {
      return {
        status: 500,
        message: "Error.",
      };
    }

    const encodedSecret = new TextEncoder().encode(secretKey);
    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("2s")
      .sign(encodedSecret);

    return token;
  } catch (e: any) {
    console.error("Token generation failed:", e.message);
    return {
      status: 500,
      message: "Error.",
    };
  }
};

export default fetchEncryptKey;
