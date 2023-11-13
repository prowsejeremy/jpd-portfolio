import { useRouter, usePathname } from 'next/navigation'
import { useGlobalState } from 'lib/Store'

// Interum solution while Next.JS figures out how to get Framer exit tranitions
// working as expected.
const CustomLink = (props) => {

  const {
    component,
    href,
    children
  } = props

  const {dispatch} = useGlobalState()
  const router = useRouter()
  const pathname = usePathname()
  const handleLinkClick = (e) => {
    
    // Allow default behavior for opening in new tab/window
    // via keyboard shortcuts
    if (e.metaKey || e.shiftKey) { return }

    e.preventDefault()

    if (pathname !== href) {
      dispatch({type: 'setTransitionState', value:'exiting'})

      setTimeout(() => {
        router.push(href)
      }, 300)
    }
  }

  const Component = component || a

  return (
    <Component onClick={(e) => handleLinkClick(e)} href={href}>
      {children}
    </Component>
  )
}

export default CustomLink