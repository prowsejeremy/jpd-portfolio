import { RelativeSize } from 'styles/mixins'
import { styled } from 'styled-components'

export const _KonamiSurprise = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 110;
  background: ${(props) => props.theme.colors.brand_2};
  display: flex;
  align-items: center;
`

export const _GameWrapper = styled.div`
  margin: auto;
  width: 100%;
  
  svg {
    display: block;
    width: 17rem;
    margin: 0 auto 3rem;

    ${(props) => props.theme.mediaQueries.desktopSm} {
      width: ${RelativeSize(160)};
      margin-bottom: ${RelativeSize(30)};
    }
  }
`

export const _GameInner = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    max-width: initial;
    width: ${RelativeSize(300)};
  }
`

export const _GAME = styled.div`
  border: 2px solid ${(props) => props.theme.colors.brand_3};
  width: 100%;
  margin: 0 auto;
  position: relative;

  &:before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: 100%;
  }

  canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const _IconButton = styled.button`
  width: 4rem;
  height: 4rem;
  padding: 1rem;
  background: ${(props) => props.theme.colors.brand_3};
  border: none;
  outline: none;
  transition: all 500ms ease;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    font-size: ${RelativeSize(20)};
    width: ${RelativeSize(50)};
    height: ${RelativeSize(50)};
    padding: ${RelativeSize(12)};
  }

  svg {
    width: 100%;
    height: auto;
    display: block;
  }

  &:hover {
    background: ${(props) => props.theme.colors.brand_1};
  }
`

export const _LeaderboardButton = styled(_IconButton)`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  
  ${(props) => props.theme.mediaQueries.desktopSm} {
    bottom: ${RelativeSize(20)};
    left: ${RelativeSize(20)};
  }
`

export const _CloseButton = styled(_IconButton)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  
  ${(props) => props.theme.mediaQueries.desktopSm} {
    top: ${RelativeSize(20)};
    right: ${RelativeSize(20)};
  }
`