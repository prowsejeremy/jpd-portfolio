import { notFound } from "next/navigation";
import { Metadata } from "next";

import PagesData from "@/data/pages.json";
import PageTemplate from "@/src/templates";

// Types
type PageArgs = {
  params: Promise<{ slug: string }>;
};

async function getData(slug: string): Promise<any> {
  const pageData = await PagesData.find((page) => page.slug === slug);

  return pageData;
}

export async function generateMetadata({
  params,
}: PageArgs): Promise<Metadata> {
  const { slug } = await params;
  // fetch data
  const data = await getData(slug);

  return data ? data?.seo : {};
}

export async function generateStaticParams() {
  const routes = await PagesData.map((page) => ({
    slug: page.slug,
  }));

  return routes;
}

export default async function DynamicPage({ params }: PageArgs) {
  const { slug } = await params;

  const data = await getData(slug);

  return data ? <PageTemplate page={data} /> : notFound();
}
