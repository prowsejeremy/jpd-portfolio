import { styled } from 'styled-components'

export const _WorkPageContent = styled.div`
  width: 100%;
`

export const _PageTitle = styled.h1`
  font-size: 15rem;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
  line-height: 0.7;
  color: ${(props) => props.theme.colors.white};
`

export const _VideoWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
  height: auto;
  &:before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: 100%;
  }
`

export const _Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

export const _WorkPageHeader = styled.div`
  position: relative;
  overflow: hidden;
  padding: 10rem 5vw 3rem;
`

export const _WorkItems = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  
  width: 100%;
  height: auto;
  padding: 5rem 2rem;
`