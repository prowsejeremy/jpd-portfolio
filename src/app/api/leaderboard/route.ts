import { NextResponse } from 'next/server'
import api from 'src/_lib/helpers/api'

export async function POST(request: Request) {

  const {playerName, playerScore} = await request.json()

  if (
    typeof playerName != 'string' ||
    typeof playerScore != 'number' ||
    playerName.length !== 3 ||
    playerScore > 999 ||
    playerScore < 0
  ) return NextResponse.error()

  const player = {
    name: playerName,
    score: playerScore
  }

  await api.appsync.postScore(player)

  return NextResponse.json({ msg: 'Score Posted!' })
}


export async function GET() {

  const leaderboard = await api.appsync.getLeaderboard()

  return NextResponse.json(leaderboard.data.playersOrderedByScore.items)
}