'use client'

import CustomLink from 'components/CustomLink'

import {
  _WorkCard,
    _WorkYear,
    _WorkTitle,
    _WorkDetailsWrapper,
      _WorkDetailsColumn
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
      
      <_WorkYear>/ {year}</_WorkYear>
      <_WorkTitle dangerouslySetInnerHTML={{ __html: title }} />

      <_WorkDetailsWrapper>
        <_WorkDetailsColumn>
          <h3>ROLES</h3>
          <ul>
            {roles.map((r, k) => <li key={k}>{r}</li>)}
          </ul>
        </_WorkDetailsColumn>
        <_WorkDetailsColumn>
          <h3>TECHNOLOGY</h3>
          <ul>
            {tech.map((t, k) => <li key={k}>{t}</li>)}
          </ul>
        </_WorkDetailsColumn>
      </_WorkDetailsWrapper>
    </>
  )

  return link.type === 'internal' ? (
      <CustomLink component={_WorkCard} href={link.url}>
        {CardInner}   
      </CustomLink>
    ) : (
      <_WorkCard href={link.url} target='_blank'>
        {CardInner}   
      </_WorkCard>
    )
}

export default WorkCard