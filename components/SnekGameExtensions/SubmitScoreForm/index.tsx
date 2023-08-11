import { FormEvent, useRef, useState } from 'react'

import { EncryptKey } from 'lib/helpers/crypt'

import Popup from 'components/SnekGameExtensions/Popup'
import BasicButton from 'components/SnekGameExtensions/BasicButton'

import {
  _ScoreForm,
  _PlayerName,
  _InitialInput,
  _ScuccessMessage,
  _Title,
  _Message
} from './styles'

const nameRegex = /^([a-zA-Z0-9_-]){3}$/

export default function SnekSubmitScoreForm({
  score,
  resetAction
}:{
  score:number,
  resetAction:Function
}) {

  const [scorePosted, setScorePosted] = useState(false)
  const [errorMsg, setErrorMsg] = useState(false)

  const scoreFormRef = useRef<HTMLFormElement>(null)
  const initialOneRef = useRef<HTMLInputElement>(null)
  const initialTwoRef = useRef<HTMLInputElement>(null)
  const initialThreeRef = useRef<HTMLInputElement>(null)

  const handleFormSubmit = async (e:FormEvent) => {
    e.preventDefault()

    const playerName = initialOneRef.current!.value + initialTwoRef.current!.value + initialThreeRef.current!.value
  
    if (
      scorePosted ||
      typeof playerName !== 'string' ||
      typeof score !== 'number' ||
      !playerName.match(nameRegex) ||
      score > 999
    ) return false
  
    const data = {
      'playerName': playerName.toUpperCase(),
      'playerScore': score
    }

    const ACT = EncryptKey(process.env.NEXT_PUBLIC_API_TOKEN, process.env.NEXT_PUBLIC_API_SECRET)

    await fetch('/api/leaderboard', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${ACT}`
      }
    })
    .then(async (res) => {
      const response = await res.json()
      if (response.status != 401) {
        setScorePosted(true)
      } else {
        setErrorMsg(true)
      }
    })
    .catch((error) => {
      console.error(`Something went wrong there: ${error}`)
    })
  }

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>, nextInput:HTMLInputElement) => {
    if (e.target.value) {
      nextInput?.focus()
    }
  }

  return (
    <Popup>
      { errorMsg ? 
        <_ScuccessMessage>
          <_Title>Whoa there!</_Title>
          <_Message>Something went a little sideways, please try again later!</_Message>
        </_ScuccessMessage>
      :
        !scorePosted ?
          <_ScoreForm onSubmit={(e) => handleFormSubmit(e)} ref={scoreFormRef}>
            <_PlayerName>
              <_InitialInput type="text" ref={initialOneRef} onChange={(e) => handleInputChange(e, initialTwoRef.current!)} id="playerName1" placeholder="A" minLength={1} maxLength={1} />
              <_InitialInput type="text" ref={initialTwoRef} onChange={(e) => handleInputChange(e, initialThreeRef.current!)} id="playerName2" placeholder="A" minLength={1} maxLength={1} />
              <_InitialInput type="text" ref={initialThreeRef} id="playerName3" placeholder="A" minLength={1} maxLength={1} />
            </_PlayerName>
            <BasicButton text={`Submit Score`} type="submit" />
          </_ScoreForm>
        :
          <_ScuccessMessage>
            <_Title>Score Posted</_Title>
            <_Message>Check the leaderboard shortly to see how you stacked up!</_Message>
          </_ScuccessMessage>
        }

      <BasicButton text={`Play Again`} action={resetAction} />
    </Popup>
  )
}