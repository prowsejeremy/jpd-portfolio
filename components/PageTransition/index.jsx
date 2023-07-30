import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useGlobalState } from 'lib/Store'

import {
  _PageTransitionWrapper
} from './styles'

const PageTransition = ({children}) => {

  const pathname = usePathname()

  const {state, dispatch} = useGlobalState()

  useEffect(() => {
    dispatch({type: 'setTransitionState', value: 'entering' })
  }, [pathname, dispatch])

  const swipeUpEnterKeyframes = {x: ['0vw', '100vw']}
  const swipeUpExitKeyframes = {x: ['-100vw', '0vw']}
  const swipeUpTimings = {times: [0, 1]}

  return (
    <>
      <_PageTransitionWrapper
        initial={{x: '0'}}
        animate={!state.transitionState ? {x: '100vw'} : state.transitionState === 'entering' ? swipeUpEnterKeyframes : swipeUpExitKeyframes}
        // animate={swipeUpEnterKeyframes}
        // exit={swipeUpExitKeyframes}

        transition={{
          duration: 0.3,
          times: {swipeUpTimings},
          ease: [0.85, 0, 0.32, 1]
        }}
      />
      {children}
    </>
  )
}

export default PageTransition