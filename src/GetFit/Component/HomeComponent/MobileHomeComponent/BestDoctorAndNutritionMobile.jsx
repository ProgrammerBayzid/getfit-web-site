import React from "react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useState } from "react";
import { useModalContext } from "../../../Context/useModalContext";
const BestDoctorAndNutritionMobile = ({ closeModalMobile }) => {
  const [render, setRender] = useState(false);
  const [doctorsList, setDoctorList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortBy, setSortBy] = useState("createdAt");
  const [limit, setLimit] = useState(1000);
  const [page, setPage] = useState(1);
  const getDoctor = async () => {
    try {
      let url = "https://api.getfit.com.bd/doctor?";
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

      const doctorList = await response.json();
      setDoctorList(doctorList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    getDoctor();
  }, [render, sortOrder, sortBy, limit, page]);

  const customPrevButton = (
    <div className="custom-prev-buttonB">
      <img src="/images/Home/Services/Vector.svg" />
    </div>
  );

  const customNextButton = (
    <div className="custom-next-button">
      {" "}
      <img className="rotate-180" src="/images/Home/Services/Vector.svg" />
    </div>
  );

  const { openModalDownloadApp, setOpenModalDownloadApp } = useModalContext();
  return (
    <div className="w-full flex justify-center  sm:my-[20px] md:my-[20px] custom:my-[20px] my-[20px]">
      <div className="custom:w-[430px] md:w-[400px] sm:w-[375px] w-[350px] px-[12px] ">
        <div>
          <div>
            <div>
              <h1 className="sm:text-[14px] custom:text-[16px] md:text-[15px] text-[12px] font-noto font-bold text-[#101011] mb-[9px]">
                ঘরে বসেই দেশ সেরা নিউট্রিশনিস্টদের কনসাল্টেশন নিন
              </h1>
            </div>
            <div className=" custom:mb-[17px] md:mb-[8px] sm:mb-[17px] mb-[15px] ">
              <div className="custom:w-[418px] md:w-[388px] sm:w-[353px] w-[337px]  flex items-center justify-center  ">
                <div className="custom:w-[418px]  md:w-[388px] sm:w-[353px] w-[337px] ">
                  <Swiper
                    modules={[Navigation, A11y, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation={{
                      prevEl: ".custom-prev-buttonB",
                      nextEl: ".custom-next-button",
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                  >
                    <div>
                      {doctorsList?.map((doctor, i) => {
                        const {
                          workExperience,
                          oneline,
                          speciality,
                          consultationFee,
                          ratingData,
                        } = doctor;
                        const totalDuration = workExperience.reduce(
                          (total, experience) => {
                            return total + parseInt(experience.duration);
                          },
                          0
                        );
                        const ratingStar = Array.from({ length: 5 }, (e, i) => {
                          return (
                            <span key={i}>
                              {ratingData?.averageRating > i ? (
                                <FaStar className="text-[#ffe234] text-[10px]" />
                              ) : (
                                <AiOutlineStar className="text-[#ffe234] text-[10px]" />
                              )}
                            </span>
                          );
                        });
                        return (
                          <SwiperSlide>
                            <div className="custom:w-[115px] md:w-[100px]  sm:w-[95px] w-[90px] custom:h-[165px] md:h-[155px]  h-[134px] sm:h-[138px] ">
                              <div>
                                <div>
                                  <img
                                    className="custom:w-[115px] md:w-[100px] custom:h-[115px] md:h-[100px] sm:w-[95px] sm:h-[95px] w-[90px] h-[90px] rounded-full object-fill"
                                    src={doctor?.image}
                                  />
                                </div>
                                <div className="flex justify-center text-center mt-[5px]">
                                  <div>
                                    <div className="flex gap-x-[5px] items-center sm:ml-[8px] custom:ml-[11px] md:ml-[9px] ml-[7.5px]">
                                      {doctor?.name_bn.length > 10 ? (
                                        <h2 className="sm:text-[12px] custom:text-[14px] md:text-[13px] text-[11px] font-medium font-noto text-[#101011]">
                                          {doctor.name_bn.slice(0, 10)}..
                                        </h2>
                                      ) : (
                                        <h2 className="sm:text-[12px] custom:text-[14px] md:text-[13px] text-[11px] font-medium font-noto text-[#101011]">
                                          {doctor.name_bn}
                                        </h2>
                                      )}
                                      <div className="w-[5px] h-[5px] bg-[#008000] rounded rounded-full" />
                                    </div>
                                    <p className="sm:text-[8px] custom:text-[9.5px] md:text-[8px] text-[7px] font-normal font-noto text-[#101011] text-opacity-90 leading-[9px]">
                                      {doctor?.degree_bn}
                                    </p>
                                    <p className="sm:text-[8px] custom:text-[9.5px] md:text-[8px] text-[7px] font-normal font-noto text-[#101011] text-opacity-90">
                                      ({doctor?.subject_bn})
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => closeModalMobile(true)}
                className="w-[75px] h-[20px] rounded rounded-[20px] border border-[#101011] border-[0.5px] pt-[1.5px]"
              >
                <p className="text-[#101011] text-[12px] font-normal font-noto">
                  আরও দেখুন
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDoctorAndNutritionMobile;
