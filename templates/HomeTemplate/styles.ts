import { RelativeSize } from 'styles/mixins'
import { keyframes, styled } from 'styled-components'

const dash = keyframes`
  0% {
    opacity: 0;
    stroke-dashoffset: 2000;
  }
  30% {
    opacity: 1;
  }
  75% {
    stroke: #FFFFFF;
    stroke-dashoffset: 0;
    fill: transparent;
  }
  100% {
    stroke: transparent;
    stroke-dashoffset: 0;
    fill: #FFFFFF;
  }
`

export const _HomePageContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const _HomeLogoLockup = styled.div`
  width: 70%;

  svg {
    display: block;
    width: 100%;
    height: auto;
    path {
      stroke-dasharray: 2000;
      stroke-dashoffset: 2000;
      animation: ${dash} 3s linear forwards 500ms;
    }
  }
`

export const _ButtonOfDespair = styled.button`
  background: none;
  border: none;
  outline: none;
  margin: auto;
  width: auto;
  display: block;
  font-size: 3rem;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.white};
  cursor: url('/images/cursor-hover.png') 15 15, default;
  transition: all 500ms ease;

  &:hover {
    color: ${(props) => props.theme.colors.brand_3};
  }
`

export const _PageTitle = styled.h1`
  margin: auto;
  width: auto;
  display: block;
  color: ${(props) => props.theme.colors.white};
`

export const _UpUpDownDownLeftRightLeftRightBA = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  width: 20rem;
  height: auto;

  ${(props) => props.theme.mediaQueries.tabletLandscape} {
    bottom: ${RelativeSize(30)};
    right: ${RelativeSize(20)};
    width: ${RelativeSize(200)};
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
    path {
      fill: ${(props) => props.theme.colors.brand_2};
      transition: 300ms all ease 300ms;
      &:hover {
        fill: ${(props) => props.theme.colors.brand_3};
        transition: 300ms all ease;
      }
    }
  }
`