"use client";

// Core
import { useEffect, useState } from "react";

// Styles
import styles from "./styles.module.scss";

const NewHomeTemplate = ({ page }: { page: any }) => {
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
        <div
          className={styles.TitleWrapper}
          style={{ filter: `blur(${blurAmount}px)`, opacity: opacityAmount }}
        >
          <h2 className={styles.Title}>
            <span>K</span>
            <span>i</span>
            <span>a</span>
            <span>&nbsp;</span>
            <span>O</span>
            <span>r</span>
            <span>a</span>
          </h2>

          <JPLogo />
        </div>

        <div className={styles.AboutContentWrapper}>
          <div
            className={styles.AboutContent}
            dangerouslySetInnerHTML={{ __html: aboutContent.content }}
          />
          <InSanityButton />
        </div>
      </div>
    </>
  );
};

export default NewHomeTemplate;

const JPLogo = () => {
  return (
    <svg className={styles.JPLogo} viewBox="0 0 200 200">
      <path
        d="M102.09431,9.49757h41.06516c21.43487,0,45.25379,16.7022,45.25379,45.25379s-24.10917,45.25379-45.25379,45.25379-65.36094-.01029-86.31895-.01029-45.25379,16.4993-45.25379,45.25379,24.34238,45.25379,45.25379,45.25379,45.25379-16.44763,45.25379-45.25379V9.49757"
        fill="none"
        stroke="#fff"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="15px"
      />
    </svg>
  );
};

// InSanity Button
const InSanityButton = () => {
  const [index, setIndex] = useState<number>(0);

  const [sanityData, setSanityData] = useState<
    { intro: string; value: string }[] | null
  >(null);

  const handleTimeClick = () => {
    setIndex(index <= 1 ? index + 1 : 0);
  };

  const calcYearsBetweenDates = (dateString: string): number => {
    const start = new Date(dateString);
    const now = new Date();

    let timeDiff: number = (now.getTime() - start.getTime()) / 1000;
    timeDiff /= 60 * 60 * 24;
    return timeDiff / 365.25;
  };

  useEffect(() => {
    const hoursPerYearWorked = 28 * 48; // hours per week * working weeks in year.
    const displayYears: number = calcYearsBetweenDates("07/11/2013");
    const displayHours: number = displayYears * hoursPerYearWorked;
    const displayDays: number = displayHours / 8; // divide by hours a day worked

    setSanityData([
      {
        intro: "Years in the industry",
        value: displayYears.toFixed(2),
      },
      {
        intro: "Days spent indoors",
        value: displayDays.toFixed(2),
      },
      {
        intro: "Hours of sanity lost",
        value: displayHours.toFixed(2),
      },
    ]);
  }, []);

  return !sanityData ? null : (
    <div className={styles.ButtonOfDespair} onClick={handleTimeClick}>
      {sanityData[index].intro}
      <div className={styles.BODLine} />
      {sanityData[index].value}
    </div>
  );
};
