// import Link from 'next/link'
'use client'
 
import { usePathname } from 'next/navigation'

import { useGlobalState } from 'src/_lib/Store'

import CustomLink from 'src/_components/CustomLink'

import {
  _NavBar,
    _NavItems,
      _NavLink
} from './styles'

export default function Navbar() {

  const {state} = useGlobalState()

  let pathname = usePathname()

  return (
    <_NavBar $pageTheme={state.pageTheme}>
      <_NavItems>
        <CustomLink component={_NavLink} active={pathname == '/' ? true : false} href='/'>HOME</CustomLink>
        <CustomLink component={_NavLink} active={pathname.includes('work') ? true : false} href='/work'>WORK</CustomLink>
        
        {/* <_NavLink as={Link} href='/' scroll={false}>HOME</_NavLink> */}
        {/* <_NavLink as={Link} href='/work' scroll={false}>WORK</_NavLink> */}
      </_NavItems>
    </_NavBar>
  )
}
