"use client";

// Core
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Konami from "react-konami-code";

// Components
import CustomCursor from "@/src/components/ui/CustomCursor";
import Navigation from "@/src/components/globals/Navigation";
import Footer from "@/src/components/globals/Footer";
import KonamiSuprise from "src/components/globals/KonamiSurprise";

// Store
import { useGlobalState } from "@/src/lib/Store";

// Styles
import styles from "./styles.module.scss";
import pageTransitionStyles from "@/src/components/globals/PageTransition/styles.module.scss";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { state, dispatch } = useGlobalState();
  const pathname = usePathname();

  useEffect(() => {
    dispatch({ type: "isMobile", value: window.innerWidth < 1024 });
    dispatch({
      type: "isTablet",
      value: window.innerWidth > 768 && window.innerWidth < 1024,
    });
    dispatch({ type: "isDesktop", value: window.innerWidth > 1024 });

    const responsiveWindowResize = () => {
      dispatch({ type: "isMobile", value: window.innerWidth < 1024 });
      dispatch({
        type: "isTablet",
        value: window.innerWidth > 768 && window.innerWidth < 1024,
      });
      dispatch({ type: "isDesktop", value: window.innerWidth > 1024 });
    };

    window.addEventListener("resize", responsiveWindowResize);
  }, [typeof window !== undefined, dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleKonamiCode = () => {
    dispatch({ type: "setKonami", value: true });
  };

  return (
    <div
      className={`${styles.PageWrapper} ${
        styles[`pageTheme-${state.pageTheme}`]
      }`}
    >
      {state.isDesktop && (
        <CustomCursor disableDefaultCursor={state.isDesktop} />
      )}

      <Navigation />

      <div className={styles.MainContentWrapper}>{children}</div>

      <Footer />

      <Konami action={handleKonamiCode} />

      <AnimatePresence>
        {state.konami && (
          <>
            <motion.div
              className={pageTransitionStyles.PageTransitionWrapper}
              initial={{ x: "-100vw" }}
              animate={{ x: ["-100vw", "0vw", "0vw", "100vw"] }}
              exit={{ x: ["-100vw", "0vw", "0vw", "100vw"] }}
              transition={{
                duration: 0.7,
                times: [0, 0.25, 0.75, 1],
                ease: [0.85, 0, 0.32, 1],
              }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              exit={{ opacity: [1, 0] }}
              transition={{
                duration: 0.1,
                delay: 0.35,
                times: [0, 1],
                ease: [0.85, 0, 0.32, 1],
              }}
            >
              <KonamiSuprise />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageWrapper;
