'use client'

import CustomLink from 'src/_components/CustomLink'

import {
  _WorkCard,
    _WorkYear,
    _WorkTitle,
    _WorkDetailsWrapper,
      _WorkDetailsColumn
} from './styles'

interface CardProps {
  title: string,
  roles: string[],
  tech: string[],
  year: string,
  link: {url:string, type:string, target:string}
}

const WorkCard = ({card}:{card:CardProps}) => {

  const {
    title,
    roles,
    tech,
    year,
    link
  } = card

  const CardInner = (
    <>
      
      <_WorkYear>{year}</_WorkYear>
      <_WorkTitle dangerouslySetInnerHTML={{ __html: title }} />

      <_WorkDetailsWrapper>
        <_WorkDetailsColumn>
          <h3>ROLES</h3>
          <ul>
            {roles.map((r:string, k:number) => <li key={k}>{r}</li>)}
          </ul>
        </_WorkDetailsColumn>
        <_WorkDetailsColumn>
          <h3>TECHNOLOGY</h3>
          <ul>
            {tech.map((t:string, k:number) => <li key={k}>{t}</li>)}
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