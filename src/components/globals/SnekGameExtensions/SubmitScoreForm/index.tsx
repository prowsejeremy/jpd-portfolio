import { FormEvent, useRef, useState } from "react";

import { EncryptKey } from "@/src/lib/helpers/crypt";

import Popup from "src/components/globals/SnekGameExtensions/Popup";
import BasicButton from "src/components/globals/SnekGameExtensions/BasicButton";

import styles from "./styles.module.scss";

const nameRegex = /^([a-zA-Z0-9_-]){3}$/;

enum SFENUM {
  PENDING,
  SENT,
  ERROR,
}

export default function SnekSubmitScoreForm({
  score,
  resetAction,
}: {
  score: number;
  resetAction: Function;
}) {
  const [scoreFormState, setScoreFormState] = useState<SFENUM>(SFENUM.PENDING);

  const scoreFormRef = useRef<HTMLFormElement>(null);
  const initialOneRef = useRef<HTMLInputElement>(null);
  const initialTwoRef = useRef<HTMLInputElement>(null);
  const initialThreeRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setScoreFormState(SFENUM.PENDING);

    const playerName =
      initialOneRef.current!.value +
      initialTwoRef.current!.value +
      initialThreeRef.current!.value;

    if (
      typeof playerName !== "string" ||
      typeof score !== "number" ||
      !playerName.match(nameRegex) ||
      score > 999
    )
      return false;

    const data = {
      playerName: playerName.toUpperCase(),
      playerScore: score,
    };

    const ACT = EncryptKey(
      process.env.NEXT_PUBLIC_API_TOKEN,
      process.env.NEXT_PUBLIC_API_SECRET
    );

    await fetch("/api/leaderboard", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${ACT}`,
      },
    })
      .then(async (res) => {
        const response = await res.json();
        if (response.status != 401) {
          setScoreFormState(SFENUM.SENT);
        } else {
          setScoreFormState(SFENUM.ERROR);
        }
      })
      .catch((error) => {
        console.error(`Something went wrong there: ${error}`);
        setScoreFormState(SFENUM.ERROR);
      });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    nextInput: HTMLInputElement
  ) => {
    if (e.target.value) {
      nextInput?.focus();
    }
  };

  const fetchScoreFormMarkup = () => {
    switch (scoreFormState) {
      case SFENUM.PENDING:
        return (
          <form
            className={styles.ScoreForm}
            onSubmit={(e) => handleFormSubmit(e)}
            ref={scoreFormRef}
          >
            <div className={styles.PlayerName}>
              <input
                className={styles.InitialInput}
                type="text"
                ref={initialOneRef}
                onChange={(e) => handleInputChange(e, initialTwoRef.current!)}
                id="playerName1"
                placeholder="A"
                minLength={1}
                maxLength={1}
              />
              <input
                className={styles.InitialInput}
                type="text"
                ref={initialTwoRef}
                onChange={(e) => handleInputChange(e, initialThreeRef.current!)}
                id="playerName2"
                placeholder="A"
                minLength={1}
                maxLength={1}
              />
              <input
                className={styles.InitialInput}
                type="text"
                ref={initialThreeRef}
                id="playerName3"
                placeholder="A"
                minLength={1}
                maxLength={1}
              />
            </div>
            <BasicButton text={`Submit Score`} type="submit" />
          </form>
        );
      case SFENUM.SENT:
        return (
          <div className={styles.MessageWrapper}>
            <h2 className={styles.Title}>Score Posted</h2>
            <p className={styles.Message}>
              Check the leaderboard shortly to see how you stacked up!
            </p>
          </div>
        );
      case SFENUM.ERROR:
        return (
          <div className={styles.MessageWrapper}>
            <h2 className={styles.Title}>Whoa there!</h2>
            <p className={styles.Message}>
              Something went a little sideways, please try again later.
            </p>
          </div>
        );
    }
  };

  return (
    <Popup key={scoreFormState}>
      {fetchScoreFormMarkup()}
      <BasicButton text={`Play Again`} action={resetAction} />
    </Popup>
  );
}
