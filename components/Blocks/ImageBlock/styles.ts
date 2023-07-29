import styled from 'styled-components'

export const _ImageBlock = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  &:before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: 75%;

    ${(props) => props.theme.mediaQueries.tablet} {
      padding-bottom: 56.25%;
    }
  }
`

export const _Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  object-fit: cover;
`