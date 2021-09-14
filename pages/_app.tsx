import type { AppProps } from "next/app";

import "tailwindcss/tailwind.css";

function VmxCore({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default VmxCore;
