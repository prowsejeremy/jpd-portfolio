// import { Metadata, ResolvingMetadata } from 'next'
import HomeTemplate from 'templates/HomeTemplate'
import PagesData from 'data/pages.json'

async function getData(slug:String) {

  const pageData = await PagesData.find((page) => page.slug === slug)

  return pageData

  // res.json()

  // const CurrentPage = res.find((page, index) => page.slug === slug)
 
  // // Recommendation: handle errors
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }

  // return CurrentPage
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

export default async function Page() {

  const data = await getData('home')

  return <HomeTemplate page={data} />
}