import TextBlock from 'components/Blocks/TextBlock'
import ImageBlock from 'components/Blocks/ImageBlock'
import VideoBlock from 'components/Blocks/VideoBlock'

// "type": "text",
// "type": "video",
// "type": "image",

import {
  _Sections,
    _Section,
} from './styles'


const PageSections = ({sections}) => {

  const fetchSection = (section) => {
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