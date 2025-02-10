// Core
import { useEffect, useRef, useState } from "react";

// Types
type timeoutType = ReturnType<typeof setTimeout>;

// Styles
import styles from "./styles.module.scss";

const FlipbBoard = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [activeText, setActiveText] = useState<"textA" | "textB" | null>(null);

  const timeoutRef = useRef<timeoutType | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    timeoutRef.current = setTimeout(() => {
      setActiveText(activeText == "textB" ? "textA" : "textB");
    }, 7000);

    return () => {
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    };
  }, [loaded, activeText]);

  return (
    <h2
      className={`
        ${styles.FlipBoard}
        ${activeText && styles[`show-${activeText}`]}
        ${loaded && styles.loaded}
      `}
    >
      <div className={styles.textA}>
        <span>K</span>
        <span>i</span>
        <span>a&nbsp;</span>
        <span>O</span>
        <span>r</span>
        <span>a</span>
      </div>
      <div className={styles.textB}>
        <span />
        <span>H</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>o</span>
      </div>
    </h2>
  );
};

export default FlipbBoard;
