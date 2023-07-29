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
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${defaultTheme.fonts.heading};
  }

  a {
    outline: none;
    color: inherit;
    text-decoration: none;
    cursor: url('/images/cursor-hover.png') 15 15, default;
  }

  * {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    cursor: url('/images/cursor.png') 15 15, default;
  }
`
