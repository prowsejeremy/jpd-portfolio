import { RelativeSize } from 'styles/mixins'
import { _VideoWrapper } from 'components/Blocks/VideoBlock/styles'
import styled from 'styled-components'

export const _PageHero = styled.div`
  position: relative;
  overflow: hidden;
  padding: 15rem 2rem 5rem;
  width: 100%;
  min-height: 35rem;
  display: flex;
  align-items: flex-end;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    min-height: 80rem;
    padding: ${RelativeSize(200)} ${RelativeSize(30)} ${RelativeSize(30)};
  }
`

export const _HeroBackgroundMedia = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: ${(props) => props.theme.colors.brand_2};

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
  font-size: 6rem;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
  line-height: 0.7;
  color: ${(props) => props.theme.colors.white};

  ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 16rem;
  }
  
  ${(props) => props.theme.mediaQueries.desktopSm} {
    max-width: ${RelativeSize(500)};
    font-size: ${RelativeSize(80)};
  }
`