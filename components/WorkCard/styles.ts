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
  font-size: 12rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.brand_3};
  line-height: 0.9;
`

export const _WorkDetailsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  padding: 3rem;
  transition: all 200ms ease 100ms;
  animation: ${animateTextCoverOut} 300ms ease-in-out forwards;
`

export const _WorkDetailsInner = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.2rem 0;
  border-top: 2px solid ${(props) => props.theme.colors.brand_3};
  border-bottom: 2px solid ${(props) => props.theme.colors.brand_3};

  font-size: 2rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.brand_3};
  line-height: 0.9;
`

export const _WorkDetailsSummary = styled.div`
  h3 {
    font-weight: 300;
  }
`

export const _WorkYear = styled.h3``

export const _WorkCard = styled.a`
  display: block;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
  * {
    cursor: url('/images/cursor-hover.png') 15 15, default;
  }

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
    animation: ${animateTextCoverOut} 200ms ease-in-out forwards;
  }

  &:hover, &:focus {
    &:before {
      animation: ${animateTextCoverIn} 200ms ease-in-out forwards;
    }
    ${_WorkDetailsWrapper} {
      opacity: 1;
      visibility: visible;
      animation: ${animateTextCoverIn} 300ms ease-in-out forwards;
    }
  }
`