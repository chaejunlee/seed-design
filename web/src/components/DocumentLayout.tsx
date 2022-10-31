import { MDXProvider } from "@mdx-js/react";
import React from "react";

import MdxComponents from "./mdx/MdxComponents";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <MDXProvider components={MdxComponents}>{children}</MDXProvider>;
}