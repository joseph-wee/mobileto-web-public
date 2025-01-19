import React, { useEffect, useState } from "react";

import Image from "next/image";

import {
  ic_document,
  ic_pay,
  ic_pin,
  ic_share_dark,
  img_sample1,
  logo_sayyo_white,
} from "@/assets";

const useTest5 = () => {
  const [share, setShare] = useState(false); // 공유하기 ticker 값

  // TODO: 나중에 앱링크, 유니버셜링크 받아서 브라우저별 세팅 해야 함.
  const [path, setPath] = useState(
    "https://play.google.com/store/apps/details?id=com.teambro.sayyo"
  ); // 링크 주소

  /** url 복사 및 팝업 */
  const shareHandler = () => {
    if (share) {
      return;
    }
    navigator.clipboard.writeText(path);
    setShare(true);
    setTimeout(() => setShare(false), 2000);
  };

  /** 사용자 ios일 경우 세팅 */
  const iosSetter = () => {
    const osInfo = navigator.userAgent;
    const iosDevice = ["iPhone", "iPad", "iPod", "Mac"];

    for (const el of iosDevice) {
      if (osInfo.includes(el)) {
        // app store 에 올라오면 링크 세팅
        // setPath("ios");
        return;
      }
    }
  };

  useEffect(() => {
    iosSetter();
  }, []);

  return (
    <div className=" bg-[#F2F6F8] font-Roboto">
      <div
        className="flex flex-col min-h-[100vh] max-w-[768px] mx-auto border-x-[1px] border-x-[#DEE6EC] box-content
      md768:border-none
      "
      >
        {/** ticker */}
        <div
          className={
            share
              ? `opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center rounded-[8px] bg-[#000000]/70
        h-[59px] w-[239px]
        text-[16px] leading-[20.8px] text-sayyo_wht
        transition-all
          `
              : `opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center rounded-[8px] bg-[#000000]/70
        h-[59px] w-[239px]
        text-[16px] leading-[20.8px] text-sayyo_wht transition-all`
          }
        >
          Share url copied successfully
        </div>
        {/** 헤더 */}
        <header className="h-[56px] pl-[16px] pr-[19px] flex justify-between items-center bg-sayyo_wht">
          <Image
            src={logo_sayyo_white}
            alt="logo_sayyo_white"
            className="w-[58px] h-[26px]"
          />
          <Image
            src={ic_share_dark}
            alt="ic_share_dark"
            onClick={() => shareHandler()}
            className="w-[24px] h-[24px] cursor-pointer"
          />
        </header>
        {/** 내용 */}
        <div className="flex-1">
          <div className="mb-[20px] p-[16px] bg-sayyo_wht">
            <h1 className="mb-[8px] text-sayyo_l2 text-[22px] font-bold leading-[28.6px]">
              vietnamese language teacher need
            </h1>
            <p className="mb-[12px] text-sayyo_l2 leading-[18.2px]">
              vietnamese language teacher needvietnamese language teacher
              needvietnamese language teacher needvietnamese language teacher
              need
            </p>
            <div className="mb-[12px] border-t-[1px] border-sayyo_bg_more border-dashed" />
            <div className="mb-[12px]">
              <div className="mb-[6px] flex items-center gap-[8px]">
                <Image src={ic_pay} alt="ic_pay" />
                <div className="text-sayyo_l2 text-[14px] leading-[16.8px]">
                  3.000.000đ
                </div>
              </div>
              <div className="mb-[6px] flex items-center gap-[8px]">
                <Image src={ic_document} alt="ic_document" />
                <div className="flex items-center gap-[6px] text-sayyo_l2 text-[14px] leading-[16.8px]">
                  <span>Man</span>
                  <div className="h-[10px] border-l-[1px] border-[#000000]/10" />
                  <span>12 year exp</span>
                  <div className="h-[10px] border-l-[1px] border-[#000000]/10" />
                  <span>2 people</span>
                </div>
              </div>
              <div className="flex items-center gap-[8px]">
                <Image src={ic_pin} alt="ic_pin" />
                <div className="text-sayyo_l2 text-[14px] leading-[16.8px]">
                  Bến Nghé, Quận1
                </div>
              </div>
            </div>

            <div
              className="flex gap-[1px] max-h-[217px] min-h-[96px] aspect-[736/217] rounded-[9px] cursor-pointer overflow-hidden"
              onClick={() => window.open(path)}
            >
              <div className="flex-1 relative ">
                <Image
                  src={img_sample1}
                  alt="sample1"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
          </div>
          {/** applicnats */}
          <div
            className="mb-[20px] h-[142px] flex items-center justify-center bg-sayyo_wht cursor-pointer"
            onClick={() => window.open(path)}
          >
            <div className="text-sayyo_subtext text-[16px] leading-[20.8px]">
              No applicants yet
            </div>
          </div>
          {/** 하단 버튼 */}
        </div>
        <div
          className="p-[16px] bottom-0 max-w-[768px] w-full bg-sayyo_wht border-t-[1px] border-t-[#DEE6EC]
          
          "
        >
          <button
            className="w-full h-[48px] text-sayyo_wht text-[14px] font-bold leading-[18.2px] rounded-[8px] bg-sayyo_primary"
            onClick={() => window.open(path)}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default useTest5;
