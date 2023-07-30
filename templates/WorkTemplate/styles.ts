import { RelativeSize } from 'styles/mixins'
import { styled } from 'styled-components'

export const _WorkPageContent = styled.div`
  width: 100%;
`

export const _WorkItems = styled.div`
  width: 100%;
  height: auto;
  padding: 5rem 2rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  ${(props) => props.theme.mediaQueries.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  ${(props) => props.theme.mediaQueries.desktopSm} {
    display: block;
    padding: ${RelativeSize(50)} ${RelativeSize(20)};
  }
`