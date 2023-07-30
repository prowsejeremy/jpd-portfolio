import { RelativeSize } from 'styles/mixins'
import { keyframes, styled } from 'styled-components'

const animateTextCoverIn =  keyframes`
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0);
  }
`

const animateTextCoverOut =  keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(100%);
  }
`

export const _WorkTitle = styled.h3`
  font-size: 5rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.brand_3};
  line-height: 0.9;
  margin-bottom: 2rem;

  ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 16rem;
    margin: 0;
  }

  ${(props) => props.theme.mediaQueries.tabletLandscape} {
    font-size: ${RelativeSize(135)};
    padding: ${RelativeSize(20)} ${RelativeSize(20)} ${RelativeSize(15)};
  }
`

export const _WorkDetailsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => props.theme.mediaQueries.tablet} {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    padding: 3rem;
    /* opacity: 0;
    visibility: hidden;
    transition: all 500ms ease; */
  }

  ${(props) => props.theme.mediaQueries.tabletLandscape} {
    padding: ${RelativeSize(30)};
    animation: ${animateTextCoverOut} 400ms ease-in-out forwards;
  }
`

export const _WorkDetailsInner = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  padding-top: 3rem;
  border-top: 2px solid ${(props) => props.theme.colors.brand_3};

  font-size: 1.6rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.brand_3};
  line-height: 0.9;

  ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 4rem;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border-bottom: 2px solid ${(props) => props.theme.colors.brand_3};
  }

  ${(props) => props.theme.mediaQueries.tabletLandscape} {
    padding: ${RelativeSize(15)} 0;
    font-size: ${RelativeSize(30)};
  }
`

export const _WorkDetailsSummary = styled.div`
  h3 {
    font-weight: 300;
    margin-bottom: 2rem;

    ${(props) => props.theme.mediaQueries.tablet} {
      margin-bottom: 0;
    }
  }
`

export const _WorkYear = styled.h3``

export const _WorkCard = styled.a`
  display: block;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
  background: ${(props) => props.theme.colors.brand_2};
  padding: 1.5rem;

  ${(props) => props.theme.mediaQueries.tablet} {
    padding: 0;
    margin: 0;
    background: none;
    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      background: ${(props) => props.theme.colors.brand_2};
      transform: translateX(-100%);
      animation: ${animateTextCoverOut} 600ms ease-in-out forwards;
    }
  }

  ${(props) => props.theme.mediaQueries.tabletLandscape} {

    &:hover, &:focus {
      &:before {
        animation: ${animateTextCoverIn} 400ms ease-in-out forwards;
      }
      ${_WorkDetailsWrapper} {
        /* opacity: 1;
        visibility: visible; */
        animation: ${animateTextCoverIn} 600ms ease-in-out forwards;
      }
    }
  }

  * {
    cursor: url('/images/cursor-hover.png') 15 15, default;
  }
`