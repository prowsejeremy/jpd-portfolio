'use client'

import {useEffect} from 'react'
import Konami from 'react-konami-code'

import Navigation from 'components/Navigation'
import KonamiSuprise from 'components/KonamiSurprise'

import { useGlobalState } from '@/lib/Store'

import {
  _PageWrapper,
  _MainContentWrapper
} from './styles'

const PageWrapper = ({children}:{children:React.ReactNode}) => {

  const { state, dispatch } = useGlobalState()

  useEffect(() => {
    dispatch({ type: 'isMobile', value: window.innerWidth < 768  && window.innerWidth < 1024})
    dispatch({ type: 'isTablet', value: window.innerWidth > 768 && window.innerWidth < 1024 })
    dispatch({ type: 'isDesktop', value: window.innerWidth > 1024 })

    const responsiveWindowResize = () => {
      dispatch({ type: 'isMobile', value: window.innerWidth < 768  && window.innerWidth < 1024})
      dispatch({ type: 'isTablet', value: window.innerWidth > 768 && window.innerWidth < 1024 })
      dispatch({ type: 'isDesktop', value: window.innerWidth > 1024 })
    }

    window.addEventListener('resize', responsiveWindowResize)
  }, [typeof window !== undefined])

  const handleKonamiCode = () => {
    dispatch({ type: 'setKonami', value: true })
  }

  return (
    <_PageWrapper>
      <Navigation />
      <_MainContentWrapper>
        {children}
      </_MainContentWrapper>

      <Konami action={handleKonamiCode} />
      { state.konami && <KonamiSuprise /> }
    </_PageWrapper>
  )
}

export default PageWrapper