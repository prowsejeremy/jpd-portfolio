import { styled } from 'styled-components'
import { motion } from 'framer-motion'

export const _PageTransitionWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.brand_3};
  z-index: 100;
`