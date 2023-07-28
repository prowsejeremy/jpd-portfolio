import { styled } from 'styled-components'

export const _WorkPageContent = styled.div`
  width: 100%;
`

export const _PageHero = styled.div`
  position: relative;
  overflow: hidden;
  padding: 10rem 5vw 3rem;
  width: 100%;
  min-height: 40rem;
  height: 90vh;
  display: flex;
  align-items: flex-end;
`

export const _HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  object-fit: cover;
`

export const _PageTitle = styled.h1`
  font-size: 15rem;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
  line-height: 0.7;
  color: ${(props) => props.theme.colors.white};
`

export const _WorkDetails = styled.div`  
  width: 100%;
  height: auto;
  margin: 0 auto;
`