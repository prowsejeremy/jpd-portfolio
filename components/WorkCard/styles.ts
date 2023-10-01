import { RelativeSize } from 'styles/mixins'
import { styled } from 'styled-components'

export const _WorkTitle = styled.h3`
  font-size: 5.5rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.brand_1};
  line-height: 0.9;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    font-size: ${RelativeSize(80)};
  }
`

export const _WorkDetailsWrapper = styled.div`
  width: auto;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    margin-top ${RelativeSize(20)};
    opacity: 0;
    visibility: hidden;
    height: auto;
    max-height: 0;
    transition: all 300ms ease-out;
  }
`

export const _WorkDetailsColumn = styled.div`
  color: ${(props) => props.theme.colors.white};

  &:first-child {
    margin: 0 0 2rem;

    ${(props) => props.theme.mediaQueries.desktopSm} {
      margin: 0 ${RelativeSize(30)} 0 0;
    }
  }

  h3 {
    font-size: 3rem;

    ${(props) => props.theme.mediaQueries.desktopSm} {
      font-size: ${RelativeSize(20)};
    }
  }
  ul {
    padding-left: 2rem;

    ${(props) => props.theme.mediaQueries.desktopSm} {
      padding-left: ${RelativeSize(20)};
    }
    
    li {
      font-size: 1.6rem;
      margin-top: 0.8rem;
      list-style-type: "–  ";

      ${(props) => props.theme.mediaQueries.desktopSm} {
        font-size: ${RelativeSize(12)};
        margin-top: ${RelativeSize(8)};
      }
    }
  }
`

export const _WorkYear = styled.p`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-90deg) translate(35%, -90%);
  transform-origin: bottom right;
  
  ${(props) => props.theme.mediaQueries.desktopSm} {
    font-size: ${RelativeSize(16)};
  }
`

export const _WorkCard = styled.a`
  display: inline-block;
  width: auto;
  position: relative;
  overflow: hidden;
  padding-left: 3.5rem;

  &:not(:last-child) {
    margin-bottom: 5rem;
  }

  ${(props) => props.theme.mediaQueries.desktopSm} {
    padding-left: ${RelativeSize(50)};

    &:not(:last-child) {
      margin-bottom: ${RelativeSize(60)};
    }

    &:hover {
      ${_WorkDetailsWrapper} {
        opacity: 1;
        visibility: visible;
        max-height: ${RelativeSize(150)};
      }
    }
  }
`