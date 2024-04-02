import React, { useState } from "react";
import { Navigation, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useEffect } from "react";
import { useModalContext } from "../../Context/useModalContext";

const Services = () => {
  const { openModalDownloadApp, setOpenModalDownloadApp } = useModalContext();
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
  const customPrevButton = (
    <div className="custom-prev-button">
      <img src="/images/Home/Services/Arro.svg" />
    </div>
  );

  const customNextButton = (
    <div className="custom-next-button">
      {" "}
      <img className="rotate-180" src="/images/Home/Services/Arro.svg" />
    </div>
  );
  return (
    <div>
      <div className="h-[290px] w-full bg-[#C61E72] font-noto flex justify-center items-center">
        <div className="xl:w-[1366px] lg:w-[1280px] h-[290px]  flex items-center  justify-between px-[20px]">
          {customPrevButton}
          <div className="xl:w-[1150px] lg:w-[1080px]">
            <Swiper
              modules={[Navigation, A11y, Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              navigation={{
                prevEl: ".custom-prev-button",
                nextEl: ".custom-next-button",
              }}
              autoplay={{ delay: 9000, disableOnInteraction: false }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <div>
                {plansList?.length > 0 ? (
                  <>
                    {plansList?.map((plan, i) => {
                      return (
                        <SwiperSlide>
                          <div
                            data-aos="zoom-in"
                            className="xl:w-[350px] lg:w-[320px] h-[210px] pt-[17px] relative"
                          >
                            <h className="font-semibold xl:text-[22px] font-inter  lg:text-[20px] xl:leading-[11px] lg:leading-[10px] text-white ">
                              {plan?.title_bn}
                            </h>
                            <p className="font-light xl:text-[14px] font-noto lg:text-[13px] xl:leading-[19px] text-left lg:leading-[18px]  text-white mb-[20px] mt-[15px] ">
                              {plan?.details_bn}
                            </p>
                            <button
                              onClick={() => setOpenModalDownloadApp(true)}
                              className="absolute inset-x-0 bottom-1 flex gap-x-1 items-center w-[165px] h-[33px] bg-[#FFDC26] rounded rounded-[15px] justify-center font-medium font-[18px] leading-[21px] pt-[5px] "
                            >
                              <p>কনসাল্টেশন নিন</p>
                              <img src="/images/Home/Services/serviceIcon.svg" />
                            </button>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </Swiper>
          </div>
          {customNextButton}
        </div>
      </div>
    </div>
  );
};

export default Services;
