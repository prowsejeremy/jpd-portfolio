"use client";

// Core
import { useEffect, useState } from "react";
import Logo from "@/src/_components/svgs/Logo";

// Components
import CanvasBackground from "@/src/_components/globals/CanvasBackground";

// Styles
import styles from "./styles.module.scss";

const calcYearsBetweenDates = (dateString: string) => {
  const start = new Date(dateString);
  const now = new Date();

  let timeDiff = (now.getTime() - start.getTime()) / 1000;
  timeDiff /= 60 * 60 * 24;
  return timeDiff / 365.25;
};

const HomeTemplate = ({ page }: { page: any }) => {
  const { aboutContent } = page;

  const [index, setIndex] = useState(0);
  const [sanityData, setSanityData] = useState<
    { intro: string; value: string }[] | null
  >(null);

  const handleTimeClick = () => {
    setIndex(index <= 1 ? index + 1 : 0);
  };

  useEffect(() => {
    const hoursPerYearWorked = 28 * 48; // hours per week * working weeks in year.
    const displayYears = calcYearsBetweenDates("07/11/2013");
    const displayHours = displayYears * hoursPerYearWorked;
    const displayDays = displayHours / 8; // divide by hours a day worked

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

  return (
    <>
      <CanvasBackground />
      <div className={styles.HomePageContent}>
        <div className={styles.HomeLogoLockup}>
          <div className={styles.Circle} />
          <Logo />
        </div>

        {sanityData && (
          <button className={styles.ButtonOfDespair} onClick={handleTimeClick}>
            {sanityData[index].intro}
            <div className={styles.BODLine} />
            {sanityData[index].value}
          </button>
        )}

        <div className={styles.AboutContentWrapper}>
          <div
            className={styles.AboutContent}
            dangerouslySetInnerHTML={{ __html: aboutContent.content }}
          />
        </div>
      </div>
    </>
  );
};

export default HomeTemplate;
