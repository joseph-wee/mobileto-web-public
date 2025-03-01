import React, {
  useEffect,
  useState,
} from 'react';

import Image from 'next/image';
import Link from 'next/link';
import {
  usePathname,
  useRouter,
} from 'next/navigation';

import { apiGetDetailJob } from '@/api/api';
import {
  ic_document,
  ic_pay,
  ic_pin,
  ic_share_dark,
  logo_sayyo_white,
} from '@/assets';
import SayyoMeta from '@/components/SayyoMeta';

type apiRes = {};

const usePostPage = () => {
  const [share, setShare] = useState(false); // 공유하기 ticker 값
  const url = usePathname(); // 현재 url
  const [data, setData] = useState<any>();
  const [resCode, setResCode] = useState<string>("");
  const router = useRouter();

  const path = usePathname();

  /** url 복사 및 팝업 */
  const shareHandler = () => {
    if (share) {
      return;
    }
    navigator.clipboard.writeText(window.location.href);
    setShare(true);
    setTimeout(() => setShare(false), 2000);
  };

  /** 상세화면 호출 핸들러 실행 */
  useEffect(() => {
    url && apiHandler(Number(url.split("/")[3]));
  }, [url]);

  /** 상세화면 호출 핸들러 */
  const apiHandler = (id: number) => {
    apiGetDetailJob(id).then((res) => {
      // console.log(res.data);

      // console.log(res.data.urlImage);

      setData(res.data.data);
      setResCode(res.data.responseCode);
    });
  };

  // id에 해당하는 포스트가 없을 때,
  if (resCode === "404") {
    router.push("/sayyo");
    return <SayyoMeta />;
  }

  // 유효하지 않은 id 일 때,
  if (resCode === "500") {
    router.push("/sayyo");
    return <SayyoMeta />;
  }

  //informationModel.avatar
  //informationModel.name
  //experience.location

  /** informationModel.avatar 예외처리 함수 */
  const avatarHandler = (info: any) => {
    if (info?.avatar === null || info?.avatar === undefined) {
      return "";
    }
    return info.avatar;
  };

  /** informationModel.name 예외처리 함수 */
  const nameHandler = (info: any) => {
    if (info?.name === null || info?.name === undefined) {
      return "";
    }
    return info.name;
  };

  /** experience.location 예외처리 함수 */
  const locationHandler = (exp: any) => {
    if (exp?.location === null || exp?.location === undefined) {
      return "";
    }
    return exp.location;
  };

  return (
    <>
      <SayyoMeta />

      {/** data 받아오면 렌더링 */}
      {data && (
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
      transition-all z-10
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
                  {`${data?.title}`}
                </h1>
                <p className="mb-[12px] text-sayyo_l2 leading-[18.2px]">
                  {`${data.description}`}
                </p>
                <div className="mb-[12px] border-t-[1px] border-sayyo_bg_more border-dashed" />
                <div className="">
                  <div className="mb-[6px] flex items-center gap-[8px]">
                    <Image src={ic_pay} alt="ic_pay" />
                    <div className="text-sayyo_l2 text-[14px] leading-[16.8px]">
                      {`${data.price
                        .toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")}`}
                      đ
                    </div>
                  </div>
                  <div className="mb-[6px] flex items-center gap-[8px]">
                    <Image src={ic_document} alt="ic_document" />
                    <div className="flex items-center gap-[6px] text-sayyo_l2 text-[14px] leading-[16.8px]">
                      {data.gender !== "NOMATTER" && (
                        <>
                          <span>{data.gender === "MAN" ? "Man" : "Woman"}</span>
                          <div className="h-[10px] border-l-[1px] border-[#000000]/10" />
                        </>
                      )}

                      <span>{`${data.experience}`} year exp</span>
                      <div className="h-[10px] border-l-[1px] border-[#000000]/10" />
                      <span>{`${data.vacancy}`} people</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Image src={ic_pin} alt="ic_pin" />
                    <div className="text-sayyo_l2 text-[14px] leading-[16.8px]">
                      {`${data.location}`}
                    </div>
                  </div>
                </div>

                {/** image */}
                {data.urlImage && data.urlImage.length !== 0 ? (
                  <Link href={`/sayyo/appHub?${path.split("/")[3]}`}>
                    <div className="mt-[12px] flex gap-[1px] max-h-[217px] min-h-[96px] aspect-[736/217] rounded-[9px] cursor-pointer overflow-hidden">
                      {data.urlImage <= 3
                        ? data.urlImage.map((el: any, j: number) => {
                            return (
                              <div className="flex-1 relative" key={`abx${j}`}>
                                <Image
                                  src={el}
                                  alt="sample1"
                                  layout="fill"
                                  objectFit="cover"
                                  objectPosition="center"
                                />
                              </div>
                            );
                          })
                        : data.urlImage.map((el: any, j: number) => {
                            if (j >= 3) {
                              return;
                            }

                            if (j === 2) {
                              return (
                                <div className="flex-1 relative" key={`${j}as`}>
                                  <Image
                                    src={el}
                                    alt="sample2"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                  />
                                  <div className="absolute w-full h-full bg-opacity-40 bg-[#000000]"></div>
                                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18px] text-sayyo_wht leading-[22.5px]">
                                    +2
                                  </span>
                                </div>
                              );
                            }
                            return (
                              <div className="flex-1 relative" key={`abx${j}`}>
                                <Image
                                  src={el}
                                  alt="sample1"
                                  layout="fill"
                                  objectFit="cover"
                                  objectPosition="center"
                                />
                              </div>
                            );
                          })}
                    </div>
                  </Link>
                ) : (
                  ""
                )}
              </div>
              {/** applicnats */}
              {data.userApply.length === 0 ? (
                <Link href={`/sayyo/appHub?${path.split("/")[3]}`}>
                  <div className="mb-[20px] h-[142px] flex items-center justify-center bg-sayyo_wht cursor-pointer">
                    <div className="text-sayyo_subtext text-[16px] leading-[20.8px]">
                      No applicants yet
                    </div>
                  </div>
                </Link>
              ) : (
                <Link href={`/sayyo/appHub?${path.split("/")[3]}`}>
                  <div className="mb-[20px] pt-[9.5px] min-h-[167px] box-border bg-sayyo_wht cursor-pointer">
                    <div className="flex justify-between items-center mb-[19px]">
                      <div className="flex pl-[20px] text-[16px] font-bold leading-[20.8px]">
                        Aplicants&nbsp;
                        <span className="font-normal">{`${data.userApply.length}`}</span>
                      </div>
                      <div className="pr-[21px] text-sayyo_subtext text-[12px] leading-[15.6px]">
                        {data.userApply.length > 11 && (
                          <span className="md767::hidden">More</span>
                        )}
                        {data.userApply.length > 10 && (
                          <span className="hidden md767:inline md699:hidden">
                            More
                          </span>
                        )}
                        {data.userApply.length > 9 && (
                          <span className="hidden md699:inline md631:hidden">
                            More
                          </span>
                        )}
                        {data.userApply.length > 8 && (
                          <span className="hidden md631:inline md563:hidden">
                            More
                          </span>
                        )}
                        {data.userApply.length > 7 && (
                          <span className="hidden md563:inline md495:hidden">
                            More
                          </span>
                        )}
                        {data.userApply.length > 6 && (
                          <span className="hidden md495:inline md427:hidden">
                            More
                          </span>
                        )}
                        {data.userApply.length > 5 && (
                          <span className="hidden md427:inline">More</span>
                        )}
                      </div>
                    </div>
                    {/** overflow hidden */}
                    <div
                      className="grid gap-[12px] justify-between px-[16px] pb-[22px]
          grid-cols-11
          md767:grid-cols-10
          md699:grid-cols-9
          md631:grid-cols-8
          md563:grid-cols-7
          md495:grid-cols-6
          md427:grid-cols-5
          "
                    >
                      {/** 전체 너비 */}
                      {data.userApply.map((i: any, j: number) => {
                        if (j >= 11) {
                          return;
                        }
                        return (
                          !(data.userApply.length > 11 && j > 9) && (
                            <div key={`${j}546`} className="md767:hidden">
                              <div>
                                <Image
                                  src={avatarHandler(i.informationModel)}
                                  alt="sample"
                                  width={56}
                                  height={56}
                                  className="rounded-full mb-[8.42px] w-[56px] h-[56px]
                      
                      "
                                />
                                <div className="mb-[1px] text-center text-sayyo_l2 text-[12px] leading-[15.6px]">
                                  {`${nameHandler(i.informationModel)}`}
                                </div>
                                <div className="text-center text-sayyo_subtext text-[12px] leading-[15.6px]">
                                  {`${locationHandler(i.experience)}`}
                                </div>
                              </div>
                            </div>
                          )
                        );
                      })}
                      {data.userApply.length > 11 && (
                        <div className="md767:hidden">
                          <div
                            className={`flex items-center justify-center rounded-full mb-[8.42px] w-[56px] h-[56px] bg-sayyo_subtext text-sayyo_wht text-[16px] leading-[16px]
       
                    `}
                          >
                            +{data.userApply.length - 10}
                          </div>
                          <div className="text-centerr text-sayyo_l2 text-[12px] leading-[15.6px]">
                            More
                          </div>
                        </div>
                      )}
                      {/** 767 이하 */}
                      {data.userApply.map((i: any, j: number) => {
                        if (j >= 10) {
                          return;
                        }
                        return (
                          !(data.userApply.length > 10 && j > 8) && (
                            <div
                              key={`${j}546`}
                              className="hidden md767:block md699:hidden"
                            >
                              <div>
                                <Image
                                  src={avatarHandler(i.informationModel)}
                                  alt="sample"
                                  width={56}
                                  height={56}
                                  className="rounded-full mb-[8.42px] w-[56px] h-[56px]
                      
                      "
                                />
                                <div className="mb-[1px] text-center text-sayyo_l2 text-[12px] leading-[15.6px]">
                                  {`${nameHandler(i.informationModel)}`}
                                </div>
                                <div className="text-center text-sayyo_subtext text-[12px] leading-[15.6px]">
                                  {`${locationHandler(i.experience)}`}
                                </div>
                              </div>
                            </div>
                          )
                        );
                      })}
                      {data.userApply.length > 10 && (
                        <div className="hidden md767:block md699:hidden">
                          <div
                            className={`flex items-center justify-center rounded-full mb-[8.42px] w-[56px] h-[56px] bg-sayyo_subtext text-sayyo_wht text-[16px] leading-[16px]
       
                    `}
                          >
                            +{data.userApply.length - 9}
                          </div>
                          <div className="flex items-center justify-center text-sayyo_l2 text-[12px] leading-[15.6px]">
                            More
                          </div>
                        </div>
                      )}
                      {/** 699 이하 */}
                      {data.userApply.map((i: any, j: number) => {
                        if (j >= 9) {
                          return;
                        }
                        return (
                          !(data.userApply.length > 9 && j > 7) && (
                            <div
                              key={`${j}546`}
                              className="hidden md699:block md631:hidden"
                            >
                              <div>
                                <Image
                                  src={avatarHandler(i.informationModel)}
                                  alt="sample"
                                  width={56}
                                  height={56}
                                  className="rounded-full mb-[8.42px] w-[56px] h-[56px]
                      
                      "
                                />
                                <div className="mb-[1px] text-center text-sayyo_l2 text-[12px] leading-[15.6px]">
                                  {`${nameHandler(i.informationModel)}`}
                                </div>
                                <div className="text-center text-sayyo_subtext text-[12px] leading-[15.6px]">
                                  {`${locationHandler(i.experience)}`}
                                </div>
                              </div>
                            </div>
                          )
                        );
                      })}
                      {data.userApply.length > 9 && (
                        <div className="hidden md699:block md631:hidden">
                          <div
                            className={`flex items-center justify-center rounded-full mb-[8.42px] w-[56px] h-[56px] bg-sayyo_subtext text-sayyo_wht text-[16px] leading-[16px]
       
                    `}
                          >
                            +{data.userApply.length - 8}
                          </div>
                          <div className="flex items-center justify-center text-sayyo_l2 text-[12px] leading-[15.6px]">
                            More
                          </div>
                        </div>
                      )}
                      {/** 631 이하 */}
                      {data.userApply.map((i: any, j: number) => {
                        if (j >= 8) {
                          return;
                        }
                        return (
                          !(data.userApply.length > 8 && j > 6) && (
                            <div
                              key={`${j}546`}
                              className="hidden md631:block md563:hidden"
                            >
                              <div>
                                <Image
                                  src={avatarHandler(i.informationModel)}
                                  alt="sample"
                                  width={56}
                                  height={56}
                                  className="rounded-full mb-[8.42px] w-[56px] h-[56px]
                      
                      "
                                />
                                <div className="mb-[1px] text-center text-sayyo_l2 text-[12px] leading-[15.6px]">
                                  {`${nameHandler(i.informationModel)}`}
                                </div>
                                <div className="text-center text-sayyo_subtext text-[12px] leading-[15.6px]">
                                  {`${locationHandler(i.experience)}`}
                                </div>
                              </div>
                            </div>
                          )
                        );
                      })}
                      {data.userApply.length > 8 && (
                        <div className="hidden md631:block md563:hidden">
                          <div
                            className={`flex items-center justify-center rounded-full mb-[8.42px] w-[56px] h-[56px] bg-sayyo_subtext text-sayyo_wht text-[16px] leading-[16px]
       
                    `}
                          >
                            +{data.userApply.length - 7}
                          </div>
                          <div className="flex items-center justify-center text-sayyo_l2 text-[12px] leading-[15.6px]">
                            More
                          </div>
                        </div>
                      )}
                      {/** 563 이하 */}
                      {data.userApply.map((i: any, j: number) => {
                        if (j >= 7) {
                          return;
                        }
                        return (
                          !(data.userApply.length > 7 && j > 5) && (
                            <div
                              key={`${j}546`}
                              className="hidden md563:block md495:hidden"
                            >
                              <div>
                                <Image
                                  src={avatarHandler(i.informationModel)}
                                  alt="sample"
                                  width={56}
                                  height={56}
                                  className="rounded-full mb-[8.42px] w-[56px] h-[56px]
                      
                      "
                                />
                                <div className="mb-[1px] text-center text-sayyo_l2 text-[12px] leading-[15.6px]">
                                  {`${nameHandler(i.informationModel)}`}
                                </div>
                                <div className="text-center text-sayyo_subtext text-[12px] leading-[15.6px]">
                                  {`${locationHandler(i.experience)}`}
                                </div>
                              </div>
                            </div>
                          )
                        );
                      })}
                      {data.userApply.length > 7 && (
                        <div className="hidden md563:block md495:hidden">
                          <div
                            className={`flex items-center justify-center rounded-full mb-[8.42px] w-[56px] h-[56px] bg-sayyo_subtext text-sayyo_wht text-[16px] leading-[16px]
       
                    `}
                          >
                            +{data.userApply.length - 6}
                          </div>
                          <div className="flex items-center justify-center text-sayyo_l2 text-[12px] leading-[15.6px]">
                            More
                          </div>
                        </div>
                      )}
                      {/** 495 이하 */}
                      {data.userApply.map((i: any, j: number) => {
                        if (j >= 6) {
                          return;
                        }
                        return (
                          !(data.userApply.length > 6 && j > 4) && (
                            <div
                              key={`${j}546`}
                              className="hidden md495:block md427:hidden"
                            >
                              <div>
                                <Image
                                  src={avatarHandler(i.informationModel)}
                                  alt="sample"
                                  width={56}
                                  height={56}
                                  className="rounded-full mb-[8.42px] w-[56px] h-[56px]
                      
                      "
                                />
                                <div className="mb-[1px] text-center text-sayyo_l2 text-[12px] leading-[15.6px]">
                                  {`${nameHandler(i.informationModel)}`}
                                </div>
                                <div className="text-center text-sayyo_subtext text-[12px] leading-[15.6px]">
                                  {`${locationHandler(i.experience)}`}
                                </div>
                              </div>
                            </div>
                          )
                        );
                      })}
                      {data.userApply.length > 6 && (
                        <div className="hidden md495:block md427:hidden">
                          <div
                            className={`flex items-center justify-center rounded-full mb-[8.42px] w-[56px] h-[56px] bg-sayyo_subtext text-sayyo_wht text-[16px] leading-[16px]
       
                    `}
                          >
                            +{data.userApply.length - 5}
                          </div>
                          <div className="flex items-center justify-center text-sayyo_l2 text-[12px] leading-[15.6px]">
                            More
                          </div>
                        </div>
                      )}
                      {/** 427 이하 */}
                      {data.userApply.map((i: any, j: number) => {
                        if (j >= 5) {
                          return;
                        }
                        return (
                          !(data.userApply.length > 5 && j > 3) && (
                            <div key={`${j}546`} className="hidden md427:block">
                              <div>
                                <Image
                                  src={avatarHandler(i.informationModel)}
                                  alt="sample"
                                  width={56}
                                  height={56}
                                  className="rounded-full mb-[8.42px] w-[56px] h-[56px]
                      
                      "
                                />
                                <div className="mb-[1px] text-center text-sayyo_l2 text-[12px] leading-[15.6px]">
                                  {`${nameHandler(i.informationModel)}`}
                                </div>
                                <div className="text-center text-sayyo_subtext text-[12px] leading-[15.6px]">
                                  {`${locationHandler(i.experience)}`}
                                </div>
                              </div>
                            </div>
                          )
                        );
                      })}
                      {data.userApply.length > 5 && (
                        <div className="hidden md427:block">
                          <div
                            className={`flex items-center justify-center rounded-full mb-[8.42px] w-[56px] h-[56px] bg-sayyo_subtext text-sayyo_wht text-[16px] leading-[16px]
       
                    `}
                          >
                            +{data.userApply.length - 4}
                          </div>
                          <div className="flex items-center justify-center text-sayyo_l2 text-[12px] leading-[15.6px]">
                            More
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              )}
              {/** 하단 버튼 */}
            </div>
            <div
              className="p-[16px] bottom-0 max-w-[768px] w-full bg-sayyo_wht border-t-[1px] border-t-[#DEE6EC]
        
        "
            >
              <Link href={`/sayyo/appHub?${path.split("/")[3]}`}>
                <button className="w-full h-[48px] text-sayyo_wht text-[14px] font-bold leading-[18.2px] rounded-[8px] bg-sayyo_primary">
                  Apply
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default usePostPage;
