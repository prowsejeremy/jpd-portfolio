'use client'

import WorkCard from 'components/WorkCard'

import {
  _WorkPageContent,
    _WorkPageHeader,
      _PageTitle,
      _VideoWrapper,
        _Video,
    _WorkItems
} from './styles'

const WorkTemplate = ({page}) => {

  const {
    displayTitle,
    workItems
  } = page

  return (
    <_WorkPageContent>
      <_WorkPageHeader>
        <_PageTitle>{displayTitle}</_PageTitle>
        <_VideoWrapper>
          <_Video autoPlay muted loop controls={false}>
            <source src='/videos/work.mp4' type='video/mp4' />
          </_Video>
        </_VideoWrapper>
      </_WorkPageHeader>
      {workItems &&
        <_WorkItems>
          {workItems.map((item, key) => {
            return <WorkCard card={item} key={key} />
          })}
        </_WorkItems>
      }
    </_WorkPageContent>
  )
}

export default WorkTemplate