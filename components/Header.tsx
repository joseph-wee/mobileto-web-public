import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { logo_sayyo_small } from '../assets';

/** bg color transparent Header */
const Header = () => {
  return (
    <header className="absolute z-20 w-[100%]">
      <div className="m-auto my-0 pl-[24px] pr-[20px] flex items-center justify-between max-w-[1280px] h-[78px] md720:h-[57px] ">
        <Link href="/sayyo">
          <Image
            src={logo_sayyo_small}
            alt="logo_sayyo_small"
            className="md720:w-[46.5px]"
          />
        </Link>
        <div className="flex items-center gap-[17px]">
          <button className="font-Roboto font-bold text-base text-sayyo_wht underline underline-offset-[5px] md720:text-[12px] md720:leading-[15.6px] md720:underline-offset-[3px]">
            Vietnamese
          </button>

          <div className="w-[1px] h-[13px] border-l-[1px] border-l-[#FFFFFF]/[.4] md720:h-[8.27px]" />
          <Link href="/sayyo/en/main">
            <button className="font-Roboto font-normal text-sayyo_wht md720:text-[12px] md720:leading-[15.6px]">
              English
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

/** bg color sayyo_primary Header */
const HeaderGreen = () => {
  const router = useRouter();
  const path = `/sayyo/en/` + router.pathname.substring(7);

  return (
    <header className="absolute z-20 w-[100%] bg-sayyo_primary ">
      <div className="m-auto my-0 pl-[24px] pr-[20px] flex items-center justify-between max-w-[1280px] h-[78px] md720:h-[57px]">
        <Link href="/sayyo">
          <Image
            src={logo_sayyo_small}
            alt="logo_sayyo_small"
            className="md720:w-[46.5px]"
          />
        </Link>
        <div className="flex items-center gap-[17px]">
          <button className="font-Roboto font-bold text-base text-sayyo_wht underline underline-offset-[5px] md720:text-[12px] md720:leading-[15.6px] md720:underline-offset-[3px]">
            Vietnamese
          </button>
          <div className="w-[1px] h-[13px] border-l-[1px] border-l-[#FFFFFF]/[.4] md720:h-[8.27px]" />
          <Link href={path}>
            <button className="font-Roboto font-normal text-sayyo_wht md720:text-[12px] md720:leading-[15.6px]">
              English
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

/** bg color transparent Header English */
const HeaderEn = () => {
  return (
    <header className="absolute z-20 w-[100%]">
      <div className="m-auto my-0 pl-[24px] pr-[20px] flex items-center justify-between max-w-[1280px] h-[78px] md720:h-[57px]">
        <Link href="/sayyo/en/main">
          <Image
            src={logo_sayyo_small}
            alt="logo_sayyo_small"
            className="md720:w-[46.5px]"
          />
        </Link>
        <div className="flex items-center gap-[17px]">
          <Link href="/sayyo">
            <button className="font-Roboto font-normal text-sayyo_wht md720:text-[12px] md720:leading-[15.6px]">
              Vietnamese
            </button>
          </Link>
          <div className="w-[1px] h-[13px] border-l-[1px] border-l-[#FFFFFF]/[.4] md720:h-[8.27px]" />
          <button className="font-Roboto font-bold text-base text-sayyo_wht underline underline-offset-[5px] md720:text-[12px] md720:leading-[15.6px] md720:underline-offset-[3px]">
            English
          </button>
        </div>
      </div>
    </header>
  );
};

/** bg color sayyo_primary Header Englsih */
const HeaderGreenEn = () => {
  const router = useRouter();
  const path = router.pathname.substring(9);

  return (
    <header className="absolute z-20 w-[100%] bg-sayyo_primary ">
      <div
        className="m-auto my-0 pl-[24px] pr-[20px] flex items-center justify-between max-w-[1280px] h-[78px] 
      
      md720:h-[57px] "
      >
        <Link href="/sayyo/en/main">
          <Image
            src={logo_sayyo_small}
            alt="logo_sayyo_small"
            className="md720:w-[46.5px]"
          />
        </Link>
        <div className="flex items-center gap-[17px]">
          <Link href={`/sayyo/${path}`}>
            <button className="font-Roboto font-normal text-sayyo_wht md720:text-[12px] md720:leading-[15.6px]">
              Vietnamese
            </button>
          </Link>
          <div className="w-[1px] h-[13px] border-l-[1px] border-l-[#FFFFFF]/[.4] md720:h-[8.27px]" />

          <button className="font-Roboto font-bold text-base text-sayyo_wht underline underline-offset-[5px] md720:text-[12px] md720:leading-[15.6px] md720:underline-offset-[3px]">
            English
          </button>
        </div>
      </div>
    </header>
  );
};

Header.Green = HeaderGreen;
Header.En = HeaderEn;
Header.GreenEn = HeaderGreenEn;

export default Header;
