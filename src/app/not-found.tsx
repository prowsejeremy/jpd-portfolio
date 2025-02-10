import Link from "next/link";

import styles from "src/styles/error.module.scss";

export default function NotFound() {
  return (
    <div className={styles.ErrorPageWrapper}>
      <div className={styles.ErrorPageContent}>
        <h1 className={styles.ErrorPageTitle}>404</h1>
        <p className={styles.ErrorPageDescription}>
          Hmm, now how did you end up here? One of us has made a wrong turn
          along the way 👀
          <br />
          <Link href="/">lets get you home!</Link>
        </p>
      </div>
    </div>
  );
}
