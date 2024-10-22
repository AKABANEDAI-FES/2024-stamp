import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { useState } from "react";

import { Attention } from "@/components/Attention";

export default function App({ Component, pageProps }: AppProps) {
  const [isAttentionVisible, setAttentionVisible] = useState(true);

  return (
    <>
      <Component {...pageProps} />
      {isAttentionVisible && (
        <Attention onClose={() => setAttentionVisible(false)} />
      )}
    </>
  );
}
