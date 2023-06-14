import React, { FC } from "react";
import Head from "next/head";

// export const siteTitle = 'Next.js Sample WebSite'

interface HeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const JHead: FC<HeadProps> = (props) => {
  const {
    title = "Home",
    description = "约翰的聊天室",
    keywords = "azhu, azhubaby, johan, johnny joestar, website of johan, website of johnny joestar, 约翰, 约翰的个人网站, 约翰的作品 ",
  } = props;

  const getAnalyticsTag = () => {
    return {
      __html: `
          var _hmt = _hmt || []
          ; (function () {
              var hm = document.createElement('script')
              hm.type = 'text/javascript';
              hm.async = true;
              hm.src = 'https://hm.baidu.com/hm.js?491d5ab400b791874eac843b22156b7e'
              var s = document.getElementsByTagName('script')[0]
              s.parentNode.insertBefore(hm, s)
          })()
          `,
    };
  };

  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title} | Azhubaby</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
      />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:description" content={description} />
      <meta property="og:title" content="约翰的聊天室" />
      <meta property="og:url" content="https://azhubaby.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="azhubaby" />
      <meta property="og:image" content="/icons/android-chrome-192x192.png" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="application-name" content={title} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      <link rel="icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link rel="manifest" href="/icons/manifest.webmanifest" />
      <link rel="shortcut icon" href="/favicon.ico" />
      {/* <script dangerouslySetInnerHTML={getAnalyticsTag()} /> */}
    </Head>
  );
};

export default JHead;
