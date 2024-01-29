import Popup from 'src/_components/SnekGameExtensions/Popup'
import BasicButton from 'src/_components/SnekGameExtensions/BasicButton'

import {
  _Title,
  _Score
} from './styles'

export default function SnekGameOver({
  score,
  showForm,
  resetAction
}:{
  score:number,
  showForm:Function,
  resetAction:Function
}) {

  return (
    <Popup key={`gameoverscreen`}>
      <_Title>Game Over</_Title>
      <_Score>Your score - {score}</_Score>
      <BasicButton text={`Play Again`} action={resetAction} />
      <BasicButton text={`Submit Score`} action={showForm} />
    </Popup>
  )
}