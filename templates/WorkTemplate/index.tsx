'use client'

import WorkCard from 'components/WorkCard'

import {
  _WorkPageContent,
    _WorkItems
} from './styles'

const WorkTemplate = ({page}:{page:any}) => {

  const {
    workItems
  } = page

  return (
    <_WorkPageContent>
      {workItems &&
        <_WorkItems>
          {workItems.map((item:any, key:number) => {
            return <WorkCard card={item} key={key} />
          })}
        </_WorkItems>
      }
    </_WorkPageContent>
  )
}

export default WorkTemplate