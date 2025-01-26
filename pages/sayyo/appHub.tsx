import React, { useEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  icon_appStore,
  icon_googlePlay,
  logo_sayyo,
  text_app_store,
  text_googlePlay_samll,
} from "@/assets";

const useAppHub = () => {
  const ref = useRef<any>();
  const timerRef = useRef<any>(null);

  // TODO: 나중에 앱링크, 유니버셜링크 받아서 브라우저별 세팅 해야 함

  // TODO: 주소 예외처리 해놓기
  // 앱스토어, 애플 스토어 스킴으로 할지 아직 미정
  /** android link */
  const androidLink = () => {
    window.location.href = `sayyo://post/detail?id=${window.location.search.slice(
      1
    )}`;

    timerRef.current = setTimeout(() => {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.teambro.sayyo";
    }, 2000);
  };

  /** ios link */
  const iosLink = () => {
    window.location.href = `sayyo://post/detail?id=${window.location.search.slice(
      1
    )}`;

    // timerRef.current = setTimeout(() => {
    //   window.location.href = "itms-apps://itunes.apple.com/app/6504123159";
    // }, 2000);
    timerRef.current = setTimeout(() => {
      window.location.href = "https://apps.apple.com/app/sayyo/id6504123159";
    }, 2000);
  };

  /** link Handler */
  const linkHandelr = () => {
    window.focus();
    let os = "android";
    const osInfo = navigator.userAgent;
    const iosDevice = ["iPhone", "iPad", "iPod", "Mac"];

    for (const el of iosDevice) {
      if (osInfo.includes(el)) {
        os = "ios";
      }
    }

    if (os === "android") {
      androidLink();
      return;
    }
    iosLink();
  };

  /** 렌더링시 실행 */
  useEffect(() => {
    linkHandelr();
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  const clearTimeoutHandler = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div
      className="pt-[61px] pb-[40px] flex flex-col justify-between items-center bg-sayyo_primary h-[100vh]"
      tabIndex={0}
      ref={ref}
      onBlur={() => clearTimeoutHandler()}
    >
      <div>
        <Link href="/sayyo">
          <div className="mx-auto justify-center mb-[14.5px] w-[135px] h-[64px]">
            <Image src={logo_sayyo} alt="logo" />
          </div>
        </Link>
        <p className="mx-auto mb-[76px] w-[188px] text-center text-sayyo_wht font-Sriracha text-[13px] leading-[15.6px] tracking-[-0.26px]">
          Hãy kết nối với những người giải quyết vấn đề tại địa phương!
        </p>
        {/** button google play */}
        <button
          className="relative mb-[10px] pl-[29px] items-center flex w-[211px] h-[78px] rounded-[8px] bg-sayyo_wht
      shadow-[0px_4.972px_24.861px_0px_rgba(0,0,0,0.25)]"
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.teambro.sayyo"
            )
          }
        >
          <Image
            src={icon_googlePlay}
            alt="icon_google"
            width={36.252}
            height={40}
          />

          <Image
            src={text_googlePlay_samll}
            alt="text_google_play"
            width={103.367}
            className="absolute left-[80px] top-[24px]"
          />
          <span className="absolute left-[80px] top-[45px] font-Roboto text-[10.478px] leading-[12.574px] tracking-[-0.21px]">
            Download app
          </span>
        </button>

        {/** button app store */}
        <button
          className="relative pl-[28px] items-center flex w-[211px] h-[78px] rounded-[8px] bg-sayyo_wht
      shadow-[0px_4.972px_24.861px_0px_rgba(0,0,0,0.25)]"
          onClick={() =>
            window.open("https://apps.apple.com/app/sayyo/id6504123159")
          }
        >
          <Image
            src={icon_appStore}
            alt="icon_appStore"
            width={39.113}
            height={38}
          />

          <Image
            src={text_app_store}
            alt="text_app_store"
            width={90}
            className="absolute left-[80px] top-[24px]"
          />
          <span className="absolute left-[80px] top-[45px] font-Roboto text-[10.478px] leading-[12.574px] tracking-[-0.21px]">
            Download app
          </span>
        </button>

        {/* <Image src={btn_img_googlePlay} alt="btn_googlePlay" width={260} /> */}

        {/* <Image src={btn_img_appStore} alt="btn_appStore" width={260} /> */}
      </div>
      <p className="text-sayyo_wht font-Roboto text-[13px] leading-[16.9px]">
        2024 Sayyo All Rights Reserved.
      </p>
    </div>
  );
};

export default useAppHub;
