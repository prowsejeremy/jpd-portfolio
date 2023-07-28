import { styled } from 'styled-components'

export const _NavBar = styled.nav`
  width: 100%;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
`

export const _NavItems = styled.div`
  display: flex;
  justify-content: space-between;
`

export const _NavLink = styled.a`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.6rem;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.white};
  transition: all 300ms ease;
  line-height: 1;

  &:hover, &:focus {
    color: ${(props) => props.theme.colors.brand_3};
  }
`