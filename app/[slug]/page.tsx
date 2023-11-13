import {notFound} from 'next/navigation'
import { Metadata } from 'next'
// import DynamicTemplate from 'templates/DynamicTemplate'
import PagesData from 'data/pages.json'
import PageTemplate from 'templates'

async function getData(slug:String) {
  const pageData = await PagesData.find((page) => page.slug === slug)

  return pageData
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  // fetch data
  const data = await getData(params.slug)

  return data ? data?.seo : {}
}

export default async function DynamicPage({ params }:{ params:{slug:String} }) {

  const data = await getData(params.slug)

  // return data ? <DynamicTemplate page={data} /> : notFound()
  return data ? <PageTemplate page={data} /> : notFound()
}