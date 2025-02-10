// Core
import { useEffect, useState } from "react";

// Styles
import styles from "./styles.module.scss";

// InSanity Button
const InsanityButton = () => {
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

export default InsanityButton;
