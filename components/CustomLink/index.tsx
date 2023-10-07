import { MouseEvent, ElementType, ReactNode } from 'react'

import { useRouter, usePathname } from 'next/navigation'
import { useGlobalState } from 'lib/Store'

interface CustomLinkProps {
  component?: ElementType,
  href: string,
  children: ReactNode
  active?: boolean
}

// Interum solution while Next.JS figures out how to get Framer exit tranitions
// working as expected.
const CustomLink = (props:CustomLinkProps) => {

  const {
    component,
    href,
    children,
    active
  } = props

  const Component = component
  const {dispatch} = useGlobalState()
  const router = useRouter()
  const pathname = usePathname()
  const handleLinkClick = (e:MouseEvent) => {
    e.preventDefault()

    if (pathname !== href) {
      dispatch({type: 'setTransitionState', value:'exiting'})

      setTimeout(() => {
        router.push(href)
      }, 300)
    }
  }

  return !!Component ?
    (
      <Component active={active} onClick={(e:MouseEvent) => handleLinkClick(e)} href={href}>
        {children}
      </Component>
    )
  :
    (
      <a onClick={(e:MouseEvent) => handleLinkClick(e)} href={href}>
        {children}
      </a>
    )
}

export default CustomLink