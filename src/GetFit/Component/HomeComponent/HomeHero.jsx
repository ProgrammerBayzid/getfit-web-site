import React from "react";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const HomeHero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };
  const closeServicesDropdown = () => {
    // Apply fade-zoom-out effect when dropdown closes
    AOS.refresh({
      duration: 3000,
      easing: "ease-out-back",
      fadeing: "fade-zoom-out",
    });
    setIsServicesOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeServicesDropdown();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  const handlePaginationClick = (index) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };
  const handleSlideChange = () => {
    if (swiper) {
      setActiveIndex(swiper.activeIndex);
    }
  };
  const handlePlay = () => {
    if (swiper) {
      setIsAutoplayPaused(false);
      swiper.autoplay.start();
    }
  };

  const handlePause = () => {
    if (swiper) {
      setIsAutoplayPaused(true);
      swiper.autoplay.stop();
    }
  };
  return (
    <div>
      <div className="">
        <div className="w-full bg-[#A30051] xl:h-[573px] lg:h-[537px] h-[537px]   font-noto flex justify-center">
          <div
            data-aos="fade-zoom-in"
            className="xl:w-[1366px] lg:w-[1280px] w-[1280px] xl:h-[573px]  lg:h-[545px] h-[545px]"
          >
            <div className="">
              <Swiper
                modules={[
                  Navigation,
                  Pagination,
                  A11y,
                  Autoplay,
                  Scrollbar,
                  EffectFade,
                ]}
                effect="fade"
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                onSwiper={(swiper) => setSwiper(swiper)}
                onSlideChange={handleSlideChange}
                className="relative"
              >
                <div>
                  {/* <SwiperSlide>
                    <div className="relative xl:w-[1366px] lg:w-[1280px] w-[1280px] xl:h-[573px] lg:h-[545px] h-[545px]">
                      <img
                        className="xl:w-[1366px] lg:w-[1280px] w-[1280px] xl:h-[573px] lg:h-[545px] h-[545px] object-fill"
                        src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/home-page-getfit/Group+13900.png"
                      />
                      <div className="  ">
                        <div className="absolute xl:top-[60px] lg:top-[50px] top-[50px]  left-0  px-[45px]">
                          <h1 className="text-[34px]  text-white  font-semibold leading-[45px]">
                            খাবারই হোক ওষুধ, ওষুধই হোক খাবার।
                          </h1>
                          <div className=" ">
                            <div className="xl:mt-[60px] lg:mt-[50px] mt-[50px] flex gap-x-[25px] ">
                              <div className="relative">
                                <div
                                  onMouseLeave={() => setIsServicesOpen(false)}
                                  className=" h-[46px] w-[420px]"
                                >
                                  <input
                                    onMouseEnter={() => setIsServicesOpen(true)}
                                    readOnly
                                    className=" placeholder:text-[#C7C8C9] h-[46px] placeholder:text-[20px] placeholder:font-medium  w-[420px]  rounded pl-[15px] focus:outline-none  input shadow-[rgba(0,_0,_0,_0.24)_0px_2.5px_5px] pb-[1px] placeholder:font-normal  pt-[7px]"
                                    placeholder="যে কোন একটি সেবা সিলেক্ট করুন"
                                  />
                                  {isServicesOpen && (
                                    <div
                                      data-aos="fade-zoom-in "
                                      data-aos-easing="ease-in-back "
                                      data-aos-delay="40"
                                      data-aos-offset="0"
                                      onMouseLeave={() =>
                                        setIsServicesOpen(false)
                                      }
                                      className="font-noto absolute top-[6px] left-[100px] mt-2 bg-white border shadow-lg w-[199px] h-[279px] rounded-b-[10px] mt-[40px]  py-[15px] transition-all ease-in-out duration-500 opacity-100"
                                    >
                                      <div>
                                        <p className="font-noto font-normal text-[#95004A] text-[20px] leading-[24px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[10px] cursor-pointer">
                                          ওয়েট লস
                                        </p>
                                        <p className="font-inter font-normal text-[#95004A] text-[20px] leading-[24px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[10px] cursor-pointer">
                                          PCOS
                                        </p>
                                        <p className="font-noto font-normal text-[#95004A] text-[20px] leading-[24px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[10px] cursor-pointer">
                                          ডায়াবেটিস
                                        </p>
                                        <p className="font-noto font-normal text-[#95004A] text-[20px] leading-[24px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[10px] cursor-pointer">
                                          থাইরয়েড
                                        </p>
                                        <p className="font-noto font-normal text-[#95004A] text-[20px] leading-[24px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[10px] cursor-pointer">
                                          বেবী নিউট্রিশন
                                        </p>
                                        <p className="font-noto font-normal text-[#95004A] text-[20px] leading-[24px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] cursor-pointer">
                                          প্রেগন্যান্সি
                                        </p>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <button className="bg-[#AA105D] w-[118px] h-[46px] rounded rounded-[7px] border border-white border-[1px] font-noto font-medium text-white text-[22px] leading-[26px] pt-[4px] ">
                                সার্চ করুন
                              </button>
                            </div>
                          </div>
                          <div className="mt-[30px]">
                            <h1 className=" text-[33px] text-white font-semibold font-semibold leading-[45px]">
                              আপনার জীবনযাত্রা অনুযায়ী সুস্বাস্থ্যের
                              <br /> জন্য পারসোনালাইজড নিউট্রিশন সেবা
                              <br /> নিন যেকোনো সময়, যেকোনো জায়গায়
                            </h1>
                            <h1 className="mt-[10px] text-[24px] text-[#FFDC26] font-semibold font-semibold leading-[33px]">
                              ওজন কমানো, থাইরয়েড, PCOS, ডায়াবেটিস, বেবী
                              নিউট্রিশন
                              <br /> এবং প্রেগন্যান্সি - সবকিছুর সমাধান এখন শুধু
                              Getfit অ্যাপে{" "}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide> */}
                  <SwiperSlide>
                    <div className="relative xl:w-[1366px] lg:w-[1280px] w-[1280px] xl:h-[573px] lg:h-[545px] h-[545px]">
                      <img
                        className="xl:w-[1366px] lg:w-[1280px] w-[1280px] xl:h-[573px] lg:h-[545px] h-[545px] object-fill"
                        src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708494203750Home%203.png"
                      />
                      <div className="  ">
                        <div className="absolute xl:top-[139px] lg:top-[90px] top-[90px]  left-0  pl-[60px]">
                          <h1 className="text-[42px]  text-[#E33842]  font-bold leading-[60px]">
                            <span className="text-[#101011]">
                              আপনার পরিবারের সু-স্বাস্থ্যের যাত্রা শুরু করুন
                            </span>
                            <br />
                            অভিজ্ঞ নিউট্রিশনিস্টদের সাথে।
                          </h1>

                          <div className="mt-[30px]">
                            <div className="flex gap-[12px]">
                              <div className="bg-[#D1E7F1] w-[45px] h-[45px] rounded-full flex items-center justify-center">
                                <img
                                  src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1709029317209Group%20%2815%29.png"
                                  className="w-[23px] h-[27px]"
                                />
                              </div>
                              <h1 className=" text-[26px] text-[#101011] font-normal leading-[36px]">
                                Certified নিউট্রিশনিস্ট দ্বারা ভিডিও অথবা আডিও
                                <br />
                                কলে নিয়মিত ফলো-আপ
                              </h1>
                            </div>
                            <div className="flex gap-[12px] mt-[33px]">
                              <div className="bg-[#D1E7F1] w-[45px] h-[45px] rounded-full flex items-center justify-center">
                                <img
                                  src="https://getfit-image-file.s3.amazonaws.com/1709029237957Group%2014513.png"
                                  className="w-[20px] h-[22px]"
                                />
                              </div>
                              <h1 className=" text-[26px] text-[#101011] font-normal leading-[36px]">
                                আপনার শরীরের এবং স্বাস্থ্যের অবস্থার উপর ভিত্তি{" "}
                                <br />
                                করে পারসনালাইজড ডায়েট প্ল্যান
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative xl:w-[1366px] lg:w-[1280px] w-[1280px] xl:h-[573px] lg:h-[545px] h-[545px]">
                      <img
                        className="xl:w-[1366px] lg:w-[1280px] w-[1280px] xl:h-[573px] lg:h-[545px] h-[545px] object-fill"
                        src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708494124021Home%202.png"
                      />
                      <div className="  ">
                        <div className="absolute xl:top-[139px] lg:top-[90px] top-[90px]  left-0  pl-[80px]">
                          <h1 className="text-[32px]  text-[#004F71]  font-medium leading-[65px]">
                            দ্রুত ওজন বেড়ে যাচ্ছে?
                          </h1>
                          <h1 className="text-[34px]  text-[#004F71]  font-bold leading-[45px]">
                            অভিজ্ঞ নিউট্রিশনিস্ট দ্বারা
                            <br /> কনসাল্টেশন নিন
                          </h1>
                          <h1 className="text-[32px]  text-[#004F71]  font-bold leading-[57px]">
                            ৪ মাসে ওজন কমান ৭-৮ কেজি!
                          </h1>

                          <div className="mt-[20px]">
                            <button className="bg-[#AA105D] w-[186px] h-[48px] rounded rounded-[7px] border border-white border-[1px] font-noto font-medium text-white text-[22px] leading-[26px] pt-[4px] ">
                              প্যাকেজ কিনুন
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="absolute bottom-[16px] left-1/2 z-40 ">
                  <div className="  custom-pagination flex gap-x-[14px] items-center">
                    {[1, 2].map((index) => (
                      <div
                        key={index}
                        className={`h-4 w-4  rounded-full  cursor-pointer  ${
                          activeIndex === index - 1
                            ? "  bg-[#F4B354]"
                            : "bg-[#E1B2C7]"
                        }`}
                        onClick={() => handlePaginationClick(index - 1)}
                      ></div>
                    ))}
                    <div>
                      {isAutoplayPaused === true ? (
                        <div className="">
                          <img
                            onClick={handlePlay}
                            className="cursor-pointer w-[15px] h-[14px]"
                            src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1709029414881Group%20%2816%29.png"
                          />
                        </div>
                      ) : (
                        <div className=" ">
                          <img
                            onClick={handlePause}
                            className="cursor-pointer w-[12px] h-[14px]"
                            src="https://getfit-image-file.s3.amazonaws.com/1709011857270Group%2013732.png"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
