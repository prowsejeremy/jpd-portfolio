import {
  _PopupWrapper
} from './styles'

export default function Popup({children}:{children:React.ReactNode}) {
  return (
    <_PopupWrapper
      initial={{opacity: 0, translateY: '10%'}}
      animate={{opacity: 1, translateY: '0%'}}
      exit={{opacity: 0, translateY: '10%'}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </_PopupWrapper>
  )
}