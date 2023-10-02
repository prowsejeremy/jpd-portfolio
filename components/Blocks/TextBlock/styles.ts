import { RelativeSize } from 'styles/mixins'
import styled from 'styled-components'

export const _TextBlock = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 8rem 2rem;
  background: ${(props) => props.theme.colors.brand_2};

  ${(props) => props.theme.mediaQueries.tablet} {
    padding: 15rem 2rem;
  }

  ${(props) => props.theme.mediaQueries.desktopSm} {
    padding: ${RelativeSize(100)} ${RelativeSize(50)};
  }
`

export const _TextContent = styled.div`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.white};

  padding-left: 2rem;
  border-left: 1px solid ${(props) => props.theme.colors.white};
  line-height: 1.6;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    max-width: ${RelativeSize(600)};
    font-size: ${RelativeSize(16)};
    padding-left: ${RelativeSize(30)};
  }
`