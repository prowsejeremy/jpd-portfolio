// import Link from 'next/link'
'use client'
 
import { usePathname } from 'next/navigation'
import CustomLink from 'components/CustomLink'

import {
  _NavBar,
    _NavItems,
      _NavLink
} from './styles'

export default function Navbar() {

  let pathname = usePathname()

  return (
    <_NavBar>
      <_NavItems>
        <CustomLink component={_NavLink} active={pathname == '/'} href='/'>HOME</CustomLink>
        <CustomLink component={_NavLink} active={pathname.includes('work')} href='/work'>WORK</CustomLink>
        
        {/* <_NavLink as={Link} href='/' scroll={false}>HOME</_NavLink> */}
        {/* <_NavLink as={Link} href='/work' scroll={false}>WORK</_NavLink> */}
      </_NavItems>
    </_NavBar>
  )
}
