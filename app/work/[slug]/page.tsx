import {notFound} from "next/navigation"
// import { Metadata, ResolvingMetadata } from 'next'
import WorkDetailTemplate from 'templates/WorkDetailTemplate'
import PagesData from 'data/workItems.json'

async function getData(slug:String) {
  const pageData = await PagesData.find((page) => page.slug === slug)

  return pageData
}

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent?: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const id = params.id

//   // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json())

//   // // optionally access and extend (rather than replace) parent metadata
//   // const previousImages = (await parent).openGraph?.images || []

//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   }
// }

export default async function WorkDetailPage({ params }:{ params:{slug:String} }) {

  const data = await getData(params.slug)

  return data ? <WorkDetailTemplate page={data} /> : notFound()
}