import Popup from "src/_components/globals/SnekGameExtensions/Popup";
import BasicButton from "src/_components/globals/SnekGameExtensions/BasicButton";

import styles from "./styles.module.scss";

export default function SnekGameOver({
  score,
  showForm,
  resetAction,
}: {
  score: number;
  showForm: Function;
  resetAction: Function;
}) {
  return (
    <Popup key={`gameoverscreen`}>
      <h2 className={styles.Title}>Game Over</h2>
      <h3 className={styles.Score}>Your score - {score}</h3>
      <BasicButton text={`Play Again`} action={resetAction} />
      <BasicButton text={`Submit Score`} action={showForm} />
    </Popup>
  );
}
