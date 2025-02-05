import TextBlock from 'src/_components/Blocks/TextBlock'
import ImageBlock, { ImageType } from 'src/_components/Blocks/ImageBlock'
import VideoBlock from 'src/_components/Blocks/VideoBlock'

import {
  _Sections,
    _Section,
} from './styles'

type sectionTypes = {
  type:string,
  content:string,
  image:ImageType,
  videoUrl:string,
}

const PageSections = ({sections}:{sections:sectionTypes[]}) => {

  const fetchSection = (section:sectionTypes) => {
    switch(section.type) {
      case 'text':
        return <TextBlock content={section.content} />
      case 'image':
        return <ImageBlock image={section.image} />
      case 'video':
        return <VideoBlock src={section.videoUrl} />
    }
  }

  return (
    <_Sections>
      { sections.map((section, key) => {
        return (
          <_Section key={key}>
            { fetchSection(section) }
          </_Section>
        )
      }) }
    </_Sections>
  )

}

export default PageSections