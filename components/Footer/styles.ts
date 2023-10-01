import { RelativeSize } from 'styles/mixins'
import { styled } from 'styled-components'

export const _FooterWrapper = styled.footer`
  width: 100%;
  padding: 1rem;
  display: flex;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    padding: ${RelativeSize(10)};
    width: auto;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 2;
  }
`

export const _FooterItems = styled.div`
  display: flex;
  margin-left: auto;
`

export const _FooterLink = styled.a`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1.6rem;
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.white};
  transition: all 500ms ease;
  line-height: 1;
  padding: 1rem;

  &:hover, &:focus {
    color: ${(props) => props.theme.colors.brand_3};
  }

  ${(props) => props.theme.mediaQueries.desktopSm} {
    font-size: ${RelativeSize(10)};
    padding: ${RelativeSize(10)};
  }
`