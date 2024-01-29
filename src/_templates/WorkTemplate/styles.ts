import { RelativeSize } from 'src/_styles/mixins'
import { styled } from 'styled-components'

export const _WorkPageContent = styled.div`
  width: 100%;
`

export const _WorkItems = styled.div`
  width: 100%;
  max-width: 50rem;
  height: auto;
  padding: 5rem 1rem;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    max-width: initial;
    width: ${RelativeSize(700)};
    padding: ${RelativeSize(70)} ${RelativeSize(20)};
  }
`