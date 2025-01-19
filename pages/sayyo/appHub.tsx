import React from "react";

import Image from "next/image";

import {
  icon_appStore,
  icon_googlePlay,
  logo_sayyo,
  text_app_store,
  text_googlePlay_samll,
} from "@/assets";

const apphub = () => {
  return (
    <div className="pt-[61px] pb-[40px] flex flex-col justify-between items-center bg-sayyo_primary h-[100vh]">
      <div>
        <div className="mx-auto justify-center mb-[14.5px] w-[135px] h-[64px]">
          <Image src={logo_sayyo} alt="logo" />
        </div>
        <p className="mx-auto mb-[76px] w-[188px] text-center text-sayyo_wht font-Sriracha text-[13px] leading-[15.6px] tracking-[-0.26px]">
          Hãy kết nối với những người giải quyết vấn đề tại địa phương!
        </p>
        {/** button google play */}
        <div
          className="relative mb-[10px] pl-[29px] items-center flex w-[211px] h-[78px] rounded-[8px] bg-sayyo_wht
      shadow-[0px_4.972px_24.861px_0px_rgba(0,0,0,0.25)]"
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
        </div>

        {/** button app store */}
        <div
          className="relative pl-[28px] items-center flex w-[211px] h-[78px] rounded-[8px] bg-sayyo_wht
      shadow-[0px_4.972px_24.861px_0px_rgba(0,0,0,0.25)]"
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
        </div>

        {/* <Image src={btn_img_googlePlay} alt="btn_googlePlay" width={260} /> */}

        {/* <Image src={btn_img_appStore} alt="btn_appStore" width={260} /> */}
      </div>
      <p className="text-sayyo_wht font-Roboto text-[13px] leading-[16.9px]">
        2024 Sayyo All Rights Reserved.
      </p>
    </div>
  );
};

export default apphub;
