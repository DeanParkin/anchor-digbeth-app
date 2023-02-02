import React from "react";
import Head from "next/dist/shared/lib/head";
import {useRouter} from 'next/router';
import Script from "next/script";

const baseUrl = {
  development: "http://localhost:3000",
  production: "https://www.theanchordigbeth.com",
}[process.env.NODE_ENV]

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
        <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
        <meta property="og:url" content={baseUrl + route.pathname} />
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
        {/* <!-- Hotjar Tracking Code for https://www.theanchordigbeth.com/ --> */}
<Script id="hotjar">
    {`(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3348840,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
</Script>
      </Head>
    </>
  );
};

export default SEO;
