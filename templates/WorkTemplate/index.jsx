'use client'

import PageHero from 'components/PageHero'
import WorkCard from 'components/WorkCard'

import {
  _WorkPageContent,
    _WorkItems
} from './styles'

const WorkTemplate = ({page}) => {

  const {
    displayTitle,
    workItems
  } = page

  return (
    <_WorkPageContent>
      <PageHero title={displayTitle} videoUrl='/videos/work-widescreen.mp4' />
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