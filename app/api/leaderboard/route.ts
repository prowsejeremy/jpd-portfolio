import { NextResponse } from 'next/server'
import fs from 'fs'

type leaderboardRecordType = {
  name:string,
  score:number
}

export async function POST(request: Request) {

  const {playerName, playerScore} = await request.json()
  
  const rawdata = fs.readFileSync('data/leaderboard.json', 'utf8')
  let leaderboard_data = JSON.parse(rawdata)

  leaderboard_data.sort((entryA:leaderboardRecordType, entryB:leaderboardRecordType) => entryB.score - entryA.score)
  leaderboard_data = leaderboard_data.slice(0, 9)

  // Validate Player Data
  if (playerName.length <= 3 && playerScore < 999) {
    // if (playerScore > leaderboard_data[leaderboard_data.length-1].score) {
      leaderboard_data.push({
        name: playerName.toUpperCase(),
        score: playerScore
      })
    // }

    leaderboard_data.sort((entryA:leaderboardRecordType, entryB:leaderboardRecordType) => entryB.score - entryA.score)

    let data = JSON.stringify(leaderboard_data)
    fs.writeFileSync('data/leaderboard.json', data)
  }

  return NextResponse.json({ msg: 'score posted' })
}


export async function GET() {
  
  const rawdata = fs.readFileSync('data/leaderboard.json', 'utf8')
  let leaderboard_data = JSON.parse(rawdata)

  return NextResponse.json(leaderboard_data)
}