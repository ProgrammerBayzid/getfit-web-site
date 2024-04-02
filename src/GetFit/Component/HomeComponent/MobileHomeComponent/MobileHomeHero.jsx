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

const MobileHomeHero = () => {
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

  return (
    <div className="w-full flex justify-center">
      <div className="custom:w-[430px] md:w-[400px] sm:w-[375px] w-[350px] px-[12px] mt-[15px]">
        <div>
          <div>
            <div>
              {/* <div className="relative">
                <input
                  // onMouseEnter={() => setIsServicesOpen(true)}
                  // onClick={toggleServicesDropdown}
                  readOnly
                  className=" placeholder:text-[#C7C8C9] h-[36px] placeholder:text-[13px] placeholder:font-light  sm:w-[345px] custom:w-[407px] md:w-[377px] w-[327px] rounded  focus:outline-none  input pl-[10px]  border border-[#101011] border-opacity-20 border-[0.5px]"
                  placeholder="যে কোন একটি সেবা সিলেক্ট করুন"
                />
                <div className=" absolute top-[10px] right-[15px]">
                  <img src="/images/Home/HomeHeader/searchIcon.svg" />
                </div>
              </div> */}
            </div>
            <div className="mt-[1px]">
              <div
                data-aos="fade-zoom-in"
                className="sm:w-[345px] custom:w-[407px] md:w-[376px] w-[327px] "
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
                    className="relative "
                  >
                    <div>
                      <SwiperSlide>
                        <div className="">
                          <div className="relative sm:w-[345px] custom:w-[407px] md:w-[376px] w-[327px] custom:h-[140px] md:h-[130px] sm:h-[130px] h-[120px] rounded">
                            <div>
                              <img
                                className="sm:w-[345px] custom:w-[407px] md:w-[376px] w-[327px] custom:h-[140px] md:h-[130px] sm:h-[130px] h-[120px] object-cover rounded"
                                src="/images/Home/HomeHeader/heroIconresponsive.svg"
                              />
                            </div>

                            <div className=" absolute top-[11px]  left-[11px]  ">
                              <h1 className="custom:text-[13px] md:text-[12px] text-[10px] sm:text-[11px] text-white font-bold ">
                                খাবারই হোক ওষুধ, ওষুধই হোক খাবার।
                              </h1>
                              <div className="sm:mt-[5px] md:mt-[7px] custom:mt-[8px] mt-[5px]">
                                <h1 className=" sm:text-[10px] custom:text-[12px] md:text-[11px] text-[9px] text-white font-medium leading-[13px]">
                                  আপনার জীবনযাত্রা অনুযায়ী সুস্বাস্থ্যের
                                  <br /> জন্য পারসোনালাইজড নিউট্রিশন সেবা
                                  <br /> নিন যেকোনো সময়, যেকোনো জায়গায়
                                </h1>
                                <h1 className=" sm:mt-[7px] md:mt-[10px] custom:mt-[11px] mt-[7px] sm:text-[8px] md:text-[9px] custom:text-[9.5px] text-[8px] text-[#FFDC26] font-bold leading-[10px]">
                                  ওজন কমানো, থাইরয়েড, PCOS, ডায়াবেটিস, বেবী
                                  নিউট্রিশন
                                  <br /> এবং প্রেগন্যান্সি - সবকিছুর সমাধান এখন
                                  শুধু{" "}
                                  <span className=" text-white ">
                                    Getfit
                                  </span>{" "}
                                  অ্যাপে{" "}
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="">
                          <div className="relative sm:w-[345px] custom:w-[407px] md:w-[376px] w-[327px] custom:h-[140px] md:h-[130px] sm:h-[130px] h-[120px] rounded">
                            <div>
                              <img
                                className="sm:w-[345px] custom:w-[407px] md:w-[376px] w-[327px] custom:h-[140px] md:h-[130px] sm:h-[130px] h-[120px] object-cover rounded"
                                src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1709180817225Photo%201.png"
                              />
                            </div>

                            {/* <div className=" absolute top-[11px]  left-[11px]  ">
                              <h1 className="custom:text-[13px] md:text-[12px] text-[10px] sm:text-[11px] text-white font-bold ">
                                খাবারই হোক ওষুধ, ওষুধই হোক খাবার।
                              </h1>
                              <div className="sm:mt-[5px] md:mt-[7px] custom:mt-[8px] mt-[5px]">
                                <h1 className=" sm:text-[10px] custom:text-[12px] md:text-[11px] text-[9px] text-white font-medium leading-[13px]">
                                  আপনার জীবনযাত্রা অনুযায়ী সুস্বাস্থ্যের
                                  <br /> জন্য পারসোনালাইজড নিউট্রিশন সেবা
                                  <br /> নিন যেকোনো সময়, যেকোনো জায়গায়
                                </h1>
                                <h1 className=" sm:mt-[7px] md:mt-[10px] custom:mt-[11px] mt-[7px] sm:text-[8px] md:text-[9px] custom:text-[9.5px] text-[8px] text-[#FFDC26] font-bold leading-[10px]">
                                  ওজন কমানো, থাইরয়েড, PCOS, ডায়াবেটিস, বেবী
                                  নিউট্রিশন
                                  <br /> এবং প্রেগন্যান্সি - সবকিছুর সমাধান এখন
                                  শুধু{" "}
                                  <span className=" text-white ">
                                    Getfit
                                  </span>{" "}
                                  অ্যাপে{" "}
                                </h1>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="">
                          <div className="relative sm:w-[345px] custom:w-[407px] md:w-[376px] w-[327px] custom:h-[145px] md:h-[135px] sm:h-[135px] h-[130px] rounded">
                            <div>
                              <img
                                className="sm:w-[345px] custom:w-[407px] md:w-[376px] w-[327px] custom:h-[140px] md:h-[130px] sm:h-[130px] h-[120px] object-cover rounded"
                                src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1709195815165Photo%203%20%281%29.png"
                              />
                            </div>

                            <div className=" absolute top-[20px]  left-[20px]  ">
                              <h1 className="custom:text-[13px] md:text-[12px] text-[10px] sm:text-[11px] text-[#25010E] font-bold font-noto">
                                দ্রুত ওজন বেড়ে যাচ্ছে?
                              </h1>
                              <div className="sm:mt-[3px] md:mt-[4px] custom:mt-[5px] mt-[2px]">
                                <h1 className=" custom:text-[13px] md:text-[12px] text-[10px] sm:text-[11px]  font-bold leading-[17px] text-[#25010E]">
                                  অভিজ্ঞ নিউট্রিশনিস্ট দ্বারা
                                  <br /> কনসাল্টেশন নিন
                                </h1>
                                <h1 className="custom:text-[13px] md:text-[12px] text-[10px] sm:text-[12px] text-[#25010E] font-bold font-noto sm:mt-[3px] md:mt-[4px] custom:mt-[5px] mt-[2px]">
                                  ৪ মাসে ওজন কমান ৭-৮ কেজি!
                                </h1>
                              </div>
                              <div className="sm:mt-[1px] md:mt-[1px] custom:mt-[5px] mt-[1px]">
                                <button className="bg-[#AA105D] w-[88px] h-[21px] rounded rounded-[5px]  font-noto font-medium text-white custom:text-[13px] md:text-[12px] text-[10px] sm:text-[11px] leading-[15px] pt-[3px] ">
                                  প্যাকেজ কিনুন
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>
                </div>
              </div>
              <div className="flex justify-center mt-[10px] ">
                <div className="  custom-pagination flex gap-x-[5px]">
                  {[1, 2, 3].map((index) => (
                    <div
                      key={index}
                      className={`h-[5px] w-[4.5px] rounded-full  cursor-pointer  ${
                        activeIndex === index - 1
                          ? " bg-[#C61E72] "
                          : "bg-[#E9A4C6]"
                      }`}
                      onClick={() => handlePaginationClick(index - 1)}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHomeHero;
