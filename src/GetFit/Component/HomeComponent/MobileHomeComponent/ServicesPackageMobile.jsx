import React, { useState } from "react";
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
import { useEffect } from "react";
const ServicesPackageMobile = ({ closeModalMobile }) => {
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

  // api implement
  const [render, setRender] = useState(false);
  const [plansList, setPlanList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortBy, setSortBy] = useState("createdAt");
  const [limit, setLimit] = useState(1000);
  const [page, setPage] = useState(1);
  const getPlan = async () => {
    try {
      let url = "https://api.getfit.com.bd/plan?";
      // Constructing the URL with query parameters based on state variables
      url += `sortBy=${sortBy}&`;
      url += `sortOrder=${sortOrder}&`;
      url += `page=${page}&`;
      url += `limit=${limit}`;

      // Add other query parameters conditionally based on state variables
      // if (status !== "") url += `&status=${status}`;
      // if (packageExpired !== "") url += `&packageExpired=${packageExpired}`;
      // if (type !== "") url += `&type=${type}`;
      // if (planId !== "") url += `&planId=${planId}`;
      // if (packageId !== "") url += `&packageId=${packageId}`;
      // if (userId !== "") url += `&userId=${userId}`;
      // if (doctorId !== "") url += `&doctorId=${doctorId}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const planList = await response.json();
      setPlanList(planList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    getPlan();
  }, [render, sortOrder, sortBy, limit, page]);

  return (
    <div className="w-full flex justify-center  sm:my-[30px] md:my-[35px] custom:my-[40px] my-[25px]">
      <div className="custom:w-[430px] md:w-[400px] sm:w-[375px] w-[350px] px-[12px] ">
        <div>
          <div className="flex justify-between">
            {/* <h1 className="sm:text-[14px] custom:text-[17px] md:text-[15px] text-[13px] font-inter font-bold text-[#101011] mb-[9px]">
              আপনার পারসোনালাইজড প্যাকেজ
            </h1> */}
            {/* <div className="flex gap-x-[5px] ">
              <div>
                <p className="text-[#101011] text-[14px] font-medium font-inter text-[#C61E72]">
                  সিঙ্গেল
                </p>
              </div>
              <div>
                <input
                  className=" mb-[2px] pt-[0.1rem] pl-[1.5px] h-[12.5px] w-[24px] appearance-none rounded-[0.4375rem] bg-[#C61E72] before:pointer-events-none before:absolute before:h-[11.82px] before:w-[11.82px] before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:mt-[0px] after:h-[9.6px] after:w-[9.5px] after:rounded-full after:border-none after:bg-neutral-100 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:after:absolute checked:after:z-[2] checked:after:mt-[0px] checked:after:ml-[0.71rem] checked:after:h-[9.6px] checked:after:w-[9.5px] checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[9.6px] focus:after:w-[9.5px] focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0.1_-1px_0px_10.1_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0.1_-1px_0px_10.1_#3b71ca]"
                  type="checkbox"
                  role="switch"
                />
              </div>
              <div>
                <p className="text-[#101011] text-[14px] font-medium font-inter text-[#C61E72]">
                  কাপল
                </p>
              </div>
            </div> */}
          </div>
          <div className="custom:w-[405px] md:w-[377px] sm:w-[343px] w-[327px]  flex items-center justify-center mb-[5px] ">
            <div className=" custom:w-[405px] md:w-[377px] sm:w-[343px] w-[327px] overflow-x-auto flex gap-x-[10px] py-[10px]">
              {plansList.map((category, index) => {
                return (
                  <div key={index}>
                    <button
                      style={{ whiteSpace: "nowrap" }}
                      className={`w-full h-[24px]  rounded-[2px] pt-[2.5px] px-[8px]    text-[14px] text-[#1F1F1F] font-noto font-normal   ${
                        activeIndex === index - 0
                          ? "text-[#FFFFFF] bg-[#C30F69] text-[14px] font-noto font-normal"
                          : "text-[#1F1F1F]"
                      }`}
                      onClick={() => handlePaginationClick(index - 0)}
                    >
                      {category.title_en}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="custom:w-[405px] md:w-[377px] sm:w-[343px] w-[327px]  flex items-center justify-center  ">
            <div className="custom:w-[405px] md:w-[377px] sm:w-[343px] w-[327px]">
              <Swiper
                modules={[
                  Navigation,
                  A11y,
                  Pagination,
                  Scrollbar,
                  EffectFade,
                  Autoplay,
                ]}
                spaceBetween={10}
                slidesPerView={1}
                navigation={{
                  prevEl: ".custom-prev-buttonB",
                  nextEl: ".custom-next-button",
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                onSwiper={(swiper) => setSwiper(swiper)}
                onSlideChange={handleSlideChange}
              >
                {plansList.map((category, index) => (
                  <SwiperSlide key={index}>
                    <div className="grid grid-cols-3 sm:gap-x-[6px] custom:gap-x-[12px] md:gap-x-[10px] gap-x-[8px]">
                      {category.packages.priceAndDuration.map((pkg) => (
                        <div key={pkg.id}>
                          <div className="relative sm:w-[108px] w-[102px] h-[102px] custom:w-[125px] md:w-[117px]   rounded-[5px] px-[7px] py-[9px] bg-white border-[#101011] border-opacity-40 border-[0.5px] ">
                            <div>
                              <div className="flex justify-center ">
                                <p className="font-medium font-noto text-center text-[10px] text-[#101011]  leading-[11px] ">
                                  {pkg.title_bn}
                                </p>
                              </div>
                              <div className="flex justify-center  mt-[4px]">
                                <p className="font-bold font-noto text-[12px] text-[#101011]  ">
                                  {" "}
                                  ৳{pkg.price_en}/-
                                </p>
                              </div>
                              <div className="absolute bottom-2 left-[13px]">
                                <div className=" ">
                                  <button
                                    type="button"
                                    onClick={() => closeModalMobile(true)}
                                    className=" w-[81px] h-[24px] rounded rounded-[25px] border border-[#C61E72] bg-[#C61E72]  items-center justify-center pt-[2px]"
                                  >
                                    <p className="font-medium font-noto text-[12px] text-white  ">
                                      প্যাকেজ কিনুন
                                    </p>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPackageMobile;
