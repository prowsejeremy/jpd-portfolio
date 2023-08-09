import { styled } from 'styled-components'
import { RelativeSize } from 'styles/mixins'

export const _Title = styled.h2`
  font-size: 4rem;
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    font-size: ${RelativeSize(40)};
  }
`

export const _Score = styled.h3`
  font-size: 2.5rem;
  font-weight: 300;
  text-transform: uppercase;
  line-height: 1;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    font-size: ${RelativeSize(25)};
  }
`