import { Metadata } from "next";
import PagesData from "data/pages.json";
import PageTemplate from "src/_templates";

async function getData(slug: string) {
  const pageData = await PagesData.find((page) => page.slug === slug);

  return pageData;
}

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const data = await getData("home");

  return data ? data?.seo : {};
}

export default async function Page() {
  const data = await getData("home");
  if (data) {
    data.template = "newHome";
  }
  return <PageTemplate page={data} />;
}
