import { Head, Html, Main, NextScript } from "next/document";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body className="bg-background">
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
