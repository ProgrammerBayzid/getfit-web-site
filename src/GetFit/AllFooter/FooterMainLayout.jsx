import React from "react";
import AppPlayStoreLogo from "../Component/CommonLogo/AppPlayStoreLogo";
import { Link } from "@reach/router";

const FooterMainLayout = ({ closeModal }) => {
  return (
    <div className="w-full h-[500px] flex justify-center bg-[#1E1F21]">
      <div className="xl:w-[1366px] lg:w-[1280px] h-[500px] px-[45px] ">
        <div className="mt-[50px]">
          <div className="flex justify-between">
            <div className="flex xl:gap-x-[100px] lg:gap-x-[70px] justify-center">
              <div>
                <div className="mb-[22px]">
                  {" "}
                  <img
                    className="w-[159px] h-[38px]"
                    src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1710956775339fffff.png"
                  />
                </div>
                <div className="flex gap-x-[12px] my-[12px]">
                  <img
                    className="mb-[23px]"
                    src="/images/Footer/location.svg"
                  />
                  <p className="font-light font-noto text-[#FFFFFF] text-[18px] leading-[21px] w-[238px]">
                    ফ্ল্যাট 2B, বাড়ি 254, রোড 09,
                    <br /> ব্লক সি, বসুন্ধরা R/A, ঢাকা
                  </p>
                </div>
                <div className="flex gap-x-[13px] my-[12px]">
                  <img src="/images/Footer/phone.svg" />
                  <p className="font-light font-noto text-[#FFFFFF] text-[18px] leading-[21px]">
                    +88 01635401965
                  </p>
                </div>
                <div className="flex gap-x-[13px] my-[12px]">
                  <img src="/images/Footer/email.svg" />
                  <p className="font-light font-noto text-[#FFFFFF] text-[18px] leading-[21px]">
                    hello@getfit.com.bd
                  </p>
                </div>
                <div className="w-[184px] h-[1px] bg-[#FFFFFF] my-[12px]"></div>
                <div className="flex gap-x-[10px] mt-[15px]">
                  <a href="https://x.com/getfit_bd" target="_blank">
                    <img
                      className="cursor-pointer"
                      src="/images/Footer/Twitter.svg"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/getfitcare?_rdc=1&_rdr"
                    target="_blank"
                  >
                    <img
                      className="cursor-pointer"
                      src="/images/Footer/Facebook.svg"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/getfit.com.bd/"
                    target="_blank"
                  >
                    <img
                      className="cursor-pointer"
                      src="/images/Footer/Instagram.svg"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/getfitbd/"
                    target="_blank"
                  >
                    <img
                      className="cursor-pointer"
                      src="/images/Footer/LinkedIn.svg"
                    />
                  </a>
                </div>
              </div>

              <div>
                <div className="grid grid-cols-3 gap-x-[30px] gap-y-[8px]">
                  <p className="font-light text-white text-[18px] mb-[12px] leading-[24px] font-noto cursor-pointer">
                    -ওয়েট লস
                  </p>
                  <p className="font-light text-white text-[18px] mb-[12px] leading-[24px] font-noto cursor-pointer">
                    -অয়েট গেইন
                  </p>
                  <p className="font-light text-white text-[18px] mb-[12px] leading-[24px] font-noto cursor-pointer">
                    -থাইরয়েড
                  </p>
                  <p className="font-light text-white text-[18px] mb-[12px] leading-[24px] font-noto cursor-pointer">
                    -PCOS/PCOD
                  </p>
                  <p className="font-light text-white text-[18px] mb-[12px] leading-[24px] font-noto cursor-pointer">
                    -ডায়াবেটিস
                  </p>
                  <p className="font-light text-white text-[18px] mb-[12px] leading-[24px] font-noto cursor-pointer">
                    -বেবী নিউট্রিশন
                  </p>
                  <p className="font-light text-white text-[18px] mb-[12px] leading-[24px] font-noto cursor-pointer">
                    -প্রেগন্যন্সি ডায়েট
                  </p>
                  <p className="font-light text-white text-[18px] mb-[12px] leading-[24px] font-noto cursor-pointer">
                    -কিডনি রোগ ডায়েট
                  </p>
                  <p className="font-light text-white text-[18px] mb-[12px] leading-[24px] font-noto cursor-pointer">
                    -হাইপ্রেশার ডায়েট
                  </p>
                  <p className="font-light text-white text-[18px] mb-[12px] leading-[24px] font-noto cursor-pointer">
                    -লিভার রোগ ডায়েট
                  </p>
                  <p className="font-light text-white text-[18px] mb-[12px] leading-[24px] font-noto cursor-pointer">
                    -পেট/অ্যানিমেল ডায়েট
                  </p>
                </div>
                <div className="flex justify-center mt-[50px]">
                  <button
                    onClick={() => closeModal(true)}
                    className="w-[275px] h-[47px] border border-[2px] border-[#FFDC26] rounded rounded-[25px] font-bold text-[22px] font-inter text-[#FFDC26] pt-[4px]"
                  >
                    অ্যাপ ডাউনলোড করুন
                  </button>
                </div>
                <div className="flex justify-center mt-[32px]">
                  <AppPlayStoreLogo></AppPlayStoreLogo>
                </div>
                <div className="flex justify-center">
                  <p className="font-normal text-white text-[18px] leading-[21px] mt-[40px] font-inter ">
                    @ Bringin Technologies Limited, All Rights Reserved.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Link to="/aboutus">
                  <p className="font-light text-white text-[19px] leading-[21px] mb-[18px] font-noto cursor-pointer">
                    আমাদের সম্পর্কে
                  </p>
                </Link>
                <Link to="/contactus">
                  <p className="font-light text-white text-[19px] leading-[21px] my-[18px] font-noto cursor-pointer">
                    যোগাযোগ করুন
                  </p>{" "}
                </Link>
                <Link to="/privacy-policy">
                  <p className="font-light text-white text-[19px] leading-[21px] my-[18px] font-noto cursor-pointer">
                    প্রাইভেসি পলিসি
                  </p>{" "}
                </Link>
                <Link to="/terms-and-conditions">
                  <p className="font-light text-white text-[19px] leading-[21px] my-[18px] font-noto cursor-pointer">
                    শর্তাবলী
                  </p>{" "}
                </Link>
                <Link to="/faq">
                  <p className="font-light text-white text-[19px] leading-[21px] my-[18px] font-noto cursor-pointer">
                    সাধারণ জিজ্ঞাসা
                  </p>
                </Link>
                <p className="font-light text-white text-[19px] leading-[21px] my-[18px] font-noto cursor-pointer">
                  ব্লগ
                </p>{" "}
                <p className="font-light text-white text-[19px] leading-[21px] my-[18px] font-noto cursor-pointer">
                  রেসিপি
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMainLayout;
