// Styles
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

// Core
import { useState } from "react";

// Components
import KonamiIcons from "@/src/components/svgs/KonamiIcons";
import ToolTip, { direction } from "@/src/components/ui/ToolTip";

// Store
import { useGlobalState } from "@/src/lib/Store";

const KonamiButton = () => {
  const { dispatch } = useGlobalState();
  const [timeID, setTimeoutID] = useState<NodeJS.Timeout | null>(null);

  const [toolTipVisible, setToolTipVisible] = useState<boolean>(false);
  const [toolTipMessage, setToolTipMessage] = useState<string>(
    "What could this be 👀"
  );

  const handleKonamiPointerUp = () => {
    if (timeID) clearTimeout(timeID);
    setTimeoutID(null);
  };

  const handleKonamiPointerDown = () => {
    const timeout = setTimeout(() => {
      if (timeID) clearTimeout(timeID);
      setTimeoutID(null);
      dispatch({ type: "setKonami", value: true });
    }, 2000);
    setToolTipMessage("Now hold... ✋");
    setTimeoutID(timeout);
  };

  const handleKonamiOver = () => {
    setToolTipMessage("What could this be 👀");
    setToolTipVisible(true);
  };

  const handleKonamiOut = () => {
    setToolTipVisible(false);
    // Also run the pointer up func to ensure
    // touch users stop interacting with button.
    handleKonamiPointerUp();
  };

  return (
    <button
      className={`
      ${styles.UpUpDownDownLeftRightLeftRightBA}
      ${timeID && styles.animate}
    `}
      onPointerDown={handleKonamiPointerDown}
      onPointerUp={handleKonamiPointerUp}
      onPointerEnter={handleKonamiOver}
      onPointerLeave={handleKonamiOut}
    >
      <KonamiIcons />
      <ToolTip
        direction={direction.TOP}
        visable={toolTipVisible}
        message={toolTipMessage}
      />
    </button>
  );
};
