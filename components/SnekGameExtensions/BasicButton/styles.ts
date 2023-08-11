import { styled } from 'styled-components'
import { RelativeSize } from 'styles/mixins'

export const _Button = styled.button`
  outline: none;
  background: ${(props) => props.theme.colors.brand_1};
  color: ${(props) => props.theme.colors.brand_2};
  border: none;
  padding: 1rem 2rem;
  margin: 1rem;
  font-size: 2rem;
  border-radius: 0;
  text-decoration: none;
  -webkit-appearance: none;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: 600;
  transition: all 300ms ease;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    font-size: ${RelativeSize(20)};
    padding: ${RelativeSize(10)} ${RelativeSize(20)};
    margin: ${RelativeSize(10)};
  }

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.brand_1};
  }
`