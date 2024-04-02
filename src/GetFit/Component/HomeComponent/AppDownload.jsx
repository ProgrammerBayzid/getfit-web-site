import React, { useEffect } from "react";
import AppPlayStoreLogo from "../CommonLogo/AppPlayStoreLogo";
import AOS from "aos";
import "aos/dist/aos.css"; // You may need to import the AOS styles as well

const AppDownload = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="w-full h-[614px] bg-[#F5F5F5] font-noto flex justify-center">
        <div className="xl:w-[1366px] lg:w-[1280px] px-[45px] relative ">
          <div className="flex gap-x-[150px] absolute bottom-0">
            <div className="xl:w-[435px] lg:w-[435px] ">
              <div>
                <img
                  data-aos="zoom-in"
                  className=" "
                  src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/home-page-getfit/doctor.png"
                />
              </div>
              <div className="absolute top-[170px] left-[280px]">
                <img
                  data-aos="zoom-in-right"
                  data-aos-duration="1000"
                  className=" "
                  src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/home-page-getfit/paysent.png"
                />
              </div>
            </div>
            <div data-aos="fade-left" className="">
              <div>
                <h1 className="font-bold text-[34px] leading-[41px] text-[#212427] text-opacity-90 mb-[7px]  ">
                  <span className="font-inter  text-[#C61E72]   ">Getfit</span>{" "}
                  অ্যাপটি ডাউনলোড করুন
                </h1>
                <p className="font-normal text-[18px] leading-[23px] text-[#212427] text-opacity-70 mb-[17px]  ">
                  যেকোনো সময়, যেকোনো জায়গা থেকে আমাদের সেবা গ্রহণ করুন ভিডিও
                  কলে
                  <br />
                  সরাসরি ডাক্তারদের সাথে কথা বলার জন্য এখনই অ্যাপটি ডাউনলোড
                  করুন।
                </p>
                <h1 className="font-semibold text-[18px] leading-[21px] text-[#212427] text-opacity-90 mb-[10px]  ">
                  অ্যাপটি ডাউনলোড করুন
                </h1>
                <div className="flex gap-5">
                  <form className="flex gap-5">
                    <div className="relative ">
                      <div className="flex gap-x-[7px] items-center absolute lg:pt-[15px]  left-0 flex items-center pl-[7px] pointer-events-none">
                        <img
                          className="w-[28px] h-[16px]"
                          src="/images/Home/AppHome/flag.svg"
                        />
                        <p className="text-[#212427] font-inter text-[18px]">
                          +88
                        </p>
                      </div>
                      <input
                        type="tel"
                        maxLength="11"
                        //   value={phoneNumber}
                        //   onChange={handleInputChange}
                        // onBlur={handleBlur}
                        className=" placeholder:text-[#C7C8C9] border border-[#C61E72] h-[52px]  placeholder:text-[18px] w-[308px]   rounded pl-[85px] focus:outline-none  input   placeholder:font-normal text-[18px] pt-[9px]"
                        placeholder="01635401965"
                      />
                    </div>
                    <div className="    ">
                      <button
                        type="submit"
                        className="bg-[#C61E72] font-inter  text-[15px] font-medium  w-[124px] h-[52px] text-white rounded rounded-[8px] "
                      >
                        Get Link
                      </button>
                    </div>
                  </form>
                </div>
                <div className="mt-[20px]">
                  <AppPlayStoreLogo></AppPlayStoreLogo>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
