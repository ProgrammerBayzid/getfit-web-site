import React, { useState } from "react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useModalContext } from "../../Context/useModalContext";
import { useEffect } from "react";

const BestDoctorAndNutrition = () => {
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
      console.log(url);

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
      <img
        className="w-[9px] h-[16px]"
        src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711385041517Vector%2010.png"
      />
    </div>
  );

  const customNextButton = (
    <div className="custom-next-button">
      {" "}
      <img
        className="w-[9px] h-[16px] rotate-180"
        src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711385041517Vector%2010.png"
      />
    </div>
  );

  const { openModalDownloadApp, setOpenModalDownloadApp } = useModalContext();

  return (
    <div>
      <div className=" w-full  font-noto my-[120px] flex justify-center ">
        <div className="xl:w-[1366px] lg:w-[1280px] flex justify-center">
          <div>
            <div>
              <div className="flex justify-center">
                <h
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  className="font-bold  font-noto text-center xl:text-[33px] lg:text-[32px] xl:leading-[41px] lg:leading-[38px] text-[#000000] "
                >
                  দেশ সেরা নিউট্রিশনিস্ট এবং ডাক্তারদের থেকে কনসাল্টেশন নিন এখন
                  ঘরে বসেই
                </h>
              </div>

              <div className="">
                <div className="xl:w-[1366px] lg:w-[1280px]   flex items-center justify-center lg:gap-x-[15px]  mt-[45px]">
                  {customPrevButton}
                  <div className="xl:w-[1200px] lg:w-[1150px] xl:ml-[20px]">
                    <Swiper
                      modules={[Navigation, A11y, Autoplay]}
                      spaceBetween={10}
                      slidesPerView={3}
                      navigation={{
                        prevEl: ".custom-prev-buttonB",
                        nextEl: ".custom-next-button",
                      }}
                      autoplay={{ delay: 8000, disableOnInteraction: false }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log("slide change")}
                    >
                      <div>
                        {doctorsList?.map((doctor, i) => {
                          const {
                            workExperience,
                            online,
                            speciality,
                            consultationFee,
                            ratingData,
                          } = doctor;
                          const firstSpeciality = speciality[0];
                          const firstPackage = firstSpeciality.packages;
                          const firstPackageTitleAndPrice =
                            firstPackage.priceAndDuration[0];

                          const totalDuration = workExperience.reduce(
                            (total, experience) => {
                              return total + parseInt(experience.duration);
                            },
                            0
                          );
                          const ratingStar = Array.from(
                            { length: 5 },
                            (e, i) => {
                              return (
                                <span key={i}>
                                  {ratingData?.averageRating > i ? (
                                    <FaStar className="text-[#ffe234] text-[9px]" />
                                  ) : (
                                    <AiOutlineStar className="text-[#ffe234] text-[9px]" />
                                  )}
                                </span>
                              );
                            }
                          );
                          return (
                            <SwiperSlide>
                              <div
                                data-aos="zoom-in-up"
                                className=" relative xl:w-[378px] lg:w-[375px] h-[270px]  border-[0.1px] border-[#101011] border-opacity-20 rounded-[12px] px-[20px] py-[18px] "
                              >
                                <div>
                                  <div className="flex justify-between">
                                    <div className="w-[210px]">
                                      <div>
                                        <div className="flex gap-x-[8px] items-center">
                                          {doctor.name_bn.length > 18 ? (
                                            <div>
                                              <div className="whitespace-nowrap tooltip-trigger relative group">
                                                <p className="font-bold font-noto text-[17px] text-[#212427]  leading-[21px] ">
                                                  {doctor.name_bn.slice(0, 18)}
                                                  ..
                                                </p>

                                                <p className="tooltip absolute z-40 bg-[#C61E72] text-white px-2 py-[4px] rounded-md mt-[5px] ml-[-3px] invisible group-hover:opacity-100 group-hover:visible transition text-[#101011] font-normal text-[11px] font-pop">
                                                  {doctor?.name_bn}
                                                </p>
                                              </div>
                                            </div>
                                          ) : (
                                            <p className="font-bold font-noto text-[17px] text-[#212427]  leading-[21px] ">
                                              {doctor.name_bn}
                                            </p>
                                          )}
                                          <div className="flex gap-x-[2px] items-center">
                                            {online === true ? (
                                              <div className="w-[10px] h-[10px] bg-[#008000] rounded rounded-full" />
                                            ) : (
                                              <div className="w-[10px] h-[10px] bg-[#636363] rounded rounded-full" />
                                            )}

                                            <p className="font-normal font-inter text-[16px] text-[#232824]  leading-[19px] ">
                                              {online === true
                                                ? "Online"
                                                : "Offline"}
                                            </p>
                                          </div>
                                        </div>
                                        <div>
                                          <p className="font-normal font-noto text-[13px] text-[#101011]   leading-[18px] mt-[5px]  ">
                                            {doctor?.degree_bn}
                                          </p>
                                          <p className="font-normal font-noto text-[13px] text-[#101011]   leading-[14px] ">
                                            {doctor?.subject_bn}
                                          </p>
                                          <p className="font-normal font-noto text-[13px] text-[#101011]  leading-[14px] mt-[3px] ">
                                            {totalDuration} বছরের অভিজ্ঞতা
                                          </p>

                                          <p className="font-normal font-noto text-[13px] text-[#707073]  leading-[14px] mt-[5px]">
                                            স্পেশালিস্ট{" "}
                                            {speciality.length > 0 &&
                                              speciality.map((sp, i) => {
                                                return (
                                                  <span key={i}>
                                                    <span className="text-[#101011] ">
                                                      {sp.title_bn}
                                                    </span>
                                                    {i <
                                                      speciality.length - 1 &&
                                                      ", "}
                                                  </span>
                                                );
                                              })}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex gap-x-[25px] mt-[10px]">
                                        <div>
                                          <p className="font-medium font-inter text-[17px] text-[#C61E72]  leading-[21px] text-center">
                                            <span className="font-noto">৳</span>{" "}
                                            {consultationFee?.consultationFee}
                                          </p>
                                          <p className="font-normal font-noto text-[10px] text-[#101011] text-opacity-90  leading-[9px] mt-[2px]">
                                            প্রতি কনসাল্টেশন ফি
                                          </p>
                                        </div>
                                        <div>
                                          <button
                                            type="button"
                                            onClick={() =>
                                              setOpenModalDownloadApp(true)
                                            }
                                            className="flex gap-x-[6px] w-[98px] h-[30px] rounded rounded-[25px] bg-[#F7DDEA] items-center justify-center pt-[1px]"
                                          >
                                            <div>
                                              <img
                                                className="w-[16px] h-[13px]"
                                                src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708615459001Frame%20%282%29.png"
                                              />
                                            </div>
                                            <p className="font-medium font-inter text-[15px] text-[#C61E72]  leading-[16px] mt-[3px] ">
                                              কল করুন
                                            </p>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <img
                                        className="rounded rounded-full w-[90px] h-[90px]"
                                        src={doctor?.image}
                                      />
                                      <div className="flex gap-x-1 items-center justify-center mt-[10px]">
                                        {ratingStar}
                                        <p className="font-medium text-[9px] text-[#212427] text-opacity-50 leading-[11px] mt-[2px]">
                                          {ratingData?.averageRating}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute inset-x-0 bottom-[14px]">
                                    <div className="flex items-center mt-[15px] px-[17px]">
                                      <div className="w-full h-[0.07px] bg-[#2594A4] bg-opacity-30"></div>
                                      <div>
                                        <p className="  w-[30px] h-[12px] border-[0.07px] border-[#2594A4] border-opacity-30 rounded rounded-[20px] flex items-center pt-[1px] justify-center font-inter text-[8px] text-[#000000] font-medium">
                                          অথবা
                                        </p>
                                      </div>
                                      <div className="w-full h-[0.07px] bg-[#2594A4] bg-opacity-30"></div>
                                    </div>

                                    <div className="flex justify-between mt-[7px] px-[17px]">
                                      <p className="font-medium font-noto text-[16px] text-[#101011]  leading-[19px]  ">
                                        {firstPackageTitleAndPrice?.title_bn}{" "}
                                        <br />৳
                                        <span className="">
                                          {" "}
                                          {firstPackageTitleAndPrice?.price_en}
                                          /-
                                        </span>
                                      </p>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          setOpenModalDownloadApp(true)
                                        }
                                        className=" w-[107px] h-[30px] rounded rounded-[25px] border-[1px] border-[0.8px] border-[#C61E72] items-center justify-center pt-[2px]"
                                      >
                                        <p className="font-medium font-noto text-[15px] text-[#C61E72]  leading-[16px] ">
                                          প্যাকেজ কিনুন
                                        </p>
                                      </button>
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
                  {customNextButton}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDoctorAndNutrition;
