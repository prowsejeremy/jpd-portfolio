'use client'

import { useEffect, useState } from 'react'
import Logo from 'components/Logo'

import {
  _HomePageContent,
    _HomeLogoLockup,
      _ButtonOfDespair,
      _PageTitle
} from './styles'

const calcThenAndNowDiff = (dateString) => {
  const start = new Date(dateString);
  const now = new Date();
  
  return now.getTime() - start.getTime();
}

const calcHoursBetweenDates = (dateString) => {
  const timeDiff = calcThenAndNowDiff(dateString);
  const msInHour = 1000 * 60 * 60;

  return Math.round((Math.abs(timeDiff) / msInHour) / 32);
}

const calcDaysBetweenDates = (dateString) => {
  const timeDiff = calcThenAndNowDiff(dateString);
  const daysDiff = timeDiff / (1000 * 3600 * 24)
  
  return Math.round(daysDiff * 1000) / 1000
}

const calcYearsBetweenDates = (dateString) => {
  const timeDiff = calcThenAndNowDiff(dateString);
  const date = new Date(timeDiff);
  
  return Math.abs(date.getUTCFullYear() - 1970);
}

const HomeTemplate = ({page}) => {

  const [timeDisplay, setTimeDisplay] = useState(false);
  const [index, setIndex] = useState(0);

  const {
    displayTitle
  } = page

  const handleTimeClick = () => {
    setIndex(index <= 1 ? index+1 : 0)
  }

  useEffect(() => {
    switch(index) {
      case 0:
        const displayYears = calcYearsBetweenDates('07/11/2013')
        setTimeDisplay(`Years in the industry - ${displayYears}`)
        break

      case 1:
        const displayDays = calcDaysBetweenDates('07/11/2013')
        setTimeDisplay(`Days spent indoors - ${displayDays}`)
        break

      case 2:
        const displayHours = calcHoursBetweenDates('07/11/2013')
        setTimeDisplay(`Hours of sanity lost - ${displayHours}`)
        break
    }
  }, [index])

  return (
    <_HomePageContent>
      <_HomeLogoLockup>
        <Logo />
        { timeDisplay && <_ButtonOfDespair onClick={handleTimeClick}>{timeDisplay}</_ButtonOfDespair>}
        {/* <_PageTitle>{displayTitle}</_PageTitle> */}
      </_HomeLogoLockup>
    </_HomePageContent>
  )
}

export default HomeTemplate