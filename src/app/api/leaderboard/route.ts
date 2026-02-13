import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import { getScores, postScore } from "@/src/lib/mongo/operations";

export async function POST(request: Request) {
  const token = request.headers.get("authorization");
  const requestMethod = request.method;
  const secretKey = process.env.JWT_SECRET;

  if (!token || !secretKey) {
    return NextResponse.json({ status: 401, message: "Auth required" });
  }

  try {
    const encodedSecret = new TextEncoder().encode(secretKey);
    const decoded: {
      payload: {
        allowedMethod: string;
        user: { playerName: string; playerScore: number };
      };
    } = await jwtVerify(token, encodedSecret);

    if (
      decoded.payload.allowedMethod !== requestMethod ||
      !decoded.payload.user
    ) {
      return NextResponse.json({
        status: 401,
        message: "Request not permitted.",
      });
    } else {
      const { playerName, playerScore } = await request.json();

      if (
        typeof playerName != "string" ||
        typeof playerScore != "number" ||
        playerName !== decoded.payload.user.playerName ||
        playerScore !== decoded.payload.user.playerScore ||
        playerName.length !== 3 ||
        playerScore > 999 ||
        playerScore < 0
      ) {
        return NextResponse.error();
      }

      const player = {
        name: playerName,
        score: playerScore,
      };

      try {
        await postScore(player);
        return NextResponse.json({ msg: "Score Posted!" });
      } catch (e: any) {
        console.error("Failed to post score:", e.message);
        return NextResponse.error();
      }
    }
  } catch (e: any) {
    console.error("Authentication failed:", e.message);
    return NextResponse.json({ status: 401, message: "Auth required" });
  }
}

export async function GET(request: Request) {
  const token = request.headers.get("authorization");
  const requestMethod = request.method;
  const secretKey = process.env.JWT_SECRET;

  if (!token || !secretKey) {
    return NextResponse.json({ status: 401, message: "Auth required" });
  }

  try {
    const encodedSecret = new TextEncoder().encode(secretKey);
    const decoded = await jwtVerify(token, encodedSecret);
    if (decoded.payload.allowedMethod !== requestMethod) {
      return NextResponse.error();
    }

    try {
      const leaderboard = await getScores();
      return NextResponse.json(leaderboard.data);
    } catch (e: any) {
      console.error("Failed to retrieve leaderboard:", e.message);
      return NextResponse.error();
    }
  } catch (e: any) {
    console.error("Authentication failed:", e.message);
    return NextResponse.json({ status: 401, message: "Auth required" });
  }
}
