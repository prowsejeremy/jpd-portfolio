import { createGlobalStyle } from 'styled-components'

import defaultTheme from './theme'
import reset from './reset'

export default createGlobalStyle`
  ${reset};

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${defaultTheme.fonts.body};
    font-weight: 300;
    font-size: 10px;
    line-height: 1.5;

    ::selection {
      background: ${defaultTheme.colors.brand_3};
      color: ${defaultTheme.colors.brand_2};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${defaultTheme.fonts.heading};
    font-weight: 600;
  }

  a {
    outline: none;
    color: inherit;
    text-decoration: none;
    transition: color 300ms ease-out;
    &:hover {
      color: ${defaultTheme.colors.brand_3};
    }
  }

  a, button {
    cursor: url('/images/cursor-hover.png') 15 15, default;
  }

  * {
    cursor: url('/images/cursor.png') 15 15, default;
    box-sizing: border-box;
  }
`