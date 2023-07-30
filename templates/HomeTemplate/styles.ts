import { RelativeSize } from 'styles/mixins'
import { keyframes, styled, css } from 'styled-components'

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

const fadeDownIn = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const changeColor = keyframes`
  to {
    fill: #2bf599;
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
  width: 100%;
  padding: 2rem;
  max-width: 90rem;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    max-width: ${RelativeSize(650)};
  }

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
  padding: 1.5rem;
  font-size: 2rem;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.white};
  cursor: url('/images/cursor-hover.png') 15 15, default;
  transition: all 500ms ease;
  
  opacity: 0;
  transform: translateY(-2rem);

  animation: ${fadeDownIn} 300ms linear forwards 2s;

  &:hover {
    color: ${(props) => props.theme.colors.brand_3};
  }

  ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 3rem;
  }

  ${(props) => props.theme.mediaQueries.desktopSm} {
    font-size: ${RelativeSize(28)};
    padding: ${RelativeSize(15)};
  }
`

export const _PageTitle = styled.h1`
  margin: auto;
  width: auto;
  display: block;
  color: ${(props) => props.theme.colors.white};
`

export const _UpUpDownDownLeftRightLeftRightBA = styled.div<{animate: boolean}>`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 2rem;
  width: 25rem;
  height: auto;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    padding: ${RelativeSize(30)};
    width: ${RelativeSize(250)};
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

  ${(props) => {
    if (props.animate) {
      let cssStyle = ''
      
      for (let index = 0; index < 11; index++) {
        cssStyle += `
          &:nth-child(${index}n) {
            animation-delay: ${index * 400}ms;
          }
        `
      }

      return css`
        svg path {
          animation: ${changeColor} 300ms linear forwards;
          ${cssStyle}
        }
      `
    }
  }}
`