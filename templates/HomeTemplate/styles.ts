import { styled } from 'styled-components'

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
  }
`

export const _ButtonOfDespair = styled.button`
  background: none;
  border: none;
  outline: none;
  margin: auto;
  width: auto;
  display: block;
  font-size: 2rem;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.white};
  cursor: url('/images/cursor-hover.png') 15 15, default;
  transition: all 300ms ease;

  &:hover {
    color: ${(props) => props.theme.colors.brand_2};
  }
`

export const _PageTitle = styled.h1`
  margin: auto;
  width: auto;
  display: block;
  color: ${(props) => props.theme.colors.white};
`