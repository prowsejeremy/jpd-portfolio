import { useEffect, useState } from 'react'
import { useGlobalState } from 'lib/Store/index'
import { AnimatePresence } from 'framer-motion'

import Snek from 'snek'
import SnekLogo from 'components/KonamiSurprise/snekLogo'
import CloseIcon from 'components/CloseIcon'

// Snek Extensions
import SnekSubmitScoreForm from 'components/SnekGameExtensions/SubmitScoreForm'
import SnekGameOver from 'components/SnekGameExtensions/GameOver'
import SnekLeaderboard from 'components/SnekGameExtensions/Leaderboard'
import LeaderboardIcon from 'components/LeaderboardIcon'

import {
  _KonamiSurprise,
    _CloseButton,
    _LeaderboardButton,
    _GameWrapper,
      _GameInner,
        _GAME
} from './styles'

export default function KonamiSurprise() {
  
  const {dispatch} = useGlobalState()
  
  const [snekInstance, setSnekInstance] = useState<any>(null)
  
  const [gameScore, setGameScore] = useState(0)
  const [showGameOver, setShowGameOver] = useState(false)
  const [showSubmitForm, setShowSubmitForm] = useState(false)
  const [showLeaderboard, setShowLeaderboard] = useState(false)

  useEffect(() => {
    const gameWrapper = document.getElementById('game')
    const headingFont = getComputedStyle(document.body).getPropertyValue('--font-heading')
    
    const snek = new Snek({
      gameFont: headingFont,
      gameElement: gameWrapper
    })

    setSnekInstance(snek)

    snek.init()

    snek.on('end', (score:number) => {
      setGameScore(score)
      setShowGameOver(true)
    })

    snek.on('reset', () => {
      setTimeout(() => {
        setGameScore(0)
        setShowGameOver(false)
        setShowSubmitForm(false)

        // @ts-ignore
        gameWrapper?.firstChild?.focus()
      }, 100)
    })

    // @ts-ignore
    gameWrapper?.firstChild?.focus()

  }, [])

  return (
    <_KonamiSurprise>
      <AnimatePresence>
    
        <_CloseButton key={`CloseButton`} onClick={() => dispatch({type: 'setKonami', value: false})}>
          <CloseIcon />
        </_CloseButton>

        <_GameWrapper key={`GameWrapper`}>
          <SnekLogo />

          <_GameInner>
            <AnimatePresence>
              { showSubmitForm && <SnekSubmitScoreForm key={`SnekSubmitScoreForm`} score={gameScore} resetAction={() => snekInstance.reset()} /> }
              { showGameOver && <SnekGameOver key={`SnekGameOver`} score={gameScore} showForm={() => {setShowGameOver(false); setShowSubmitForm(true)}} resetAction={() => snekInstance.reset()} /> }
            </AnimatePresence>
            <_GAME id='game' />
          </_GameInner>
        </_GameWrapper>

        <_LeaderboardButton key={`LeaderboardButton`} onClick={() => setShowLeaderboard(!showLeaderboard)}>
          { showLeaderboard ? <CloseIcon /> : <LeaderboardIcon /> }
        </_LeaderboardButton>

        {showLeaderboard && <SnekLeaderboard key={`SnekLeaderboard`} />}

      </AnimatePresence>
    </_KonamiSurprise>
  )
}