import { useEffect, useState } from 'react'
import { getData } from 'lib/helpers/fetch-and-cache'

import {
  _LeaderboardWrapper,
  _LeaderboardTable,
  _Title,
  _Message
} from './styles'

enum LBENUM {
  LOADING,
  LOADED,
  ERROR,
  NORESULTS
}

export default function SnekLeaderboard() {

  const [leaderboardData, setLeaderboardData] = useState([])
  const [leaderboardState, setLeaderboardState] = useState<LBENUM>(LBENUM.LOADING)

  const fetchLeaderboardData = async () => {
    setLeaderboardState(LBENUM.LOADING)
    getData('/api/leaderboard').then((data) => {
      setLeaderboardData(data)
      setLeaderboardState(data.length > 0 ? LBENUM.LOADED : LBENUM.NORESULTS)
    }).catch((err) => {
      setLeaderboardState(LBENUM.ERROR)
    })
  }

  const fetchLeaderboardMarkup = () => {
    switch(leaderboardState) {
      case LBENUM.LOADING:
        return (
          <>
            <_Title>LEADERBOARD</_Title>
            <_Message>Checking for real gamers...</_Message>
          </>
        )
      case LBENUM.LOADED:
        return (
          <>
            <_Title>LEADERBOARD</_Title>
            <_LeaderboardTable>
              <tbody>
                {leaderboardData.map((leader:{name:string, score:number}, key:number) => {
                  return (
                    <tr key={key}>
                      <td>{key+1}</td>
                      <td>{leader.name}</td>
                      <td>{leader.score}</td>
                    </tr>
                  )
                })}
              </tbody>
            </_LeaderboardTable>
          </>
        )
      case LBENUM.NORESULTS:
        return (
          <>
            <_Title>LEADERBOARD</_Title>
            <_Message>Looks like no ones posted a score yet, nows your time to shine!</_Message>
          </>
        )
      case LBENUM.ERROR:
        return (
          <>
            <_Title>Whoa there!</_Title>
            <_Message>Something went a little sideways, please try again later.</_Message>
          </>
        )
    }
  }

  useEffect(() => {
    fetchLeaderboardData()
  }, [])

  return (
    <_LeaderboardWrapper
      key={leaderboardState}
      initial={{opacity: 0, translateY: '10%'}}
      animate={{opacity: 1, translateY: '0%'}}
      exit={{opacity: 0, translateY: '10%'}}
      transition={{ duration: 0.25 }}
    >
      { fetchLeaderboardMarkup() }
    </_LeaderboardWrapper>
  )
}