import { styled } from 'styled-components'
import { motion } from 'framer-motion'
import { RelativeSize } from 'styles/mixins'

export const _LeaderboardWrapper = styled(motion.div)`
  position: absolute;
  bottom: 8rem;
  background: ${(props) => props.theme.colors.brand_3};
  color: ${(props) => props.theme.colors.brand_2};
  z-index: 10;
  left: 2rem;
  padding: 2rem;
  max-width: 30rem;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    bottom: ${RelativeSize(80)};
    left: ${RelativeSize(20)};
    padding: ${RelativeSize(20)};
    max-width: ${RelativeSize(300)};
  }
`

export const _Title = styled.h2`
  font-size: 2rem;
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: 600;
  text-transform: uppercase;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    font-size: ${RelativeSize(30)};
  }
`

export const _Message = styled.p`
  font-size: 1.6rem;
  font-family: ${(props) => props.theme.fonts.body};
  margin: 1rem auto;
  line-height: 1.3;

  ${(props) => props.theme.mediaQueries.desktopSm} {
    font-size: ${RelativeSize(14)};
    margin: ${RelativeSize(10)} auto;
  }
`

export const _LeaderboardTable = styled.table`
  border-collapse:collapse;
  width: 100%;

  td, th {
    text-align: center;
    font-size: 2rem;
    font-family: ${(props) => props.theme.fonts.heading};

    ${(props) => props.theme.mediaQueries.desktopSm} {
      font-size: ${RelativeSize(20)};
    }
  }
`