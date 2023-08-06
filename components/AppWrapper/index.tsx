'use client'

// import { usePathname } from 'next/navigation'
// import { AnimatePresence } from 'framer-motion'

// const pathname = usePathname()
// <AnimatePresence mode='wait' onExitComplete={() => {window?.scrollTo(0, 0)}}>
// <PageTransition key={pathname}>
// </PageTransition>
// </AnimatePresence>
          
import { ThemeProvider } from 'styled-components'

import { GlobalStateProvider } from 'lib/Store/index'

import PageTransition from 'components/PageTransition'
import PageWrapper from 'components/PageWrapper'

import defaultTheme from 'styles/theme'
import GlobalStyle from 'styles/global'

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