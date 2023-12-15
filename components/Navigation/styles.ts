import { RelativeSize } from 'styles/mixins'
import { styled } from 'styled-components'

export const _NavItems = styled.div`
  display: flex;
  flex-direction: column;
`

export const _NavLink = styled.a<{$active: boolean}>`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 2rem;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.white};
  transition: all 500ms ease;
  line-height: 1;
  text-align: right;
  padding-right: 2rem;
  position: relative;
  margin-bottom: 1rem;

  &:before {
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    background: ${(props) => props.theme.colors.brand_1};
    border-radius: 100%;
    position: absolute;
    top: 42%;
    right: 0;
    transform: translateY(-50%) scale(0);
    transition: all 200ms ease-out 200ms;
    opacity: 0;
  }

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: ${(props) => props.theme.colors.white};
    position: absolute;
    top: 42%;
    right: 1rem;
    transform: translateY(-50%) scaleX(0);
    transform-origin: center right;
    transition: all 200ms ease-out;
  }

  ${(props) => {
    if (props.$active) {
      return `
        &:before {
          transform: translateY(-50%) scale(1);
          opacity: 1;
        }
        &:after {
          transform: translateY(-50%) scaleX(1);
        }
      `
    }
  }}

  ${(props) => props.theme.mediaQueries.desktopSm} {
    font-size: ${RelativeSize(20)};
    padding-right: ${RelativeSize(20)};
    margin-bottom: ${RelativeSize(10)};

    &:before {
      width: ${RelativeSize(10)};
      height: ${RelativeSize(10)};
    }
    
    &:after {
      right: ${RelativeSize(5)};
    }
  }

  &:hover {
    color: ${(props) => props.theme.colors.white};
    &:before {
      transform: translateY(-50%) scale(1);
      opacity: 1;
      transition: all 200ms ease-out;
    }
    &:after {
      transform: translateY(-50%) scaleX(1);
      transition: all 200ms ease-out 200ms;
    }
  }
`

export const _NavBar = styled.nav<{$pageTheme:string}>`
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 90;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    padding: ${RelativeSize(20)};
  }

  ${(props) => {
    let navCircleColor = 'brand_1'

    switch (props.$pageTheme) {
      case 'brand_1':
        navCircleColor = 'brand_2'
        break
      case 'brand_2':
        navCircleColor = 'brand_1'
        break
    }

    return `
      ${_NavLink}:before {
        background: ${props.theme.colors[navCircleColor]};
      }
    `
  }}
`