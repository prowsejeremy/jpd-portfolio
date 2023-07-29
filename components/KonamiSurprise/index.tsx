import { useEffect } from 'react'
import { useGlobalState } from 'lib/Store/index'

import Snek from 'snek'
import SnekLogo from 'components/KonamiSurprise/snekLogo'
import CloseIcon from 'components/CloseIcon'

import {
  _KonamiSurprise,
    _CloseButton,
    _GameWrapper,
      _GAME
} from './styles'

export default function KonamiSurprise() {
  
  const {dispatch} = useGlobalState()

  useEffect(() => {
    const snek = new Snek({
      gameFont: '__Teko_dde2ca',
      gameElement: document.querySelector('#game'),
    })
    snek.init()
  }, [])

  return (
    <_KonamiSurprise>
      <_CloseButton onClick={() => dispatch({type: 'setKonami', value: false})}>
        <CloseIcon />
      </_CloseButton>
      <_GameWrapper>
        <SnekLogo />
        <_GAME id="game" />
      </_GameWrapper>
    </_KonamiSurprise>
  )
}