import Document, { Head, Html, Main, NextScript } from "next/document";

class VmxCore extends Document {
  render() {
    return (
      <Html lang="en" className="h-full">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="h-full font-body bg-blue">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default VmxCore;
