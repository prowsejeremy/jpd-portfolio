import { useEffect, useState } from "react";
import { useGlobalState } from "src/_lib/Store/index";
import { AnimatePresence } from "framer-motion";

import Snek from "@jpd.nz/snek";
import SnekLogo from "src/_components/globals/KonamiSurprise/snekLogo";
import CloseIcon from "@/src/_components/svgs/CloseIcon";

// Snek Extensions
import SnekSubmitScoreForm from "src/_components/globals/SnekGameExtensions/SubmitScoreForm";
import SnekGameOver from "src/_components/globals/SnekGameExtensions/GameOver";
import BasicButton from "src/_components/globals/SnekGameExtensions/BasicButton";
import SnekLeaderboard from "src/_components/globals/SnekGameExtensions/Leaderboard";
import LeaderboardIcon from "@/src/_components/svgs/LeaderboardIcon";

// Styles
import styles from "./styles.module.scss";

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

          snek?.canvas?.focus();
        }, 100);
      });

      snek?.canvas?.focus();

      setSnekInstance(snek);
    }
  }, []);

  const startGame = () => {
    snekInstance.handleDirChange("up");
    snekInstance?.canvas?.focus();
  };

  return (
    <div className={styles.KonamiSurprise}>
      <AnimatePresence>
        <button
          className={`${styles.IconButton} ${styles.CloseButton}`}
          key={`CloseButton`}
          onClick={() => {
            window.scrollTo(0, 0);
            dispatch({ type: "setKonami", value: false });
          }}
        >
          <CloseIcon />
        </button>

        <div className={styles.GameWrapper} key={`GameWrapper`}>
          <SnekLogo />

          <div className={styles.GameInner}>
            <AnimatePresence>
              {showStartButton && (
                <div className={styles.PlayButton}>
                  <BasicButton text={`Play`} action={startGame} />
                </div>
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
            <div className={styles.GAME} id="game" />
          </div>
        </div>

        <button
          className={`${styles.IconButton} ${styles.LeaderboardButton}`}
          key={`LeaderboardButton`}
          onClick={() => setShowLeaderboard(!showLeaderboard)}
        >
          {showLeaderboard ? <CloseIcon /> : <LeaderboardIcon />}
        </button>

        {showLeaderboard && <SnekLeaderboard key={`SnekLeaderboard`} />}
      </AnimatePresence>
    </div>
  );
}
