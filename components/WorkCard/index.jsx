'use client'

import CustomLink from 'components/CustomLink'

import {
  _WorkCard,
    _WorkTitle,
    _WorkDetailsWrapper,
      _WorkDetailsInner,
        _WorkDetailsSummary,
          _WorkYear
} from './styles'

const WorkCard = ({card}) => {

  const {
    title,
    roles,
    tech,
    year,
    link
  } = card

  const CardInner = (
    <>
      <_WorkTitle>
        {title}
      </_WorkTitle>
      <_WorkDetailsWrapper>
        <_WorkDetailsInner>
          <_WorkDetailsSummary>
            <h3>ROLES - {roles}</h3>
            <h3>TECH - {tech}</h3>
          </_WorkDetailsSummary>
          <_WorkYear>
            {year}
          </_WorkYear>
        </_WorkDetailsInner>
      </_WorkDetailsWrapper>
    </>
  )

  return link.type === 'internal' ? (
      <CustomLink component={_WorkCard} href={link.url}>
        {CardInner}   
      </CustomLink>
    ) : (
      <_WorkCard href={link.url} target="_blank">
        {CardInner}   
      </_WorkCard>
    )
}

export default WorkCard