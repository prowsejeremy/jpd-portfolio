import { RelativeSize } from 'styles/mixins'
import styled from 'styled-components'

export const _TextBlock = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 3rem 2rem;
  background: ${(props) => props.theme.colors.white};

  ${(props) => props.theme.mediaQueries.desktopSm} {
    padding: ${RelativeSize(100)} ${RelativeSize(50)};
  }
`

export const _TextContent = styled.p`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.brand_2};
  max-width: 80rem;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    max-width: ${RelativeSize(600)};
    font-size: ${RelativeSize(20)};
  }
`