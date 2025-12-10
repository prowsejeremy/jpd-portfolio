// Core
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";

// Store
import { useGlobalState } from "@/src/lib/Store";

// Styles
import styles from "./styles.module.scss";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const { state, dispatch } = useGlobalState();

  useEffect(() => {
    dispatch({ type: "setTransitionState", value: "entering" });
  }, [pathname, dispatch]);

  const swipeUpEnterKeyframes = { x: ["0vw", "100vw"] };
  const swipeUpExitKeyframes = { x: ["-100vw", "0vw"] };
  const swipeUpTimings = [0, 1];

  return (
    <>
      <motion.div
        className={styles.PageTransitionWrapper}
        key={pathname}
        initial={{ x: "0" }}
        animate={
          !state.transitionState
            ? { x: "100vw" }
            : state.transitionState === "entering"
              ? swipeUpEnterKeyframes
              : swipeUpExitKeyframes
        }
        // animate={swipeUpEnterKeyframes}
        // exit={swipeUpExitKeyframes}

        transition={{
          duration: 0.3,
          times: swipeUpTimings,
          ease: [0.85, 0, 0.32, 1],
        }}
      />
      {children}
    </>
  );
};

export default PageTransition;
