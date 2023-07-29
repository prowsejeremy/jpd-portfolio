import { _VideoWrapper } from 'components/Blocks/VideoBlock/styles'
import styled from 'styled-components'

export const _PageHero = styled.div`
  position: relative;
  overflow: hidden;
  padding: 10rem 3rem 3rem;
  width: 100%;
  min-height: 35rem;
  height: 80vh;
  display: flex;
  align-items: flex-end;

  ${(props) => props.theme.mediaQueries.tablet} {
    height: 90vh;
    min-height: 70rem;
  }
`

export const _HeroBackgroundMedia = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  ${_VideoWrapper} {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`

export const _HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const _PageTitle = styled.h1`
  font-size: 7.5rem;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
  line-height: 0.7;
  color: ${(props) => props.theme.colors.white};

  ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 20rem;
  }
`