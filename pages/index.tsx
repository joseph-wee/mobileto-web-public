import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { btn_instagram, btn_mail, logo_mobileto, logo_teambro } from "@/assets";

export default function Home() {
  const random = Math.floor(Math.random() * 2);

  return (
    <>
      <Head>
        <title>Mobileto</title>
        <meta name="description" content="repunch web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://sayyo-file-dev.s3.ap-southeast-1.amazonaws.com/testImage.png"
        />
        {/* <meta
          property="og:image"
          content="https://d1vnx0h70erqwv.cloudfront.net/_next/static/media/logo_mobileto.97fc625a.png"
        /> */}
        <meta property="og:title" content="Mobileto" />

        {/* //카카오톡에 링크를 전송하면 보이는 내용을 text로 설정 */}
        <meta property="og:description" content="og text" />
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
        {random ? (
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
        ) : (
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
          <div className="flex md:justify-between md:mb-[177px]">
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
                className="block mb-[4px] text-[18px] leaading-[19.8px] tracking-[0.36px]
              md:text-[12px] md:leading-[13.2px] md:tracking-[0.24px]
              "
              >
                <Link href="/page1"> SEOUL</Link>,{" "}
                <Link href="/page2">KOREA</Link>
              </span>
              <span
                className="block mb-[4px] text-[18px] leaading-[19.8px] tracking-[0.36px]
              md:mb-[10.47px] md:text-[12px] md:leading-[13.2px] md:tracking-[0.24px]
              "
              >
                <Link href="/page3">HOCHIMINH</Link>,{" "}
                <Link href="/page4">VIETNAM</Link>
              </span>
              <span
                className="block mb-[33px] text-[12px] leading-[13.2px] tracking-[0.24px]
              md:mb-[23px] md:text-[9px] md:leading-[9.9px] md:tracking-[0.18px]
              "
              >
                Powered by TEAM BRO.
              </span>
              <div className="flex gap-[10px]">
                <a href="https://www.instagram.com/mobileto.io" target="_blank">
                  <Image src={btn_instagram} alt="btn_instagram" />
                </a>

                <Image src={btn_mail} alt="btn_mail" />
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
          className="absolute bottom-[50px] right-[46px] text-[#FFFDFD] font-Inter
          md:bottom-[40px] md:right-[31px]
        "
        >
          <span
            className="block mb-[15px] text-[18px] leading-[19.8px] tracking-[0.36px]
          md:mb-[8px] md:text-[12px] md:leading-[13.2px] md:tracking-normal
          "
          >
            ©MOBILETO
            <br />
            ALL RIGHTS RESERVED.
          </span>

          <span
            className="block mb-[76.97px] text-[12px] leading-[15.6px]
          md:mb-[63.972px] md:text-[8px] md:leading-[10.4px] md:tracking-normal
          "
          >
            Comprised of four units, it embodies
            <br /> structure, modularity, simplicity
            <br /> leading to synergy, growth, flexibility,
            <br /> and effective execution.
          </span>

          <Image
            src={logo_teambro}
            alt="logo_teambro"
            className="absolute bottom-0 left-0 md:w-[37.718px] md:h-[36.972px]"
          />
          <strong
            className="absolute block left-[51px] bottom-[18.97px] font-Montserrat text-[18px] font-bold leading-[23.4px]
          md:left-[47.29px] md:bottom-[23.97px] md:text-[12px] md:leading-[15.6px]
          "
          >
            TEAM BRO.
          </strong>
        </div>
      </div>
    </>
  );
}
