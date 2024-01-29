import Image from 'next/image'
import VideoBlock from 'src/_components/Blocks/VideoBlock'

import {
  _PageHero,
  _PageTitle,
  _HeroBackgroundMedia,
  _HeroImage
} from './styles'

export default function PageHero({title, videoUrl, image}:{title:string, videoUrl:string, image:{url:string, alt:string}}) {
  return (
    <_PageHero>
      <_PageTitle>{title}</_PageTitle>
      <_HeroBackgroundMedia>
        {image?.url && <_HeroImage as={Image} src={image.url} alt={image.alt} fill={true} priority /> }
        { videoUrl && <VideoBlock src={videoUrl} /> }
      </_HeroBackgroundMedia>
    </_PageHero>
  )
}