import { styled } from "styled-components";

interface pageWrapperProps {
  $pageTheme: string;
}

export const _PageWrapper = styled.main<pageWrapperProps>`
  background: ${(props) => props.theme.colors.brand_2};
  min-height: 100vh;

  ${(props) => {
    if (props.$pageTheme) {
      return `
        background: ${props.theme.colors[props.$pageTheme]};
      `;
    }
  }}
`;

export const _MainContentWrapper = styled.div`
  width: 100%;
  /* overflow: hidden;p */
`;
