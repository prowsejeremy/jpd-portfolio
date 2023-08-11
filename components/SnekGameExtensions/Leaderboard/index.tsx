import { useEffect, useState } from 'react'
import { getData } from 'lib/helpers/dataFetcherCacher'

import {
  _LeaderboardWrapper,
  _LeaderboardTable,
  _Title,
  _Message
} from './styles'

export default function SnekLeaderboard() {

  const [leaderboardData, setLeaderboardData] = useState([])
  const [errorMsg, setErrorMsg] = useState(false)

  const fetchLeaderboardData = async () => {
    getData('/api/leaderboard').then((data) => {
      setLeaderboardData(data)
    }).catch((err) => {
      setErrorMsg(true)
    })
  }

  useEffect(() => {
    fetchLeaderboardData()
  }, [])

  return (
    <_LeaderboardWrapper
      initial={{opacity: 0, translateY: '10%'}}
      animate={{opacity: 1, translateY: '0%'}}
      exit={{opacity: 0, translateY: '10%'}}
      transition={{ duration: 0.25 }}
    >
      {errorMsg ? 
        <>
          <_Title>Whoa there!</_Title>
          <_Message>Something went a little sideways, please try again later!</_Message>
        </>
      :
        <>
          <_Title>LEADERBOARD</_Title>
          {leaderboardData.length <= 0 ?
            <_Message>Looks like no ones posted a score yet, nows your time to shine!</_Message>
          :
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
          }
        </>
      }
    </_LeaderboardWrapper>
  )
}