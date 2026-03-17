import React from "react";

import Image from "next/image";

import { img_back, img_back2, img_back_middle } from "../assets";

const Background = () => {
  return (
    <div className="w-full absolute top-0">
      <div className="h-[765px] bg-sayyo_primary overflow-hidden md1920:h-[39.843vw] md720:h-[240px]">
        <Image src={img_back} alt="img_back" className="m-auto my-0 w-full" />
      </div>

      <div className="h-[478px] bg-sayyo_bg md1920:h-[24.895vw] md720:h-[132px]" />
      <div className="relative h-[1466px] bg-sayyo_wht md1920:h-[76.354vw] md720:h-[548px] overflow-hidden">
        <div
          className="absolute top-[352.4px] left-1/2 translate-x-[-50%] w-[2227.9px] 
        md1920:w-[116vw] md1920:top-[18.354vw]
        md720:w-[549.2px] md720:top-[163.06px]
        "
        >
          <Image src={img_back_middle} alt="img_back_mddile" />
        </div>
      </div>
      <div className="h-[618px] bg-sayyo_primary overflow-hidden md1920:h-[32.187vw] md720:h-[170px]">
        <Image src={img_back2} alt="img_back" className="m-auto my-0 w-full" />
      </div>
      <div className="h-[318px] bg-sayyo_wht md1920:h-[16.562vw] md720:h-[105px]" />
    </div>
  );
};

export default Background;
