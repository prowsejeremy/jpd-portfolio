// Styles
import styles from "./styles.module.scss";

const ScrollIndicator = () => {
  return (
    <div className={styles.scrollIndicator}>
      <span className={styles.text}>SCROLL</span>
      <div className={styles.lineContainer}>
        <div className={styles.lineWrapper}>
          <span className={styles.topLine}></span>
          <span className={styles.ball}></span>
          <span className={styles.btmLine}></span>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
