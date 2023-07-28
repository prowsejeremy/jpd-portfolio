import { styled } from 'styled-components'

export const _KonamiSurprise = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 110;
  background: ${(props) => props.theme.colors.brand_2};
  display: flex;
  align-items: center;
`

export const _GameWrapper = styled.div`
  margin: auto;
  
  svg {
    display: block;
    width: 14rem;
    margin: 0 auto 2rem;
  }
`

export const _GAME = styled.div`
  border: 2px solid ${(props) => props.theme.colors.brand_3};
`

export const _CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 4rem;
  height: 4rem;
  background: ${(props) => props.theme.colors.brand_3};
  border: none;
  outline: none;
`