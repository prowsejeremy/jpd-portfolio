// import Link from 'next/link'
import CustomLink from 'components/CustomLink'

import {
  _NavBar,
    _NavItems,
      _NavLink
} from './styles'

export default function Navbar() {

  return (
    <_NavBar>
      <_NavItems>
        <CustomLink component={_NavLink} href='/'>HOME</CustomLink>
        <CustomLink component={_NavLink} href='/work'>WORK</CustomLink>
        
        {/* <_NavLink as={Link} href='/' scroll={false}>HOME</_NavLink> */}
        {/* <_NavLink as={Link} href='/work' scroll={false}>WORK</_NavLink> */}
      </_NavItems>
    </_NavBar>
  )
}
