'use client'

import { useEffect } from 'react'
import { useGlobalState } from 'lib/Store'

import HomeTemplate from 'templates/HomeTemplate'
import WorkTemplate from 'templates/WorkTemplate'
import DynamicTemplate from 'templates/DynamicTemplate'

const PageTemplate = ({page}:{page:any}) => {

  const {dispatch} = useGlobalState()

  useEffect(() => {
    dispatch({type: 'setPageTheme', value: page.pageTheme ? page.pageTheme : 'brand_1'})
  }, [])

  let Template = DynamicTemplate

  switch(page.template) {
    case 'HomeTemplate':
      Template = HomeTemplate
      break
    case 'WorkTemplate':
      Template = WorkTemplate
      break
    case 'DynamicTemplate':
    default:
      Template = DynamicTemplate
      break
  }

  return <Template page={page} />
}

export default PageTemplate
        