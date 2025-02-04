import { useEffect, useState } from "react";
import { useGlobalState } from "src/_lib/Store/index";
import { AnimatePresence } from "framer-motion";

import Snek from "@jpd.nz/snek";
import SnekLogo from "src/_components/KonamiSurprise/snekLogo";
import CloseIcon from "src/_components/CloseIcon";

// Snek Extensions
import SnekSubmitScoreForm from "src/_components/SnekGameExtensions/SubmitScoreForm";
import SnekGameOver from "src/_components/SnekGameExtensions/GameOver";
import BasicButton from "src/_components/SnekGameExtensions/BasicButton";
import SnekLeaderboard from "src/_components/SnekGameExtensions/Leaderboard";
import LeaderboardIcon from "src/_components/LeaderboardIcon";

import {
  _KonamiSurprise,
  _CloseButton,
  _LeaderboardButton,
  _GameWrapper,
  _GameInner,
  _PlayButton,
  _GAME,
} from "./styles";

export default function KonamiSurprise() {
  const { dispatch } = useGlobalState();

  const [snekInstance, setSnekInstance] = useState<any>(null);

  const [gameScore, setGameScore] = useState(0);
  const [showGameOver, setShowGameOver] = useState(false);
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);

  useEffect(() => {
    const gameWrapper = document.getElementById("game");
    const gameFont = getComputedStyle(document.body).getPropertyValue(
      "--font-game"
    );

    if (gameWrapper?.children[0]?.tagName !== "CANVAS") {
      const snek = new Snek({
        gameElement: gameWrapper,
        gameFont: {
          family: gameFont,
          weight: 600,
          size: 30,
        },
      });

      snek.init();

      snek.on("start", () => {
        setShowStartButton(false);
      });

      snek.on("end", (score: number) => {
        setGameScore(score);
        setShowGameOver(true);
      });

      snek.on("reset", () => {
        setTimeout(() => {
          setGameScore(0);
          setShowGameOver(false);
          setShowSubmitForm(false);
          snek.handleDirChange("up");

          // @ts-ignore
          snek?.canvas?.focus();
        }, 100);
      });

      // @ts-ignore
      snek?.canvas?.focus();

      setSnekInstance(snek);
    }
  }, []);

  const startGame = () => {
    snekInstance.handleDirChange("up");
    snekInstance?.canvas?.focus();
  };

  return (
    <_KonamiSurprise>
      <AnimatePresence>
        <_CloseButton
          key={`CloseButton`}
          onClick={() => dispatch({ type: "setKonami", value: false })}
        >
          <CloseIcon />
        </_CloseButton>

        <_GameWrapper key={`GameWrapper`}>
          <SnekLogo />

          <_GameInner>
            <AnimatePresence>
              {showStartButton && (
                <_PlayButton>
                  <BasicButton text={`Play`} action={startGame} />
                </_PlayButton>
              )}
              {showSubmitForm && (
                <SnekSubmitScoreForm
                  key={`SnekSubmitScoreForm`}
                  score={gameScore}
                  resetAction={() => snekInstance.reset()}
                />
              )}
              {showGameOver && (
                <SnekGameOver
                  key={`SnekGameOver`}
                  score={gameScore}
                  showForm={() => {
                    setShowGameOver(false);
                    setShowSubmitForm(true);
                  }}
                  resetAction={() => snekInstance.reset()}
                />
              )}
            </AnimatePresence>
            <_GAME id="game" />
          </_GameInner>
        </_GameWrapper>

        <_LeaderboardButton
          key={`LeaderboardButton`}
          onClick={() => setShowLeaderboard(!showLeaderboard)}
        >
          {showLeaderboard ? <CloseIcon /> : <LeaderboardIcon />}
        </_LeaderboardButton>

        {showLeaderboard && <SnekLeaderboard key={`SnekLeaderboard`} />}
      </AnimatePresence>
    </_KonamiSurprise>
  );
}
