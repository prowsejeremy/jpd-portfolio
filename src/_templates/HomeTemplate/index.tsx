"use client";

// Core
import { useEffect, useState } from "react";

// Styles
import styles from "./styles.module.scss";

const HomeTemplate = ({ page }: { page: any }) => {
  const { aboutContent } = page;

  const [loaded, setLoaded] = useState<boolean>(false);
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

    setTimeout(() => {
      setLoaded(true);
    }, 2000);

    return () => {
      window.removeEventListener("scroll", trackScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.HomePageContent}>
        <section className={styles.TitleSection}>
          <div
            className={styles.TitleWrapper}
            style={{ filter: `blur(${blurAmount}px)`, opacity: opacityAmount }}
          >
            <h2 className={`${styles.Title} ${loaded && styles.loaded}`}>
              <div className={styles.kiaOra}>
                <span>K</span>
                <span>i</span>
                <span>a&nbsp;</span>
                <span>O</span>
                <span>r</span>
                <span>a</span>
              </div>
              <div className={styles.hello}>
                <span />
                <span>H</span>
                <span>e</span>
                <span>l</span>
                <span>l</span>
                <span>o</span>
              </div>
            </h2>

            <JPLogo />
          </div>
        </section>

        <section className={styles.AboutSection}>
          <div className={styles.AboutContentWrapper}>
            <div
              className={styles.AboutContent}
              dangerouslySetInnerHTML={{ __html: aboutContent.content }}
            />
            <InSanityButton />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeTemplate;

const JPLogo = () => {
  return (
    <svg className={styles.JPLogo} viewBox="0 0 200 200">
      <path
        // d="M102.09431,9.49757h41.06516c21.43487,0,45.25379,16.7022,45.25379,45.25379s-24.10917,45.25379-45.25379,45.25379-65.36094-.01029-86.31895-.01029-45.25379,16.4993-45.25379,45.25379,24.34238,45.25379,45.25379,45.25379,45.25379-16.44763,45.25379-45.25379V9.49757"
        d="M94.68131,9.5h48.51869c21.39999,0,45.3,16.7,45.3,45.3s-24.10001,45.3-45.3,45.3H56.89999c-20.9,0-45.3,16.5-45.3,45.3s24.3,45.3,45.3,45.3,45.3-16.39999,45.3-45.3l-.02021-135.89999"
        fill="none"
        stroke="#fff"
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
    <button className={styles.ButtonOfDespair} onClick={handleTimeClick}>
      {sanityData[index].intro}
      <div className={styles.BODLine} />
      {sanityData[index].value}
    </button>
  );
};
