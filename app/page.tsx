import { Metadata } from 'next'
// import HomeTemplate from 'templates/HomeTemplate'
import PagesData from 'data/pages.json'
import PageTemplate from 'templates'

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

  // return <HomeTemplate page={data} />
  return <PageTemplate page={data} />
}