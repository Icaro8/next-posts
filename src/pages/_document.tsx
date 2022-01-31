import type { NextPage } from "next";
import { Html, Head, NextScript, Main } from "next/document";

const _document: NextPage = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;700&family=Pacifico&family=Roboto:wght@300;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default _document;
