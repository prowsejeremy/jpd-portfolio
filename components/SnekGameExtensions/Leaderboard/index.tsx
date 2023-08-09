import { useEffect, useState } from 'react'

import {
  _LeaderboardWrapper,
  _LeaderboardTable,
  _Title
} from './styles'


export default function SnekLeaderboard() {

  const [leaderboardData, setLeaderboardData] = useState([])

  const fetchLeaderboardData = async () => {
    
    await fetch('/api/leaderboard', {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
    .then(async (response) => {
      const data = await response.json()
      setLeaderboardData(data)
    })
    .catch((error) => {
      console.error(`Something went wrong there: ${error}`)
    })
  }

  useEffect(() => {
    fetchLeaderboardData()
  }, [])

  return leaderboardData.length <= 0 ? null :
    <_LeaderboardWrapper
      initial={{opacity: 0, translateY: '10%'}}
      animate={{opacity: 1, translateY: '0%'}}
      exit={{opacity: 0, translateY: '10%'}}
      transition={{ duration: 0.25 }}
    >
      <_Title>LEADERBOARD</_Title>
          
      <_LeaderboardTable>
        {leaderboardData.map((leader:{name:string, score:number}, key:number) => {
          return (
            <tr key={key}>
              <td>{key+1}</td>
              <td>{leader.name}</td>
              <td>{leader.score}</td>
            </tr>
          )
        })}
      </_LeaderboardTable>
    </_LeaderboardWrapper>
}