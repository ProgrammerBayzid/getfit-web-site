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
import { useModalContext } from "../../Context/useModalContext";

const PackageDetails = () => {
  const [packageData, setPackageData] = useState([]);
  const [packageDataDuration, setPackageDataDuration] = useState([]);
  const [loading, setLoading] = useState(true);
  const [duration, setDuration] = useState(0);
  const [planId, setPlanId] = useState("");
  const [durationFilter, setDurationFilter] = useState([]);

  console.log(durationFilter);
  const duration_status = (status) => {
    setDuration(status);
  };
  console.log(duration);
  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      let url = "https://api.getfit.com.bd/package";
      // if (duration !== 0) {
      //   url += `?duration=${duration}`;
      // }
      // console.log(url);
      fetch(url)
        .then((res) => {
          if (res.status === 401) {
            console.log("Unauthorized error");
          }
          return res.json();
        })
        .then((data) => {
          if (data) {
            setPackageData(data);
            const flattenedData = data.flatMap((item) => {
              const { _id, image, priceAndDuration } = item;
              return priceAndDuration.map((obj) => ({ ...obj, _id, image }));
            });
            let filteredData = flattenedData;

            if (duration !== 0) {
              filteredData = flattenedData.filter(
                (obj) => obj.duration_en === duration
              );
            }

            setDurationFilter(filteredData);
          }
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        })
        .finally(() => {
          setLoading(false); // Mark the loading as complete
        });
    };

    fetchData(); // Call fetchData directly since it's not used elsewhere
  }, [duration]);

  // const durationSet = new Set();

  // // Mapping over each package object
  // packageData.forEach((packageItem) => {
  //   // Mapping over priceAndDuration array of each package
  //   packageItem.priceAndDuration.forEach((item) => {
  //     // Adding duration_en value to the set
  //     durationSet.add(item.duration_en);
  //   });
  // });
  // console.log(durationSet);

  // // Converting set back to an array
  // const durationArray = Array.from(durationSet);

  useEffect(() => {
    const fetchpackageDataDuration = () => {
      setLoading(true);
      let url = "https://api.getfit.com.bd/package";
      fetch(url)
        .then((res) => {
          if (res.status === 401) {
            console.log("Unauthorized error");
          }
          return res.json();
        })
        .then((data) => {
          if (data) {
            setPackageDataDuration(data);
            console.log(data);
          }
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        })
        .finally(() => {
          setLoading(false); // Mark the loading as complete
        });
    };

    fetchpackageDataDuration();
  }, []);
  const durationArray = [];
  const isNotDuplicate = (value) => {
    return !durationArray.includes(value);
  };
  packageDataDuration.forEach((packageItem) => {
    packageItem.priceAndDuration.forEach((item) => {
      if (isNotDuplicate(item.duration_en)) {
        durationArray.push(item.duration_en);
      }
    });
  });

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
    <div className="w-full h-[530px] flex justify-center mt-[90px]">
      <div className="xl:w-[1366px] lg:w-[1280px] h-[530px] flex justify-center">
        <div className=" ">
          <div>
            <div>
              <h1
                data-aos="fade-zoom-in"
                className="text-center font-bold  font-noto xl:text-[40px] lg:text-[39px] leading-[40px] text-[#101011] pt-[40px]"
              >
                আপনার জন্য তৈরি করা পারসোনালাইজড প্যাকেজ সম্পর্কে জানুন{" "}
              </h1>
            </div>
            <div
              data-aos="fade-up"
              className="mt-[10px] xl:w-[1366px] lg:w-[1280px]  flex justify-center items-center xl:gap-x-[25px] lg:gap-x-[17px] px-[20px]"
            >
              {customPrevButton}
              <div className="mt-[40px] xl:w-[1180px] lg:w-[1100px]">
                <Swiper
                  modules={[
                    Navigation,
                    A11y,
                    Pagination,
                    Scrollbar,
                    EffectFade,
                    Autoplay,
                  ]}
                  spaceBetween={5}
                  slidesPerView={3}
                  navigation={{
                    prevEl: ".custom-prev-buttonB",
                    nextEl: ".custom-next-button",
                  }}
                  // autoplay={{ delay: 3000, disableOnInteraction: false }}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {durationFilter.map((pd, index) => (
                    <SwiperSlide key={index}>
                      <div>
                        <div className="xl:w-[372px] lg:w-[355px] h-[323px]  border-[0.01px] border-[#B7B7B8] border-opacity-50 rounded-[10px] px-[20px] p-[20px] bg-[#FFFFFF]">
                          <div>
                            <div className="w-[330px] h-[159px]">
                              <img
                                className="w-[330px] h-[159px] rounded-[10px]"
                                src={pd.image}
                              />
                            </div>
                            <div className="mt-[11px] h-[18px]">
                              <p className="font-bold font-inter text-[14px] text-[#212427]  leading-[16px] ">
                                {pd.title_bn}
                              </p>
                            </div>
                            <div className="flex justify-between mt-[10px]">
                              <p className="font-medium font-noto text-[14px] text-[#101011] pt-[4px] leading-[16px]">
                                {" "}
                                মূল্য ৳{pd.price_bn}/-
                              </p>
                              <div className="flex gap-x-[7px]">
                                <button
                                  type="button"
                                  onClick={() => setOpenModalDownloadApp(true)}
                                  className="w-[100px] h-[31px] rounded rounded-[10px] bg-[#C61E72] font-light font-noto text-[15px] text-[#FFFFFF] pt-[4px] leading-[16px]"
                                >
                                  এখনই কিনুন
                                </button>
                              </div>
                            </div>
                            <div className="flex justify-between mt-[22px] bottom-1">
                              <div className="w-[160px]">
                                <div className="flex gap-x-[8px] items-center">
                                  <img
                                    src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711385145680Vector.png"
                                    className="w-[18px] h-[18px]"
                                  />
                                  <p className="text-[#101011] font-noto  text-[12px] text-normal leading-[14px]">
                                    অভিজ্ঞ নিউট্রিশনিস্ট দ্বারা কনসাল্টেশন
                                  </p>
                                </div>
                              </div>
                              <div className="w-[120px]">
                                <div className="flex gap-x-[8px] items-center">
                                  <img
                                    src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711385199808Group.png"
                                    className="w-[22px] h-[22px]"
                                  />
                                  <p className="text-[#101011] font-noto  text-[12px] text-normal leading-[14px]">
                                    আনলিমিটেড কনসাল্টেশন কল
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {customNextButton}
            </div>
          </div>
          <div>
            <div className="flex justify-center mt-[40px]">
              <div>
                <div className="flex  xl:gap-x-[14px] lg:gap-x-[10px]">
                  {durationArray.map((dur, index) => (
                    <button
                      type="button"
                      onClick={() =>
                        duration === dur
                          ? duration_status(0)
                          : duration_status(dur)
                      }
                      className={`${
                        duration === dur
                          ? "w-[66px] h-[31px] rounded rounded-[20px] bg-[#C61E72] font-semibold font-noto text-[14px] text-[#FFFFFF] pt-[4px] leading-[16px]"
                          : "w-[66px] h-[31px] rounded rounded-[20px] border border-[#C61E72] font-medium font-noto text-[14px] text-[#101011] pt-[4px] leading-[16px]"
                      }`}
                    >
                      {dur} মাস
                    </button>
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

export default PackageDetails;
