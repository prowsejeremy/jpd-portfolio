'use client'

import { useEffect, useState } from 'react'
import Logo from 'components/Logo'
import KonamiIcons from 'components/KonamiIcons'

import {
  _HomePageContent,
    _HomeLogoLockup,
      _ButtonOfDespair,
      _PageTitle,
    _UpUpDownDownLeftRightLeftRightBA
} from './styles'

const calcYearsBetweenDates = (dateString) => {
  const start = new Date(dateString);
  const now = new Date();
  
  let timeDiff = (now.getTime() - start.getTime()) / 1000;
  timeDiff /= (60 * 60 * 24);
  return timeDiff/365.25;
}

const HomeTemplate = () => {

  const [index, setIndex] = useState(0);
  const [sanityData, setSanityData] = useState(false)

  const handleTimeClick = () => {
    setIndex(index <= 1 ? index+1 : 0)
  }

  useEffect(() => {
    const hoursPerYearWorked = 28*48 // hours per week * working weeks in year.
    const displayYears = calcYearsBetweenDates('07/11/2013')
    const displayHours = displayYears * hoursPerYearWorked
    const displayDays = displayHours / 8 // divide by hours a day worked

    setSanityData([
      `Years in the industry - ${displayYears.toFixed(2)}`,
      `Days spent indoors - ${displayDays.toFixed(2)}`,
      `Hours of sanity lost - ${displayHours.toFixed(2)}`
    ])
  }, [])

  return (
    <_HomePageContent>
      <_HomeLogoLockup>
        <Logo />
        { sanityData && <_ButtonOfDespair onClick={handleTimeClick}>{sanityData[index]}</_ButtonOfDespair>}
      </_HomeLogoLockup>
      <_UpUpDownDownLeftRightLeftRightBA>
        <KonamiIcons />
      </_UpUpDownDownLeftRightLeftRightBA>
    </_HomePageContent>
  )
}

export default HomeTemplate