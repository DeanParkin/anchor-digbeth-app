import React from "react";
import Head from "next/dist/shared/lib/head";
import {useRouter} from 'next/router';
import ogImage from "../public/og-image.jpg"

const SEO = ({ title, description }) => {
  let route = useRouter();
  const siteTitle = `The Anchor, Digbeth`;
  const pageTitle = `${siteTitle} | ${title}`;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://theanchordigbeth.com/og-image.jpg" />
        <meta property="og:url" content={`https://theanchordigbeth.com${route.pathname}`} />

        <meta property="og:site_name" content={siteTitle} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content="Plan;D" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={description} />

        <meta property="og:locale" content="en_GB" />
        <meta name="author" content="Plan;D"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
    </>
  );
};

export default SEO;
