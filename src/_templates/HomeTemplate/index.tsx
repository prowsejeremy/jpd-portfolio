"use client";

// Core
import { useEffect, useRef, useState } from "react";

// Components
import ScrollIndicator from "@/src/_components/ui/ScrollIndicator";
import Flower from "@/src/_components/svgs/Flower";
// import JPLogo from "@/src/_components/svgs/JPLogo";

// Styles
import styles from "./styles.module.scss";

// Types
type intervalType = ReturnType<typeof setInterval>;

const HomeTemplate = ({ page }: { page: any }) => {
  const { aboutContent } = page;

  const [loaded, setLoaded] = useState<boolean>(false);
  const [enabled, setEnabled] = useState<boolean>(false);
  const [translate, setTranslate] = useState<boolean>(false);
  const [blurAmount, setBlurAmount] = useState<number>(0);
  const [opacityAmount, setOpacityAmount] = useState<number>(1);
  const intervalRef = useRef<intervalType | null>(null);

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
      setTimeout(() => {
        setEnabled(true);
      }, 7000);
    }, 300);

    return () => {
      window.removeEventListener("scroll", trackScroll);
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;
    intervalRef.current = setInterval(() => {
      setTranslate(!translate);
    }, 7000);

    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, [loaded, translate]);

  return (
    <>
      <div className={styles.HomePageContent}>
        <section
          className={styles.TitleSection}
          id={`intro`}
          style={{ filter: `blur(${blurAmount}px)`, opacity: opacityAmount }}
        >
          <div className={styles.TitleWrapper}>
            <h2
              className={`
                ${styles.Title}
                ${translate && styles.translate}
                ${enabled && styles.enabled}
                ${loaded && styles.loaded}
              `}
            >
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

            {/* <JPLogo className={styles.JPLogo} /> */}
            <Flower className={styles.Flower} />
          </div>

          <ScrollIndicator text="ABOUT" target="about" />
        </section>

        <section className={styles.AboutSection} id={`about`}>
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
