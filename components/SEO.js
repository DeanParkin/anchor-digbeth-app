import React from "react";
import Head from "next/dist/shared/lib/head";

const SEO = () => {
  return (
    <>
      <Head>
        {/* //TODO create properties to update the title, description, and Open Graph tags */}
        <title>The Anchor, Digbeth | </title>
        <meta
          name="description"
          content="The Anchor, Digbeth is a place of comfort to enjoy real ale, ciders, craft beers, wine, spirits and even cocktails, modern drinking in a traditional boozer."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
};

export default SEO;
