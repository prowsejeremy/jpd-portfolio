import { Metadata } from "next";
// import WorkTemplate from 'src/templates/WorkTemplate'
import PagesData from "data/pages.json";
import PageTemplate from "src/templates";

async function getData(slug: string) {
  const pageData = await PagesData.find((page) => page.slug === slug);

  return pageData;
}

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const data = await getData("work");

  return data ? data?.seo : {};
}

export default async function WorkPage() {
  const data = await getData("work");

  // return <WorkTemplate page={data} />
  return <PageTemplate page={data} />;
}
