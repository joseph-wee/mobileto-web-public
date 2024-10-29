import { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { btn_instagram, btn_mail, logo_mobileto } from "@/assets";

export default function Home() {
  const [random, setRandom] = useState(-1);

  useEffect(() => {
    Math.floor(Math.random() * 2) ? setRandom(1) : setRandom(0);
  }, []);

  return (
    <>
      <Head>
        <title>Mobileto</title>
        <meta name="description" content="repunch web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://mobileto-files.s3.amazonaws.com/mobileto_og_1.png"
        />
        {/* <meta
          property="og:image"
          content="https://d1vnx0h70erqwv.cloudfront.net/_next/static/media/logo_mobileto.97fc625a.png"
        /> */}
        <meta property="og:title" content="Mobileto" />

        {/* //카카오톡에 링크를 전송하면 보이는 내용을 text로 설정 */}
        <meta property="og:description" content="Way to mobile" />
        <link rel="icon" href="/favicon.ico" />

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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" />

        {/** 테마랑 타이틀 관련 컬러인 듯? 나중에 필요하면 참고해서 적용 */}
        {/* <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ae4dvc" /> */}
      </Head>
      <div
        className="relative  text-[#FFFDFD] font-Inter overflow-hidden 
        vhvh
        custom_responsive1
        md720:min-h-[892px]
        md720:h-[100vh]
"
      >
        {/** bg video */}
        {random === 1 && (
          <div className="relative left-1/2 -translate-x-1/2 md1600 max_aspect1600">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full top-0 left-0"
            >
              <source src="video_0.mp4" type="video/mp4" />
            </video>
          </div>
        )}
        {random === 0 && (
          <div
            className="relative left-1/2 -translate-x-1/2
            max_aspect16_9_1
            max_aspect16_9_2
            max_aspect16_9_3
            max_aspect16_9_4
            max_aspect16_9_5
            "
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full top-0 left-0"
            >
              <source src="video_1.mp4" type="video/mp4" />
            </video>
          </div>
        )}

        {/** content */}
        <div
          className="absolute top-0 w-full z-10 flex justify-between mb-[277px] pt-[40px] pl-[50px] pr-[46px]
        md:block md:pt-[21px] md:pl-[19.64px] md:pr-[30px]
        "
        >
          <div className="flex md:justify-between md:mb-[207px]">
            <Link href="/">
              <Image
                src={logo_mobileto}
                alt="logo_mobileto"
                className="mr-[43.14px] w-[320.729px] h-[36px]
              md:w-[124.728px] md:h-[14px] 
              "
              />
            </Link>
            <div
              className="pt-[2px] text-[18px] leading-[19.8px] tracking-[0.36px]
            md:pt-0 md:text-[12px] md:leading-[13.2px] md:tracking-normal
            "
            >
              <span className="block mb-[4px]">APP WEB SERVER</span>
              <span>DEVELOPEMENT & UI/UX</span>
            </div>
          </div>
          <div className="mr-[6px] md:pr-[6.62px] md:mr-0 md:flex md:justify-end">
            <div>
              <span
                className="block mb-[4px] text-[18px] leading-[19.8px] tracking-[0.36px]
              md:text-[12px] md:leading-[13.2px] md:tracking-[0.24px]
              "
              >
                SEOUL, KOREA
              </span>
              <span
                className="block mb-[16px] text-[18px] leading-[19.8px] tracking-[0.36px]
              md:mb-[13.47px] md:text-[12px] md:leading-[13.2px] md:tracking-[0.24px]
              "
              >
                HOCHIMINH, VIETNAM
              </span>

              <div className="flex gap-[10px]">
                <a href="https://www.instagram.com/mobileto.io" target="_blank">
                  <Image src={btn_instagram} alt="btn_instagram" />
                </a>
                <a href="mailto:contact@mobileto.io">
                  <Image src={btn_mail} alt="btn_mail" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/** content 중단부분 */}

        <span
          className="absolute top-[441px] text-white font-Inter text-[220px] leading-[286px] uppercase text-nowrap animate-normal
          md:top-[342px] md:text-[100px] md:leading-[130px] md:animate-md_normal
        "
        >
          ©MOBILETO. Specializes in creating global digital experience services.
          We offer proposals tailored to our clients&apos; needs and goals,
          ensuring that the solutions we build and deliver operate at the
          highest quality.
        </span>
        <span
          className="absolute top-[650.5px] text-white font-Inter text-[220px] leading-[286px] uppercase text-nowrap animate-fast
          md:top-[442px] md:text-[100px] md:leading-[130px] md:animate-md_fast
        "
        >
          TEAM BRO. Specializes in creating global digital experience services.
          We offer proposals tailored to our clients&apos; needs and goals,
          ensuring that the solutions we build and deliver operate at the
          highest quality.
        </span>
        <span
          className="absolute top-[859px] text-white font-Inter text-[220px] leading-[286px] uppercase text-nowrap animate-slow
          md:top-[542px] md:text-[100px] md:leading-[130px] md:animate-md_slow
        "
        >
          TEAM BRO. Specializes in creating global digital experience services.
          We offer proposals tailored to our clients&apos; needs and goals,
          ensuring that the solutions we build and deliver operate at the
          highest quality.
        </span>

        {/** content 하단부분 */}
        <div
          className="absolute bottom-[40px] right-[46px] text-[#FFFDFD] font-Inter
          md:bottom-[20px] md:right-[37px] md720:right-[27px]
        "
        >
          <span
            className="block text-[18px] leading-[19.8px] tracking-[0.36px]
           md:text-[12px] md:leading-[13.2px] md:tracking-normal
          "
          >
            ©MOBILETO
            <br />
            ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </>
  );
}
