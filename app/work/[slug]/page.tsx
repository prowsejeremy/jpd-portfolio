import {notFound} from 'next/navigation'
import { Metadata } from 'next'
import WorkDetailTemplate from 'templates/WorkDetailTemplate'
import PagesData from 'data/workItems.json'

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

export default async function WorkDetailPage({ params }:{ params:{slug:String} }) {

  const data = await getData(params.slug)

  return data ? <WorkDetailTemplate page={data} /> : notFound()
}