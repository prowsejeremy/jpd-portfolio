"use client"; // Error components must be Client Components

import { useEffect } from "react";

import styles from "@/src/styles/error.module.scss";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.ErrorPageWrapper}>
      <div className={styles.ErrorPageContent}>
        <h1 className={styles.ErrorPageTitle}>Whoa there!</h1>
        <p className={styles.ErrorPageDescription}>
          Something seems to have gone a little pear shaped. Don&apos;t fret,
          we&apos;re on it and will have the lights back up lickety-split.
        </p>
        <button className={styles.ErrorPageButton} onClick={() => reset()}>
          Try again
        </button>
      </div>
    </div>
  );
}
