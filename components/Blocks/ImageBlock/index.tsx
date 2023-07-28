import Image from 'next/image'

import {
  _ImageBlock,
    _Image,
} from './styles'

const ImageBlock = ({image}) => {
  return (
    <_ImageBlock>
      <_Image as={Image} src={image.url} alt={image.alt} fill={true} />
    </_ImageBlock>
  )
}

export default ImageBlock