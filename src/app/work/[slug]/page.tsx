import { notFound } from "next/navigation";
import { Metadata } from "next";

import workItems from "data/workItems.json";
import PageTemplate from "src/templates";

async function getData(slug: string) {
  const pageData = await workItems.find((page) => page.slug === slug);

  return pageData;
}

// Types
type PageArgs = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageArgs): Promise<Metadata> {
  const { slug } = await params;
  // fetch data
  const data = await getData(slug);

  return data ? data?.seo : {};
}

export async function generateStaticParams() {
  const routes = await workItems.map((workItem) => ({
    slug: workItem.slug,
  }));

  return routes;
}

export default async function WorkDetailPage({ params }: PageArgs) {
  const { slug } = await params;
  const data = await getData(slug);

  return data ? <PageTemplate page={data} /> : notFound();
}
