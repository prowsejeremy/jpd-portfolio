// Core
import React from "react";

// Helpers
import smoothScrollTo from "@/src/_lib/helpers/smoothScrollTo";

// Styles
import styles from "./styles.module.scss";

const ScrollIndicator = ({
  text = "SCROLL",
  target,
  distance,
}: {
  text?: string;
  target?: string;
  distance?: number;
}) => {
  return (
    <a
      className={styles.scrollIndicator}
      onClick={(e) => {
        smoothScrollTo(e, target, distance);
      }}
      href="#about"
    >
      <span className={styles.text}>{text}</span>
      <div className={styles.lineContainer}>
        <div className={styles.lineWrapper}>
          <span className={styles.topLine}></span>
          <span className={styles.ball}></span>
          <span className={styles.btmLine}></span>
        </div>
      </div>
    </a>
  );
};

export default ScrollIndicator;
