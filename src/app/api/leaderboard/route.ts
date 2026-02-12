import { NextResponse } from "next/server";
import { getScores, postScore } from "@/src/lib/mongo/operations";

export async function POST(request: Request) {
  // if the request did not come from the same origin, reject it
  if (
    process.env.ENV === "production" &&
    request.headers.get("origin") !== process.env.NEXT_URL
  ) {
    return NextResponse.error();
  }

  const { playerName, playerScore } = await request.json();

  if (
    typeof playerName != "string" ||
    typeof playerScore != "number" ||
    playerName.length !== 3 ||
    playerScore > 999 ||
    playerScore < 0
  )
    return NextResponse.error();

  const player = {
    name: playerName,
    score: playerScore,
  };

  try {
    await postScore(player);
    return NextResponse.json({ msg: "Score Posted!" });
  } catch (e: any) {
    console.error("FAILURE: Could not post score:", e.message);
    return NextResponse.error();
  }
}

export async function GET(request: Request) {
  // if the request did not come from the same origin, reject it
  if (
    process.env.ENV === "production" &&
    request.headers.get("origin") !== process.env.NEXT_URL
  ) {
    return NextResponse.error();
  }

  try {
    const leaderboard = await getScores();
    return NextResponse.json(leaderboard.data);
  } catch (e: any) {
    console.error("FAILURE: Could not retrieve leaderboard:", e.message);
    return NextResponse.error();
  }
}
