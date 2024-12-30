import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";

import { Attention } from "@/components/Attention";

declare global {
  interface Window {
    gtag: (...args: (string | Date | { [key: string]: unknown })[]) => void;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const [isAttentionVisible, setAttentionVisible] = useState(true);
  const router = useRouter();
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
  const isProduction = process.env.NODE_ENV === "production";

  useEffect(() => {
    if (!isProduction || !GA_MEASUREMENT_ID) return;

    const handleRouterChange = (url: string) => {
      window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
    };

    router.events.on("routeChangeComplete", handleRouterChange);
    return () => router.events.off("routeChangeComplete", handleRouterChange);
  }, [router.events, GA_MEASUREMENT_ID, isProduction]);

  return (
    <>
      {isProduction && GA_MEASUREMENT_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `,
            }}
          />
        </>
      )}
      <Component {...pageProps} />
      {isAttentionVisible && (
        <Attention onClose={() => setAttentionVisible(false)} />
      )}
    </>
  );
}
