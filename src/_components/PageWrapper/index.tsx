'use client'

import {useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Konami from 'react-konami-code'

import CustomCursor from 'src/_components/CustomCursor'
import Navigation from 'src/_components/Navigation'
import Footer from 'src/_components/Footer'
import KonamiSuprise from 'src/_components/KonamiSurprise'

import { useGlobalState } from 'src/_lib/Store'

import {
  _PageWrapper,
  _MainContentWrapper
} from './styles'

import {
  _PageTransitionWrapper
} from 'src/_components/PageTransition/styles'

const PageWrapper = ({children}:{children:React.ReactNode}) => {

  const { state, dispatch } = useGlobalState()

  useEffect(() => {
    dispatch({ type: 'isMobile', value: window.innerWidth < 1024 })
    dispatch({ type: 'isTablet', value: window.innerWidth > 768 && window.innerWidth < 1024 })
    dispatch({ type: 'isDesktop', value: window.innerWidth > 1024 })

    const responsiveWindowResize = () => {
      dispatch({ type: 'isMobile', value: window.innerWidth < 1024})
      dispatch({ type: 'isTablet', value: window.innerWidth > 768 && window.innerWidth < 1024 })
      dispatch({ type: 'isDesktop', value: window.innerWidth > 1024 })
    }

    window.addEventListener('resize', responsiveWindowResize)
  }, [typeof window !== undefined, dispatch])

  const handleKonamiCode = () => {
    dispatch({ type: 'setKonami', value: true })
  }

  return (
    <_PageWrapper $pageTheme={state.pageTheme}>
      
      { state.isDesktop && <CustomCursor disableDefaultCursor={state.isDesktop} /> }
      
      <Navigation />
      
      <_MainContentWrapper>
        {children}
      </_MainContentWrapper>

      <Footer />
      
      <Konami action={handleKonamiCode} />
      
      <AnimatePresence>
        { state.konami &&
          <>
            <_PageTransitionWrapper
              initial={{x: '-100vw'}}
              animate={{x: ['-100vw', '0vw', '0vw', '100vw']}}
              exit={{x: ['-100vw', '0vw', '0vw', '100vw']}}

              transition={{
                duration: 0.7,
                times: [0, 0.25, 0.75, 1],
                ease: [0.85, 0, 0.32, 1]
              }}
            />
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: [0, 1]}}
              exit={{opacity: [1, 0]}}

              transition={{
                duration: 0.1,
                delay: 0.35,
                times: [0, 1],
                ease: [0.85, 0, 0.32, 1]
              }}
            >
              <KonamiSuprise />
            </motion.div>
          </>
        }
      </AnimatePresence>
    </_PageWrapper>
  )
}

export default PageWrapper