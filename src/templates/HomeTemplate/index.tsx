"use client";

// Core
import { useEffect, useState } from "react";

// Components
import FlipbBoard from "@/src/templates/HomeTemplate/FlipBoard";
import InsanityButton from "@/src/templates/HomeTemplate/InsanityButton";
import ScrollIndicator from "@/src/components/ui/ScrollIndicator";
import Flower from "@/src/components/svgs/Flower";
// import JPLogo from "@/src/components/svgs/JPLogo";

// Styles
import styles from "./styles.module.scss";

const HomeTemplate = ({ page }: { page: any }) => {
  const { aboutContent } = page;

  const [blurAmount, setBlurAmount] = useState<number>(0);
  const [opacityAmount, setOpacityAmount] = useState<number>(1);

  useEffect(() => {
    const trackScroll = (): void => {
      const offset: number = window.scrollY;
      const threshold: number = window.innerHeight;
      const blurProp: number = offset / threshold;
      const opacityProp: number = 1 - offset / threshold;

      if (opacityProp > 0.2) {
        setOpacityAmount(opacityProp);
      }

      if (blurProp < 1) {
        setBlurAmount(blurProp * 20);
      }
    };

    window.addEventListener("scroll", trackScroll);

    return () => {
      window.removeEventListener("scroll", trackScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.HomePageContent}>
        {/* Intro Scene */}
        <section
          id={`intro`}
          className={styles.TitleSection}
          style={{ filter: `blur(${blurAmount}px)`, opacity: opacityAmount }}
        >
          <div className={styles.TitleWrapper}>
            <FlipbBoard />
            {/* <JPLogo className={styles.JPLogo} /> */}
            <Flower className={styles.Flower} />
          </div>

          <ScrollIndicator text="ABOUT" target="about" />
        </section>

        {/* About Section */}
        <section id={`about`} className={styles.AboutSection}>
          <div className={styles.AboutContentWrapper}>
            <div
              className={styles.AboutContent}
              dangerouslySetInnerHTML={{ __html: aboutContent.content }}
            />
            <InsanityButton />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeTemplate;
