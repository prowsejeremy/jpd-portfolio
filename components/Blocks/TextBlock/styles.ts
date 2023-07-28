import styled from 'styled-components'

export const _TextBlock = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 10rem 5rem;
  background: ${(props) => props.theme.colors.white};
`

export const _TextContent = styled.p`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.brand_2};
  max-width: 60rem;
`