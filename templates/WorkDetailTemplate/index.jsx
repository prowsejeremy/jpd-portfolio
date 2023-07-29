'use client'

import PageHero from 'components/PageHero'
import PageSections from 'components/PageSections'

import {
  _WorkPageContent,
    _PageHero,
      _HeroImage,
      _PageTitle,
    _WorkDetails
} from './styles'

const WorkDetailTemplate = ({page}) => {

  const {
    displayTitle,
    coverImage,
    pageSections
  } = page

  return (
    <_WorkPageContent>
      <PageHero title={displayTitle} image={coverImage} />
      <_WorkDetails>
        <PageSections sections={pageSections} />
      </_WorkDetails>
    </_WorkPageContent>
  )
}

export default WorkDetailTemplate