// Core
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Helpers
import { getData } from "src/_lib/helpers/fetch-and-cache";

// Styles
import styles from "./styles.module.scss";

// Types
enum LBENUM {
  LOADING,
  LOADED,
  ERROR,
  NORESULTS,
}

export default function SnekLeaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [leaderboardState, setLeaderboardState] = useState<LBENUM>(
    LBENUM.LOADING
  );

  const fetchLeaderboardData = async () => {
    setLeaderboardState(LBENUM.LOADING);
    getData("/api/leaderboard")
      .then((data) => {
        setLeaderboardData(data);
        setLeaderboardState(data.length > 0 ? LBENUM.LOADED : LBENUM.NORESULTS);
      })
      .catch((err) => {
        setLeaderboardState(LBENUM.ERROR);
      });
  };

  const fetchLeaderboardMarkup = () => {
    switch (leaderboardState) {
      case LBENUM.LOADING:
        return (
          <>
            <h2 className={styles.Title}>LEADERBOARD</h2>
            <p className={styles.Message}>Checking for real gamers...</p>
          </>
        );
      case LBENUM.LOADED:
        return (
          <>
            <h2 className={styles.Title}>LEADERBOARD</h2>
            <table className={styles.LeaderboardTable}>
              <tbody>
                {leaderboardData.map(
                  (leader: { name: string; score: number }, key: number) => {
                    return (
                      <tr key={key}>
                        <td>{key + 1}</td>
                        <td>{leader.name}</td>
                        <td>{leader.score}</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </>
        );
      case LBENUM.NORESULTS:
        return (
          <>
            <h2 className={styles.Title}>LEADERBOARD</h2>
            <p className={styles.Message}>
              Looks like no ones posted a score yet, nows your time to shine!
            </p>
          </>
        );
      case LBENUM.ERROR:
        return (
          <>
            <h2 className={styles.Title}>Whoa there!</h2>
            <p className={styles.Message}>
              Something went a little sideways, please try again later.
            </p>
          </>
        );
    }
  };

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  return (
    <motion.div
      className={styles.LeaderboardWrapper}
      key={leaderboardState}
      initial={{ opacity: 0, translateY: "10%" }}
      animate={{ opacity: 1, translateY: "0%" }}
      exit={{ opacity: 0, translateY: "10%" }}
      transition={{ duration: 0.25 }}
    >
      {fetchLeaderboardMarkup()}
    </motion.div>
  );
}
