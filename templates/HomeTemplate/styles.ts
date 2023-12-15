import { RelativeSize } from 'styles/mixins'
import { keyframes, styled, css } from 'styled-components'

const changeColor = keyframes`
  to {
    fill: #2bf599;
  }
`

export const _HomePageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    height: 100vh;
    flex-direction: row;
    overflow: hidden;
  }
`

export const _AboutContentWrapper = styled.div`
  width: 100%;
  max-width: 40rem;
  padding: 5rem 2rem;
  color: ${(props) => props.theme.colors.white};

  ${(props) => props.theme.mediaQueries.desktopSm} {
    max-width: ${RelativeSize(250)};
    padding: 0;
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    left: ${RelativeSize(50)};
  }
`

export const _AboutTitle = styled.h2`
  text-transform: uppercase;
  font-size: 3rem;
  margin-bottom: 2rem;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    font-size: ${RelativeSize(30)};
    margin-bottom: ${RelativeSize(5)};
  }
`

export const _AboutContent = styled.p`
  display: block;
  padding-left: 2rem;
  margin-left: 2rem;
  border-left: 1px solid ${(props) => props.theme.colors.white};
  font-size: 1.6rem;
  line-height: 1.6;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    font-size: ${RelativeSize(10)};
    margin-left: ${RelativeSize(20)};
    padding-left: ${RelativeSize(20)};
  }
`


export const _HomeLogoLockup = styled.div`
  padding: 2rem;
  position: relative;
  margin-right: auto;

  svg {
    display: block;
    width: 100%;
    height: auto;
    position: absolute;
    bottom: -10%;
    right: -25%;
    fill: ${(props) => props.theme.colors.white};
  }

  ${(props) => props.theme.mediaQueries.desktopSm} {
    margin: 0 auto;
  }
`

export const _Circle = styled.div`
  width: 20rem;
  height: auto;
  border-radius: 100%;
  background: ${(props) => props.theme.colors.brand_1};

  ${(props) => props.theme.mediaQueries.desktopSm} {
    width: ${RelativeSize(250)};
  }

  &:before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: 100%;
  }
`

export const _BODLine = styled.span`
  width: 5rem;
  height: 1px;
  display: block;
  background: ${(props) => props.theme.colors.white};
  margin: 0 2rem;
  transition: all 500ms ease;

  ${(props) => props.theme.mediaQueries.tablet} {
    width: 20vh;
  }
`

export const _ButtonOfDespair = styled.button`
  background: none;
  border: none;
  outline: none;
  margin: auto;
  width: auto;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 300;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.white};
  transition: all 500ms ease;
  transform-origin: center right;
  padding-top: 5rem;

  &:hover {
    color: ${(props) => props.theme.colors.brand_3};
    ${_BODLine} {
      background: ${(props) => props.theme.colors.brand_3};
    }
  }

  ${(props) => props.theme.mediaQueries.desktopSm} {
    font-size: ${RelativeSize(10)};
    padding: ${RelativeSize(15)};

    position: absolute;
    right: 0;
    top: 50%;
    transform: rotate(-90deg) translate(50%, -50%);
  }
`

export const _PageTitle = styled.h1`
  margin: auto;
  width: auto;
  display: block;
  color: ${(props) => props.theme.colors.white};
`

export const _UpUpDownDownLeftRightLeftRightBA = styled.button<{$animate: boolean}>`
  padding: 2rem;
  width: 20rem;
  height: auto;
  display: block;
  background: none;
  border: none;
  outline: none;
  margin-left: auto;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: ${RelativeSize(20)};
    width: ${RelativeSize(180)};
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
    path {
      fill: transparent;
      stroke-width: 3px;
      stroke: ${(props) => props.theme.colors.white};
      transition: 500ms all ease;
    }
  }

  &:hover {
    svg path {
      stroke: ${(props) => props.theme.colors.brand_3};
    }
  }

  ${(props) => {
    if (props.$animate) {
      let cssStyle = ''
      
      for (let index = 0; index < 11; index++) {
        cssStyle += `
          &:nth-child(${index}n) {
            animation-delay: ${index * 250}ms;
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