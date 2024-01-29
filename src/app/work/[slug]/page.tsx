import {notFound} from 'next/navigation'
import { Metadata } from 'next'

import workItems from 'data/workItems.json'
import PageTemplate from 'src/_templates'

async function getData(slug:String) {
  const pageData = await workItems.find((page) => page.slug === slug)

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

export async function generateStaticParams() {

  const routes = await workItems.map((workItem) => ({
    slug: workItem.slug,
  }))

  return routes
}

export default async function WorkDetailPage({ params }:{ params:{slug:String} }) {

  const data = await getData(params.slug)

  return data ? <PageTemplate page={data} /> : notFound()
}