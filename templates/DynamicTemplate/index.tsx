'use client'

import PageHero from 'components/PageHero'
import PageSections from 'components/PageSections'

import {
  _DynamicPageContent,
    _DynamicPageDetails
} from './styles'

const DynamicTemplate = ({page}:{page:any}) => {

  const {
    displayTitle,
    coverImage,
    coverVideo,
    pageSections
  } = page

  return (
    <_DynamicPageContent>
      <PageHero title={displayTitle} image={coverImage} videoUrl={coverVideo} />
      <_DynamicPageDetails>
        <PageSections sections={pageSections} />
      </_DynamicPageDetails>
    </_DynamicPageContent>
  )
}

export default DynamicTemplate