import React from "react";

import Head from "next/head";

const SayyoMeta = () => {
  return (
    <Head>
      <title>Sayyo</title>
      <meta name="description" content="repunch web" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        property="og:image"
        content="https://mobileto-files.s3.amazonaws.com/og_image_sayyo.png"
      />
      {/* <meta
      property="og:image"
      content="https://d1vnx0h70erqwv.cloudfront.net/_next/static/media/logo_mobileto.97fc625a.png"
    /> */}
      <meta property="og:title" content="Sayyo" />

      {/* //카카오톡에 링크를 전송하면 보이는 내용을 text로 설정 */}
      <meta
        property="og:description"
        content="Kết nối các người giải quyết vấn đề địa phương!"
      />
      <link rel="icon" href="/sayyo/favicon.ico" />

      {/** 1. 즐겨찾기 아이콘?  2.아이패드 아이콘?*/}
      {/* <link rel="shortcut icon" href="http://test.repunch.io/favicon.ico" />
    
    <link
      rel="apple-touch-startup-image"
      href="http://test.repunch.io/favicon.ico"
    /> */}

      {/** 안드로이드 현재 폰에서는 되는중 탭안되면 고해상도 아이콘 소스코드 추가하면 될 듯? */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/sayyo/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/sayyo/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/sayyo/favicon-16x16.png"
      />
      <link rel="manifest" href="/sayyo/site.webmanifest" />
      <link rel="mask-icon" href="/sayyo/safari-pinned-tab.svg" />

      {/** 테마랑 타이틀 관련 컬러인 듯? 나중에 필요하면 참고해서 적용 */}
      {/* <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ae4dvc" /> */}
    </Head>
  );
};

export default SayyoMeta;
