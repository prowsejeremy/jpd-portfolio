import { RelativeSize } from 'styles/mixins'
import { styled } from 'styled-components'

export const _WorkPageContent = styled.div`
  width: 100%;
`

export const _WorkItems = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  
  width: 100%;
  height: auto;

  padding: 5rem 2rem;

  ${(props) => props.theme.mediaQueries.tablet} {
    padding: 5rem 2rem;
  }

  ${(props) => props.theme.mediaQueries.tabletLandscape} {
    padding: ${RelativeSize(50)} ${RelativeSize(20)};
  }
`