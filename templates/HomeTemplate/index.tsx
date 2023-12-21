'use client'

import { useEffect, useState } from 'react'
import Logo from 'components/Logo'
import KonamiIcons from 'components/KonamiIcons'
import { useGlobalState } from 'lib/Store'

import {
  _HomePageContent,
    _AboutContentWrapper,
      _AboutTitle,
      _AboutContent,
    _HomeLogoLockup,
      _Circle,
      _ButtonOfDespair,
      _BODLine,
      _PageTitle,
    _UpUpDownDownLeftRightLeftRightBA
} from './styles'

const calcYearsBetweenDates = (dateString:string) => {
  const start = new Date(dateString);
  const now = new Date();
  
  let timeDiff = (now.getTime() - start.getTime()) / 1000;
  timeDiff /= (60 * 60 * 24);
  return timeDiff/365.25;
}

const HomeTemplate = ({page}:{page:any}) => {

  const {
    aboutContent
  } = page

  const {dispatch} = useGlobalState()
  const [index, setIndex] = useState(0);
  const [sanityData, setSanityData] = useState<{intro:string; value:string}[] | null>(null)
  const [timeID, setTimeoutID] = useState<NodeJS.Timeout | null>(null)

  const handleTimeClick = () => {
    setIndex(index <= 1 ? index+1 : 0)
  }

  const handleKonamiTouchStart = () => {
    const timeout = setTimeout(() => {
      timeID && clearTimeout(timeID)
      setTimeoutID(null)
      dispatch({type: 'setKonami', value: true})
    }, 3000)
    setTimeoutID(timeout)
  }

  const handleKonamiTouchEnd = () => {
    timeID && clearTimeout(timeID)
    setTimeoutID(null)
  }

  useEffect(() => {
    const hoursPerYearWorked = 28*48 // hours per week * working weeks in year.
    const displayYears = calcYearsBetweenDates('07/11/2013')
    const displayHours = displayYears * hoursPerYearWorked
    const displayDays = displayHours / 8 // divide by hours a day worked

    setSanityData([
      {
        intro: 'Years in the industry',
        value: displayYears.toFixed(2)
      },
      {
        intro: 'Days spent indoors',
        value: displayDays.toFixed(2)
      },
      {
        intro: 'Hours of sanity lost',
        value: displayHours.toFixed(2)
      }
    ])
  }, [])

  return (
    <_HomePageContent>

      <_HomeLogoLockup>
        <_Circle />
        <Logo />
      </_HomeLogoLockup>

      { sanityData && <_ButtonOfDespair onClick={handleTimeClick}>{sanityData[index].intro}<_BODLine />{sanityData[index].value}</_ButtonOfDespair>}

      <_AboutContentWrapper>
        <_AboutContent dangerouslySetInnerHTML={{ __html: aboutContent.content }} />
      </_AboutContentWrapper>

      <_UpUpDownDownLeftRightLeftRightBA
        $animate={timeID ? true : false}
        onPointerDown={handleKonamiTouchStart}
        onPointerUp={handleKonamiTouchEnd}
        onPointerLeave={handleKonamiTouchEnd}>
        <KonamiIcons />
      </_UpUpDownDownLeftRightLeftRightBA>
      
    </_HomePageContent>
  )
}

export default HomeTemplate