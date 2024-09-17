import Image from "next/image";

import SayyoMeta from "@/components/SayyoMeta";

import {
  icon_app_store,
  icon_google_play,
  icon_hand,
  icon_help,
  icon_language,
  icon_music,
  icon_people,
  icon_person,
  icon_recruit,
  icon_sale,
  icon_sports,
  img_chat,
  img_discover,
  img_man,
  img_place,
  img_post,
  img_profile,
  img_qr_and,
  img_qr_ios,
  img_woman,
  logo_sayyo,
  logo_sayyo_medium,
  text_app_store,
  text_google_play,
} from "../../../assets";
import { Background, Footer, Header } from "../../../components";

export default function Home() {
  return (
    <>
      <SayyoMeta />
      <div className="relative pb-[264px] md720:pb-[173px] tall:pb-0">
        <Header.En />
        <Background />
        {/** content */}
        <div className="relative z-10 mx-auto top-0 pt-[200px] max-w-[1280px] md1920:pt-[10.42vw] md720:max-w-[328px] md720:pt-[74px]">
          {/** main logo, introduce */}
          <Image
            src={logo_sayyo}
            alt="logo_sayyo"
            className="m-auto my-0 mb-[35.58px] md1920:mb-[2.061vw] md1920:w-[19.38vw] md720:mb-[9.55px]
          md720:w-[101px] md720:h-[48px]"
          />
          <h3 className="mb-[140px] text-center font-Sriracha text-[38px] text-sayyo_wht leading-[45.6px] md1920:mb-[7.291vw] md1920:text-[1.979vw] md1920:leading-[2.375vw] md720:mb-[48px] md720:text-[11px] md720:leading-[13.2px]">
            Let’s connect with
            <br />
            local problem solvers!
          </h3>
          {/** app qr code */}
          <div className="m-auto mb-[89px] pl-[86px] pr-[116.9px] w-[1180px] h-[179px] flex items-center bg-sayyo_wht rounded-[25px] shadow-[0px_4.972px_24.861px_0px_rgba(0,0,0,0.25)] md1920:mb-[4.635vw] md1920:pl-[4.479vw] md1920:pr-[6.089vw] md1920:w-[61.458vw] md1920:h-[9.322vw] md1920:rounded-[1.302vw] md720:pl-[26.56px] md720:pr-[26.1px] md720:w-[328px] md720:h-[49.6px] md720:rounded-[6.89px] md720:mb-[24.66px]">
            <Image
              src={icon_google_play}
              alt="icon_google_play"
              className="mr-[21.18px] md1920:mr-[1.103vw] md1920:w-[2.447vw] md720:mr-[6.03px] md720:w-[12.81px] md720:h-[14.13px]"
            />
            <Image
              src={text_google_play}
              alt="text_google_play"
              className="mr-[98.73px] md1920:mr-[5.142vw] md1920:w-[10.885vw] md720:mr-[26.44px] md720:w-[57.7px] md720:h-[9.69px]"
            />
            <Image
              src={img_qr_and}
              alt="icon_qr_code"
              className="mr-[59.9px] w-[69.1px] h-[69.1px] md1920:mr-[3.119vw] md1920:w-[3.645vw] md1920:h-[3.645vw] md720:mr-[13.98px] md720:w-[24.36px] md720:h-[24.36px]"
            />
            <div className="w-[1px] h-[94px] border-l-[1px] border-l-sayyo_bg_more mr-[73.5px] md1920:mr-[3.828vw] md1920:h-[4.895vw] md720:mr-[20.37px] md720:h-[26px]" />
            <Image
              src={icon_app_store}
              alt="icon_app_store"
              className="mr-[26px] md1920:mr-[1.354vw] md1920:w-[2.76vw] md720:mr-[7.2px] md720:w-[14.54px] md720:h-[14.39px]"
            />
            <Image
              src={text_app_store}
              alt="text_app_store"
              className="mr-[65.06px] md1920:mr-[3.388vw] md1920:w-[9.739vw] md720:mr-[15.07px] md720:w-[51.79px] md720:h-[10.39px]"
            />
            <Image
              src={img_qr_ios}
              alt="icon_qr_code"
              className="w-[69.1px] h-[69.1px] md1920:w-[3.645vw] md1920:h-[3.645vw] md720:w-[25.06px] md720:h-[25.05px]"
            />
          </div>
          {/** man, woman */}
          <div className="relative mx-auto mb-[238px] pt-[48px] max-w-[1180px] md1920:mb-[12.396vw] md1920:pt-[2.5vw] md1920:w-[61.458vw] md720:mb-[55.34px] md720:pt-[7.18px]">
            <Image
              src={img_man}
              alt="img_man"
              className="absolute top-[17px] left-[36px] md1920:top-[0.885vw] md1920:left-[1.875vw] md1920:w-[10.677vw] md720:w-[55.68px] md720:h-[47.51px] md720:left-0 md720:top-[4.71px]"
            />
            <Image
              src={img_place}
              alt="img_place"
              className="absolute top-[160px] left-[208px] md1920:top-[8.333vw] md1920:left-[10.833vw] md1920:w-[4.27vw] md720:w-[22.7px] md720:h-[22.7px] md720:top-[44.33px] md720:left-[47.65px]"
            />
            <Image
              src={img_woman}
              alt="img_man"
              className="absolute top-0 right-0 md1920:w-[14.479vw] md720:w-[75.69px] md720:h-[63.16px]"
            />

            <p className="text-sayyo_l2 text-center font-Inter text-[28px] leading-[36.4px] md1920:text-[1.458vw] md1920:leading-[1.896vw] md720:text-[11px] md720:leading-[14.3px] md760:text-[11px]  md720:mb-[2.09px]">
              To my local people
            </p>
            <strong className="block mb-[9px] text-sayyo_l2 text-center font-Sriracha text-[58px] font-normal leading-[75.4px] md1920:mb-[0.469vw] md1920:text-[3.021vw] md1920:leading-[3.927vw] md720:text-[16px] md720:leading-[20.8px] md720:mb-[2.27px]">
              Ask to do, do for them
            </strong>
            <p className="text-sayyo_subtext text-center font-Inter text-[18px] font-medium leading-[23.4px]  md720:text-[11px] md1920_970:text-[0.938vw] md1920_970:leading-[1.219vw] md970:text-[11px] md720:font-normal md720:leading-[14.3px]">
              Share your talents
            </p>
          </div>
          {/** free */}
          <strong className="block text-sayyo_l2 text-center font-Sriracha text-[58px] leading-[75.4px] tracking-[-1.16px] md1920:text-[3.021vw] md1920:leading-[3.927vw] md1920:tracking-[-0.06vw] md720:mb-[1.16px] md720:text-[16px] md720:leading-[20.8px] md720:tracking-[-0.32px]">
            Free
          </strong>
          <p className="mb-[64px] text-sayyo_subtext text-center font-Inter text-[34px] font-medium leading-[44.2px] md1920:mb-[3.333vw] md1920:text-[1.771vw] md1920:leading-[2.302vw] md720:mb-[17.9px] md720:text-[9.419px] md720:leading-[12.245px] md720:tracking-[-0.188px]">
            Connect with your neighbors
          </p>
          <div
            className="mb-[222px] flex m-auto my-0 pt-[52px] pl-[82px] w-[1180px] h-[488px] box-border rounded-[24px] border-[1px] border-sayyo_bg_more shadow-[0_20px_20px_rgba(0,0,0,0.10)] bg-sayyo_wht
        md1920:mb-[11.563vw] md1920:pt-[2.708vw] md1920:pl-[4.271vw] md1920:w-[61.458vw] md1920:h-[25.417vw] md1920:rounded-[1.25vw]
        
        md720:mb-[88.83px] md720:pt-[14.43px] md720:pl-[16.4px] pr-[16px] md720:w-[328px] md720:h-[184px] md720:rounded-[6.649px]"
          >
            <div className="flex flex-col items-center mr-[52px] md1920:mr-[2.708vw] md720:mr-[10px]">
              <Image
                src={icon_person}
                alt="icon_person"
                className="mb-[46px] md1920:mb-[2.396vw] md1920:w-[7.917vw] md720:mb-[12.46px] md720:w-[42.108px] md720:h-[42.108px]"
              />
              <p
                className="
            mb-[13px] text-sayyo_l2 text-center font-Inter text-[28px] font-bold leading-[36.4px] tracking-[-0.56px]
            md1920:mb-[0.677vw] md1920:text-[1.458vw] md1920:leading-[1.896vw] md1920:tracking-[-0.029vw]
            md720:mb-[10.94px] md720:text-[11px] md720:leading-[14.3px] md720:tracking-[-0.22px]"
              >
                Do me
                <br />a favor
              </p>
              <div
                className="w-[271px] text-sayyo_subtext text-center font-Inter text-[20px] font-medium leading-[26px] tracking-[-0.4px]
            md1920:w-[14.115vw] md1920_970:text-[1.042vw] md1920:leading-[1.354vw] md1920:tracking-[-0.021vw]
            md970:text-[10px]
            md720:w-[86px] md720:text-[10px] md720:leading-[13px] md720:tracking-[-0.2px]"
              >
                Ask your neighbors about things you want to learn about or need
                help with.
              </div>
            </div>
            <div
              className="mr-[53px] w-[1px] h-[391px] border-l-[1px] border-l-sayyo_bg_more
          md1920:mr-[2.76vw] md1920:h-[20.365vw]
          md720:mr-[12px] md720:h-[146px]"
            />
            <div
              className="flex flex-col items-center mr-[58px]
          md1920:mr-[3.021vw]
          md720:mr-[13px]"
            >
              <Image
                src={icon_hand}
                alt="icon_person"
                className="mb-[46px] md1920:mb-[2.396vw] md1920:w-[7.917vw] md720:mb-[12.46px] md720:w-[42.108px] md720:h-[42.108px]"
              />
              <p
                className="
            mb-[13px] text-sayyo_l2 text-center font-Inter text-[28px] font-bold leading-[36.4px] tracking-[-0.56px]
            md1920:mb-[0.677vw] md1920:text-[1.458vw] md1920:leading-[1.896vw] md1920:tracking-[-0.029vw]
            md720:mb-[10.94px] md720:text-[11px] md720:leading-[14.3px] md720:tracking-[-0.22px]"
              >
                Do it
                <br />
                for neighbor
              </p>
              <div
                className="w-[271px] text-sayyo_subtext text-center font-Inter text-[20px] font-medium leading-[26px] tracking-[-0.4px] 
            md1920:w-[14.115vw] md1920_970:text-[1.042vw] md1920:leading-[1.354vw] md1920:tracking-[-0.021vw]
            md970:text-[10px]
            md720:w-[83px] md720:text-[10px] md720:leading-[13px] md720:tracking-[-0.2px]"
              >
                Help your neighbors around you do what they need and make money
              </div>
            </div>
            <div
              className="mr-[53px] w-[1px] h-[391px] border-l-[1px] border-l-sayyo_bg_more
          md1920:mr-[2.76vw] md1920:h-[20.365vw]
          md720:mr-[15.6px] md720:h-[146px]"
            />
            <div className="flex flex-col items-center">
              <Image
                src={icon_people}
                alt="icon_person"
                className="mb-[46px] md1920:mb-[2.396vw] md1920:w-[7.917vw] md720:mb-[12.46px] md720:w-[42.108px] md720:h-[42.108px]"
              />
              <p
                className="mb-[13px] text-sayyo_l2 text-center font-Inter text-[28px] font-bold leading-[36.4px] tracking-[-0.56px]
            md1920:mb-[0.677vw] md1920:text-[1.458vw] md1920:leading-[1.896vw] md1920:tracking-[-0.029vw]
            md720:mb-[10.94px] md720:text-[11px] md720:leading-[14.3px] md720:tracking-[-0.22px]"
              >
                Let neighbors
                <br />
                know you
              </p>
              <div
                className="w-[271px] text-sayyo_subtext text-center font-Inter text-[20px] font-medium leading-[26px] tracking-[-0.4px]
            md1920:w-[14.115vw] md1920_970:text-[1.042vw] md1920:leading-[1.354vw] md1920:tracking-[-0.021vw]
            md970:text-[10px]
            md720:w-[75px] md720:text-[10px] md720:leading-[13px] md720:tracking-[-0.2px]"
              >
                Let your neighbors know about your talents and make money
              </div>
            </div>
          </div>
          {/** find everything */}
          <div
            className="mx-auto mb-[84px] w-[1160px] flex gap-[52px] 
        md1920:mb-[4.375vw] md1920:w-[60.417vw] md1920:gap-[2.708vw]
        md720:w-[328px] md720:gap-[7px] md720:mb-[19px]"
          >
            <p
              className="shrink-0 w-[387px] text-sayyo_l2 font-Sriracha text-[43px] leading-[47.3px] tracking-[-0.86px] 
          md1920:w-[20.156vw] md1920:text-[2.24vw] md1920:leading-[2.464vw] md1920:tracking-[-0.045vw]
          md720:text-[16px] md720:w-[140px] md720:leading-[17.6px] md720:tracking-[-0.32px]"
            >
              Find everything you
              <br />
              need and need to do
            </p>
            <p
              className="mt-[8px] text-sayyo_subtext font-Inter text-[20px] leading-[26px] tracking-[-0.4px] 
          md1920:mt-[0.417vw] md1920:w-[34.01vw]  md1920_1080:text-[1.042vw] md1920-1080:leading-[1.354vw] 
          md1920_1080:tracking-[-0.021vw] 
          md1080:text-[11px] md1080:leading-[14.3px]
          md720:mt-[2.18px] md720:w-[182px] md720:text-[16px] md720:leading-[14.3px] md720:tracking-[-0.22px]"
            >
              Sayyo, you can safely and quickly transact tasks and needs
              in&nbsp; various fields with verified neighbors.
            </p>
          </div>

          <div
            className="mx-auto w-[1180px] mb-[40px] h-[1px] bg-sayyo_bg_more
        md1920:mb-[2.083vw] md1920:w-[61.458vw]
        md720:mb-[19px] md720:w-full"
          />

          <div
            className="mx-auto mb-[170px] flex w-[1176px]
        md1920:mb-[8.854vw] md1920:w-[61.25vw]
        md720:mb-[72.3px] md720:w-full"
          >
            <div className="flex flex-col items-center w-[196px] md1920:w-[10.208vw] md720:w-[54.298px]">
              <Image
                src={icon_language}
                alt="icon_language"
                className="mb-[8px] md1920:mb-[0.417vw] md1920:w-[4.896vw] md720:mb-[2.22px] md720:w-[26.041px]"
              />
              <strong
                className="flex items-center h-[46px] font-Roboto text-[20px] font-bold 
            md1920:h-[2.396vw] md1920_970:text-[1.042vw]
            md970:text-[10px]
            md720:text-[10px] md720:h-[30px]"
              >
                Language
              </strong>
            </div>
            <div className="flex flex-col items-center w-[196px] md1920:w-[10.208vw] md720:w-[54.298px]">
              <Image
                src={icon_sports}
                alt="icon_sports"
                className="mb-[8px] md1920:mb-[0.417vw] md720:mb-[2.22px]"
              />
              <strong
                className="flex items-center h-[46px] font-Roboto text-[20px] font-bold
            md1920:h-[2.396vw] md1920_970:text-[1.042vw]
            md970:text-[10px]
            md720:text-[10px] md720:h-[30px]"
              >
                Sports
              </strong>
            </div>
            <div className="flex flex-col items-center w-[196px] md1920:w-[10.208vw] md720:w-[54.298px]">
              <Image
                src={icon_music}
                alt="icon_music"
                className="mb-[8px] md1920:mb-[0.417vw] md720:mb-[2.22px]"
              />
              <strong
                className="flex items-center h-[46px] text-center font-Roboto text-[20px] font-bold
             md1920:h-[2.396vw] md1920_970:text-[1.042vw]
             md970:text-[10px]
            md720:text-[10px] md720:h-[30px]"
              >
                Musical
                <br />
                instrument
              </strong>
            </div>
            <div className="flex flex-col items-center w-[196px] md1920:w-[10.208vw] md720:w-[54.298px]">
              <Image
                src={icon_help}
                alt="icon_help"
                className="mb-[8px] md1920:mb-[0.417vw] md720:mb-[2.22px]"
              />
              <strong
                className="flex items-center h-[46px] font-Roboto text-[20px] font-bold
            md1920:h-[2.396vw] md1920_970:text-[1.042vw]
            md970:text-[10px]
            md720:text-[10px] md720:h-[30px]"
              >
                Help
              </strong>
            </div>
            <div className="flex flex-col items-center w-[196px] md1920:w-[10.208vw] md720:w-[54.298px]">
              <Image
                src={icon_sale}
                alt="icon_sale"
                className="mb-[8px] md1920:mb-[0.417vw] md720:mb-[2.22px]"
              />
              <strong
                className="flex items-center h-[46px] font-Roboto text-[20px] font-bold
            md1920:h-[2.396vw] md1920_970:text-[1.042vw]
            md970:text-[10px]
            md720:text-[10px] md720:h-[30px]"
              >
                Sale
              </strong>
            </div>
            <div className="flex flex-col items-center w-[196px] md1920:w-[10.208vw] md720:w-[54.298px]">
              <Image
                src={icon_recruit}
                alt="icon_recruit"
                className="mb-[8px] md1920:mb-[0.417vw] md720:mb-[2.22px]"
              />
              <strong
                className="flex items-center h-[46px] font-Roboto text-[20px] font-bold
            md1920:h-[2.396vw] md1920_970:text-[1.042vw]
            md970:text-[10px]
            md720:text-[10px] md720:h-[30px]"
              >
                Recruit
              </strong>
            </div>
          </div>
          {/** app image */}
          <div
            className="mx-auto mb-[59.89px] w-[1124px]
        md1920:mb-[3.119vw] md1920:w-[58.542vw]
        md720:mb-[16.59px] md720:w-full"
          >
            <div className="flex items-center">
              <Image
                src={logo_sayyo_medium}
                alt="logo_sayyo_medium"
                className="mr-[36px] md1920:mr-[1.875vw] md1920:w-[11.719vw] md720:w-[61.501px] md720:mr-[16.78px]"
              />
              <strong
                className="text-sayyo_wht font-Sriracha text-[27.536px] leading-[33.044px] tracking-[-0.55px] 
            md1920:text-[1.434vw] md1920:leading-[1.721vw] md1920:tracking-[-0.029vw]
            md720:text-[11px]  md720:leading-[13.2px] md720:tracking-[-0.22px]"
              >
                Connect local problem solvers!
              </strong>
            </div>
          </div>
          <div
            className="mx-auto mb-[116px] flex gap-[36.95px] w-[1180px]
        md1920:mb-[6.042vw] md1920:gap-[1.924vw] md1920:w-[61.458vw]
        md720:mb-[48.8px] md720:gap-[10.24px] md720:w-[328px]"
          >
            <div>
              <Image
                src={img_post}
                alt="img_post"
                width={266}
                height={506}
                className="mb-[34.25px] md1920:mb-[1.784vw] md1920:w-[13.854vw] md720:mb-[9.01px] md720:w-[75px]"
              />
              <strong
                className="mx-auto flex w-[150px] items-center justify-center text-sayyo_primary font-Sriracha text-[40px] font-normal leading-[44px] tracking-[-0.8px]
            md1920:w-[7.813vw] md1920:text-[2.083vw] md1920:leading-[2.292vw] md1920:tracking-[-0.042vw]
            md720:text-[12px] md720:leading-[13.2px] md720:tracking-[-0.24px] md720:w-auto"
              >
                Post
              </strong>
            </div>
            <div>
              <Image
                src={img_discover}
                alt="img_discover"
                width={266}
                height={506}
                className="mb-[34.25px] md1920:mb-[1.784vw] md1920:w-[13.854vw] md720:mb-[9.01px] md720:w-[75px]"
              />
              <strong
                className="mx-auto flex w-[150px] items-center justify-center text-sayyo_primary font-Sriracha text-[40px] font-normal leading-[44px] tracking-[-0.8px]
                        md1920:w-[7.813vw] md1920:text-[2.083vw] md1920:leading-[2.292vw] md1920:tracking-[-0.042vw]
            md720:text-[12px] md720:leading-[13.2px] md720:tracking-[-0.24px]  md720:w-auto"
              >
                Discover
              </strong>
            </div>
            <div>
              <Image
                src={img_chat}
                alt="img_chat"
                width={266}
                height={506}
                className="mb-[34.25px] md1920:mb-[1.784vw] md1920:w-[13.854vw] md720:mb-[9.01px] md720:w-[75px]"
              />
              <strong
                className="mx-auto flex w-[150px] items-center justify-center text-sayyo_primary font-Sriracha text-[40px] font-normal leading-[44px] tracking-[-0.8px]
                        md1920:w-[7.813vw] md1920:text-[2.083vw] md1920:leading-[2.292vw] md1920:tracking-[-0.042vw]
            md720:text-[12px] md720:leading-[13.2px] md720:tracking-[-0.24px]  md720:w-auto"
              >
                Chat
              </strong>
            </div>
            <div>
              <Image
                src={img_profile}
                alt="img_profile"
                width={266}
                height={506}
                className="mb-[34.25px] md1920:mb-[1.784vw] md1920:w-[13.854vw] md720:mb-[9.01px] md720:w-[75px]"
              />
              <strong
                className="mx-auto flex w-[150px] items-center justify-center text-sayyo_primary font-Sriracha text-[40px] font-normal leading-[44px] tracking-[-0.8px]
                        md1920:w-[7.813vw] md1920:text-[2.083vw] md1920:leading-[2.292vw] md1920:tracking-[-0.042vw]
            md720:text-[12px] md720:leading-[13.2px] md720:tracking-[-0.24px]  md720:w-auto"
              >
                Profile
              </strong>
            </div>
          </div>
        </div>
        {/** footer */}
        <Footer.En />
      </div>
    </>
  );
}
