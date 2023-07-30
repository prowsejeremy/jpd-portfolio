import { RelativeSize } from 'styles/mixins'
import { styled } from 'styled-components'

export const _NavBar = styled.nav`
  width: 100%;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    padding: ${RelativeSize(20)};
  }
`

export const _NavItems = styled.div`
  display: flex;
  justify-content: space-between;
`

export const _NavLink = styled.a`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 3rem;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.white};
  transition: all 500ms ease;
  line-height: 1;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    font-size: ${RelativeSize(30)};
  }

  &:hover, &:focus {
    color: ${(props) => props.theme.colors.brand_3};
  }
`