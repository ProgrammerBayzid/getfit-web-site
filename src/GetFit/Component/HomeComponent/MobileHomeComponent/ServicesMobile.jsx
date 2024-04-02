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
const ServicesMobile = () => {
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
    <div className="w-full flex justify-center">
      <div className="custom:w-[430px] md:w-[400px] sm:w-[375px] w-[350px] px-[12px] mt-[px]">
        <div>
          <div>
            <div>
              <h1 className="sm:text-[14px] custom:text-[16px] md:text-[15px] text-[12px] font-noto font-bold text-[#101011] mb-[9px] text-center">
                Getfit এর সেবাসমূহ
              </h1>
            </div>
            <div className="mt-[15px]">
              <div
                data-aos="fade-zoom-in"
                className="sm:w-[345px] custom:w-[407px] md:w-[376px] w-[327px] h-[120px] "
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
                      {plansList?.map((sd, i) => {
                        return (
                          <SwiperSlide key={i}>
                            <div className="">
                              <div className=" sm:w-[345px] custom:w-[407px] md:w-[376px] w-[327px] custom:h-[140px] md:h-[130px] sm:h-[130px] h-[120px] rounded bg-[#F7DDEA] p-[15px]">
                                <div className="flex justify-between items-center mb-[7px]">
                                  <div>
                                    <h1 className="sm:text-[14px] custom:text-[16px] md:text-[15px] text-[12px] font-noto font-bold text-[#101011] ">
                                      {sd.title_bn}
                                    </h1>
                                  </div>
                                  <div>
                                    <button className="flex gap-x-1 items-center w-[86px] h-[20px] rounded-[20px] bg-[#FFDC26] rounded rounded-[15px] justify-center font-medium font-[18px] leading-[21px] pt-[5px] ">
                                      <p className="text-[10px] font-noto font-normal text-[#000000]">
                                        কনসাল্টেশন নিন
                                      </p>
                                      <img
                                        className="w-[7px] h-[8px]"
                                        src="https://getfit-image-file.s3.amazonaws.com/1709116180190Group%20%2817%29.png"
                                      />
                                    </button>
                                  </div>
                                </div>
                                <div>
                                  <h1 className="sm:text-[12px] custom:text-[14px] md:text-[13px] text-[10px] font-noto font-normal text-[#101011] leading-[14px] text-start">
                                    {sd.details_bn}
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </div>
                    <div className="absolute bottom-[5px] flex justify-center w-full z-40 ">
                      <div className="  custom-pagination flex gap-x-[5px]">
                        {plansList.map((service, index) => (
                          <div
                            key={index}
                            className={`h-[5px] w-[4.5px]  rounded-full  cursor-pointer  ${
                              activeIndex === +index
                                ? " bg-[#C61E72] "
                                : "bg-[#E9A4C6]"
                            }`}
                            onClick={() => handlePaginationClick(+index)}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesMobile;
