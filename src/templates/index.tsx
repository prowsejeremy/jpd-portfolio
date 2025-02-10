"use client";

import { useEffect } from "react";
import { useGlobalState } from "@/src/lib/Store";

import HomeTemplate from "@/src/templates/HomeTemplate";
import WorkTemplate from "src/templates/WorkTemplate";
import DynamicTemplate from "src/templates/DynamicTemplate";

import { notFound } from "next/navigation";

const PageTemplate = ({ page }: { page: any }) => {
  const { dispatch } = useGlobalState();

  useEffect(() => {
    dispatch({
      type: "setPageTheme",
      value: page.pageTheme ? page.pageTheme : "brand_1",
    });
  }, []);

  let Template = DynamicTemplate;

  switch (page.template) {
    case "HomeTemplate":
      Template = HomeTemplate;
      break;
    case "WorkTemplate":
      Template = WorkTemplate;
      break;
    case "DynamicTemplate":
      Template = DynamicTemplate;
      break;
    default:
      return notFound();
    // Template = DynamicTemplate
    // break;
  }

  return <Template page={page} />;
};

export default PageTemplate;
