import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

export default function Layout({ children, pageTitle }: LayoutProps) {
  const siteTitle = "バネスタ！";
  const fullTitle = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
      </Head>
      {children}
    </>
  );
}
