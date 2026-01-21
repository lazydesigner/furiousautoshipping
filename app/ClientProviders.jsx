"use client";

import { ThemeProvider } from "next-themes";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ClientProviders({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
      disableTransitionOnChange={true}
    >
      <SWRConfig
        value={{
          fetcher,
          revalidateIfStale: false,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
          errorRetryCount: 3,
          errorRetryInterval: 5000,
        }}
      >
        {children}
      </SWRConfig>
    </ThemeProvider>
  );
}
