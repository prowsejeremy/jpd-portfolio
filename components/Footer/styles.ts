import { RelativeSize } from 'styles/mixins'
import { styled } from 'styled-components'

export const _FooterWrapper = styled.footer`
  width: 100%;
  padding: 2rem;
  background: ${(props) => props.theme.colors.brand_2};

  ${(props) => props.theme.mediaQueries.tabletLandscape} {
    font-size: ${RelativeSize(20)};
  }
`

export const _FooterItems = styled.div`
  display: flex;
  justify-content: space-between;
`

export const _FooterLink = styled.a`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 3rem;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.white};
  transition: all 500ms ease;
  line-height: 1;

  &:hover, &:focus {
    color: ${(props) => props.theme.colors.brand_3};
  }
`