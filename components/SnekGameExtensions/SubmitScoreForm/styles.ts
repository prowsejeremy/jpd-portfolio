import { styled } from 'styled-components'
import { RelativeSize } from 'styles/mixins'

export const _ScoreForm = styled.form`
  margin: 0;
`

export const _PlayerName = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 20px;
`

export const _InitialInput = styled.input`
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme.colors.brand_2};
  color: ${(props) => props.theme.colors.brand_2};
  background: none;
  margin: 2px;
  display: block;
  width: 25%;
  font-size: 5rem;
  text-align: center;
  outline: none;
  -webkit-appearance: none;
  border-radius: 0;
  
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: 600;

  &::placeholder {
    opacity: 0.2;
    color: ${(props) => props.theme.colors.brand_2};
  }

  ${(props) => props.theme.mediaQueries.desktopSm} {
    font-size: ${RelativeSize(60)};
    margin: ${RelativeSize(5)};
    border-bottom-width: ${RelativeSize(2)};
    line-height: 0.8;
  }
`

export const _ScuccessMessage = styled.div`
  display:  flex;
  flex-direction: column;
`

export const _Title = styled.h2`
  font-size: 3rem;
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: 600;
  text-transform: uppercase;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    font-size: ${RelativeSize(30)};
  }
`