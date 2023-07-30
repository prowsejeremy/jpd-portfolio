const BR_SMALL = 576;
const BR_TABLET = 768;
const BR_TABLETLANDSCAPE = 1024;
const BR_DESKTOPSM = 1025;
const BR_DESKTOP = 1440;
const BR_MAX = 1920;

const defaultTheme = {
  colors: {
    brand_1: '#f42c5c', // Pink
    brand_2: '#1b0a24', // Purple
    brand_3: '#2bf599', // Green
    white: '#ffffff',
    black: '#000000',
  },
  fonts: {
    heading: 'var(--font-heading)',
    body: 'var(--font-body)',
  },
  mediaQueries: {
    small: `@media screen and (min-width: ${BR_SMALL}px)`,
    smallLandscape: `@media screen and (min-width: ${BR_SMALL}px) and (orientation: landscape)`,
    tablet: `@media screen and (min-width: ${BR_TABLET}px)`,
    tabletAndAbove: `@media (min-width: ${BR_TABLET}px) and (orientation: portrait), (min-width: ${BR_TABLETLANDSCAPE}px)`,
    tabletLandscape: `@media screen and (min-width: ${BR_TABLETLANDSCAPE}px) and (orientation: landscape)`,
    desktopSm: `@media screen and (min-width: ${BR_DESKTOPSM}px)`,
    desktop: `@media screen and (min-width: ${BR_DESKTOP}px)`,
    max: `@media screen and (min-width: ${BR_MAX}px)`
  },
}

export default defaultTheme