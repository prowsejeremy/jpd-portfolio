'use client'

import { RelativeSize } from 'src/_styles/mixins'
import { styled } from 'styled-components'

export const _ErrorPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  height: 90vh;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    height: 100vh;
    flex-direction: row;
    overflow: hidden;
  }
`

export const _ErrorPageContent = styled.div`
  color: ${(props) => props.theme.colors.white};
  max-width: 50rem;
  padding: 0 2rem;
  margin: auto;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    max-width: ${RelativeSize(500)};
    padding: 0;
  }
`

export const _ErrorPageTitle = styled.h1`
  font-size: 5.5rem;
  letter-spacing: -0.1rem;
  text-transform: uppercase;
  line-height: 0.8;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    font-size: ${RelativeSize(120)};
    letter-spacing: ${RelativeSize(-2)};
  }
`

export const _ErrorPageDescription = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: underline;
  }

  ${(props) => props.theme.mediaQueries.desktopSm} {
    font-size: ${RelativeSize(18)};
  }
`

export const _ErrorPageButton = styled.button`
  cursor: pointer;
  font-size: 1.6rem;
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.brand_2};
  text-transform: uppercase;
  font-weight: 600;
  font-family: ${(props) => props.theme.fonts.heading};
  border: none;
  outline: none;
  transition: all 300ms ease-out;
  padding: 1.5rem 3rem;
  margin-top: 1rem;

  &:hover {
    background: ${(props) => props.theme.colors.brand_3};
  }

  ${(props) => props.theme.mediaQueries.desktopSm} {
    font-size: ${RelativeSize(16)};
    padding: ${RelativeSize(10)} ${RelativeSize(25)};
    margin-top: ${RelativeSize(10)};
  }
`