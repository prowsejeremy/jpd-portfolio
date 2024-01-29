'use client'

// import { usePathname } from 'next/navigation'
// import { AnimatePresence } from 'framer-motion'

// const pathname = usePathname()
// <AnimatePresence mode='wait' onExitComplete={() => {window?.scrollTo(0, 0)}}>
// <PageTransition key={pathname}>
// </PageTransition>
// </AnimatePresence>

import { ThemeProvider } from 'styled-components'

import { GlobalStateProvider } from 'src/_lib/Store/index'

import PageTransition from 'src/_components/PageTransition'
import PageWrapper from 'src/_components/PageWrapper'

import defaultTheme from 'src/_styles/theme'
import GlobalStyle from 'src/_styles/global'

const AppWrapper = ({children}:{children:React.ReactNode}) => {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStateProvider>
        <GlobalStyle />
        <PageTransition>
          <PageWrapper>
            {children}
          </PageWrapper>
        </PageTransition>
      </GlobalStateProvider>
    </ThemeProvider>
  )
}

export default AppWrapper