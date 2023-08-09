import { styled } from 'styled-components'
import { motion } from 'framer-motion'

export const _PopupWrapper = styled(motion.div)`
  background: ${(props) => props.theme.colors.brand_3};
  padding: 30px;
  width: 95%;
  height: 95%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 2.5%;
  left: 2.5%;
  text-align: center;
  z-index: 5;
`