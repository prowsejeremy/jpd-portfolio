import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={`${styles.FooterWrapper} FooterWrapper`}>
      <KonamiButton />

      <div className={styles.FooterItems}>
        <a
          className={styles.FooterLink}
          href="mailto:prowsejeremy@gmail.com"
          target="_blank"
        >
          EMAIL
        </a>
        <a
          className={styles.FooterLink}
          href="https://linkedin.com/in/prowsejeremy"
          target="_blank"
        >
          LINKEDIN
        </a>
        <a
          className={styles.FooterLink}
          href="https://github.com/prowsejeremy"
          target="_blank"
        >
          GITHUB
        </a>
      </div>
    </footer>
  );
}

// Konami Button
import { useState } from "react";
import KonamiIcons from "@/src/_components/svgs/KonamiIcons";
import { useGlobalState } from "src/_lib/Store";

const KonamiButton = () => {
  const { dispatch } = useGlobalState();
  const [timeID, setTimeoutID] = useState<NodeJS.Timeout | null>(null);

  const handleKonamiTouchEnd = () => {
    if (timeID) clearTimeout(timeID);
    setTimeoutID(null);
  };

  const handleKonamiTouchStart = () => {
    const timeout = setTimeout(() => {
      if (timeID) clearTimeout(timeID);
      setTimeoutID(null);
      dispatch({ type: "setKonami", value: true });
    }, 2000);
    setTimeoutID(timeout);
  };

  return (
    <button
      className={`
      ${styles.UpUpDownDownLeftRightLeftRightBA}
      ${timeID && styles.animate}
    `}
      onPointerDown={handleKonamiTouchStart}
      onPointerUp={handleKonamiTouchEnd}
      onPointerLeave={handleKonamiTouchEnd}
    >
      <KonamiIcons />
    </button>
  );
};
