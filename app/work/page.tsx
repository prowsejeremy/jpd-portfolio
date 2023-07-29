import { Metadata, ResolvingMetadata } from 'next'
import WorkTemplate from 'templates/WorkTemplate'
import PagesData from 'data/pages.json'

async function getData(slug:String) {

  const pageData = await PagesData.find((page) => page.slug === slug)

  return pageData
}

export async function generateMetadata(): Promise<Metadata> {

  // fetch data
  const data = await getData('work')

  return data ? data?.seo : {}
}

export default async function WorkPage() {

  const data = await getData('work')

  return <WorkTemplate page={data} />
}
