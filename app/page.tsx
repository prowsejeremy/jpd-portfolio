import { Metadata, ResolvingMetadata } from 'next'
import HomeTemplate from 'templates/HomeTemplate'
import PagesData from 'data/pages.json'

async function getData(slug:String) {

  const pageData = await PagesData.find((page) => page.slug === slug)

  return pageData
}

export async function generateMetadata(): Promise<Metadata> {

  // fetch data
  const data = await getData('home')

  return data ? data?.seo : {}
}

export default async function Page() {

  const data = await getData('home')

  return <HomeTemplate page={data} />
  // return <HomeTemplate />
}