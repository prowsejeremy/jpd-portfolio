'use client'

import Image from 'next/image'

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
      <_PageHero>
        <_PageTitle>{displayTitle}</_PageTitle>
        <_HeroImage as={Image} src={coverImage.url} alt={coverImage.alt} fill={true} />
      </_PageHero>
      <_WorkDetails>
        <PageSections sections={pageSections} />
      </_WorkDetails>
    </_WorkPageContent>
  )
}

export default WorkDetailTemplate