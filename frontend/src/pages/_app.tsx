import "@/styles/globals.css";
import { fetcher } from "@/utils/http";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ shouldRetryOnError: false, fetcher: fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}
