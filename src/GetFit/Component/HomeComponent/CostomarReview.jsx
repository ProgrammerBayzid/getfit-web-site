import React from "react";
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
import { useState } from "react";

const CostomarReview = () => {
  const costomarReview = [
    {
      image:
        "https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708610674967Frame%2011794.png",
      name: "রাজিয়া সুলতানা",
      location: " উত্তরা, ঢাকা",
      designation: "এনজিও ম্যানেজার",
      category: "ওয়েট লস",
      review:
        "গেটফিটের পারসোনালাইজড অয়েট লস ডায়েট প্ল্যান আমার জীবনে দারুণ পরিবর্তন এনেছে। মাত্র দুই মাসে আমি প্রায় ৬ কেজি ওজন কমাতে সক্ষম হয়েছি। আমার অতিরিক্ত ওজন কমানোর বিষয় নিয়ে আমি অনেকদিন ধরেই রিসার্চ করেছি। একবার জিমেও ভর্তি হয়েছিলাম কিন্তু চাকুরী ও অন্যান্য ব্যাস্ততার কারনে নিয়মিত যাওয়া হয়নি। তাই অতিরিক্ত ওজন নিয়ে দিন দিন হতাশ হয়ে যাচ্ছিলাম। কিন্তু গেটফিট নিউট্রিশনিস্টের নিয়মিত ফলো-আপ এবং ডায়েট প্ল্যান অনুসরণ করে ওজন কমিয়ে আগের থেকে অনেক ভালো জীবন যাপন করছি। অসংখ্য ধন্যবাদ গেটফিট টিম কে।  ",
    },
    {
      image:
        "https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708610527073Frame%2012103.png",
      name: "রাজিয়া সুলতানা",
      location: " উত্তরা, ঢাকা",
      designation: "এনজিও ম্যানেজার",
      category: "PCOS/PCOD",
      review:
        "গেটফিটের পারসোনালাইজড অয়েট লস ডায়েট প্ল্যান আমার জীবনে দারুণ পরিবর্তন এনেছে। মাত্র দুই মাসে আমি প্রায় ৬ কেজি ওজন কমাতে সক্ষম হয়েছি। আমার অতিরিক্ত ওজন কমানোর বিষয় নিয়ে আমি অনেকদিন ধরেই রিসার্চ করেছি। একবার জিমেও ভর্তি হয়েছিলাম কিন্তু চাকুরী ও অন্যান্য ব্যাস্ততার কারনে নিয়মিত যাওয়া হয়নি। তাই অতিরিক্ত ওজন নিয়ে দিন দিন হতাশ হয়ে যাচ্ছিলাম। কিন্তু গেটফিট নিউট্রিশনিস্টের নিয়মিত ফলো-আপ এবং ডায়েট প্ল্যান অনুসরণ করে ওজন কমিয়ে আগের থেকে অনেক ভালো জীবন যাপন করছি। অসংখ্য ধন্যবাদ গেটফিট টিম কে।  ",
    },
    {
      image:
        "https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708610527073Frame%2012103.png",
      name: "রাজিয়া সুলতানা",
      location: " উত্তরা, ঢাকা",
      designation: "এনজিও ম্যানেজার",
      category: "PCOS/PCOD",
      review:
        "গেটফিটের পারসোনালাইজড অয়েট লস ডায়েট প্ল্যান আমার জীবনে দারুণ পরিবর্তন এনেছে। মাত্র দুই মাসে আমি প্রায় ৬ কেজি ওজন কমাতে সক্ষম হয়েছি। আমার অতিরিক্ত ওজন কমানোর বিষয় নিয়ে আমি অনেকদিন ধরেই রিসার্চ করেছি। একবার জিমেও ভর্তি হয়েছিলাম কিন্তু চাকুরী ও অন্যান্য ব্যাস্ততার কারনে নিয়মিত যাওয়া হয়নি। তাই অতিরিক্ত ওজন নিয়ে দিন দিন হতাশ হয়ে যাচ্ছিলাম। কিন্তু গেটফিট নিউট্রিশনিস্টের নিয়মিত ফলো-আপ এবং ডায়েট প্ল্যান অনুসরণ করে ওজন কমিয়ে আগের থেকে অনেক ভালো জীবন যাপন করছি। অসংখ্য ধন্যবাদ গেটফিট টিম কে।  ",
    },
  ];
  const customPrevButton = (
    <div className="custom-prev-buttonB">
      <img
        className="w-[7px] h-[14px]"
        src="https://getfit-image-file.s3.amazonaws.com/1708573442250Vector%2010.png"
      />
    </div>
  );

  const customNextButton = (
    <div className="custom-next-button">
      {" "}
      <img
        className="rotate-180 w-[7px] h-[14px]"
        src="https://getfit-image-file.s3.amazonaws.com/1708573442250Vector%2010.png"
      />
    </div>
  );

  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    <div className="w-full h-[631px] flex justify-center">
      <div className="xl:w-[1366px] lg:w-[1280px] h-[631px] flex justify-center ">
        <div>
          <div className="mt-[60px] w-[1250px]">
            <div className=" ">
              <h1
                data-aos="fade-zoom-in"
                className="text-center font-bold  font-noto xl:text-[40px] lg:text-[39px] leading-[40px] text-[#141515] pt-[40px]"
              >
                আমাদের সেবা সম্পর্কে গ্রাহকদের মূল্যবান মতামত
              </h1>
            </div>
            <div className="mt-[50px]">
              <div
                // data-aos="fade-up"
                className="mt-[10px] flex justify-center "
              >
                <div className=" w-[1250px] h-[360px]">
                  <Swiper
                    modules={[
                      Navigation,
                      Pagination,
                      A11y,
                      Autoplay,
                      Scrollbar,
                      EffectFade,
                    ]}
                    spaceBetween={70}
                    slidesPerView={1.5}
                    navigation={{
                      prevEl: ".custom-prev-buttonB",
                      nextEl: ".custom-next-button",
                    }}
                    // autoplay={{ delay: 3000, disableOnInteraction: false }}
                    onSwiper={(swiper) => setSwiper(swiper)}
                    onSlideChange={handleSlideChange}
                  >
                    {costomarReview.map((ctr, index) => {
                      const { category } = ctr;
                      return (
                        <SwiperSlide key={index}>
                          <div
                            className={`w-full ${
                              index === 0
                                ? "h-full"
                                : "h-[50%] xl:h-full lg:h-[50%]"
                            }`}
                          >
                            <div
                              className={
                                category === "ওয়েট লস"
                                  ? "w-[850px] h-[358px] bg-[#F5F5F5] flex gap-x-[30px] rounded-[10px]"
                                  : "w-[850px] h-[358px] bg-[#F5F5F5] flex gap-x-[30px] rounded-[10px]"
                              }
                            >
                              <div
                                className={
                                  category === "ওয়েট লস"
                                    ? "w-[420px]"
                                    : "w-[290px]"
                                }
                              >
                                <img
                                  className={
                                    category === "ওয়েট লস"
                                      ? "w-[410px] h-[358px] object-fill rounded-l-[10px]"
                                      : "w-[286px] h-[358px] object-fill rounded-l-[10px]"
                                  }
                                  src={ctr.image}
                                />
                              </div>
                              <div className="w-1/2 mt-[20px] h-[316px] relative pr-[20px]">
                                <h3 className="font-noto font-normal text-[15px] leading-[21px] text-[#101011] text-start">
                                  {ctr.review}
                                </h3>
                                <div className="w-full bg-[#B0B0B1] h-[1px] my-[13px]"></div>
                                <div className="">
                                  <p className="font-inter font-bold text-[16px] text-[#101011] leading-[25px]">
                                    {ctr.name},
                                  </p>
                                </div>
                                <div className="flex items-center gap-x-[5px] mt-[] absolute inset-x-0 ">
                                  <p className="font-inter font-medium text-[14px] text-[#101011] leading-[21px]">
                                    {ctr.designation},
                                  </p>
                                  <p className="font-inter font-medium text-[14px] text-[#101011] leading-[21px]">
                                    {ctr.location}
                                  </p>
                                </div>
                                <div className="mt-[25px]">
                                  <button className="bg-[#AA105D] px-[10px] h-[24px]  rounded-[15px]  font-noto font-medium text-white text-[14px] leading-[18px] pt-[4px] ">
                                    {ctr.category}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-[30px]">
            <div className="flex gap-x-[15px]">
              {customPrevButton}
              <div className="flex items center gap-x-[10px] mt-[2.5px]">
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className={`h-[8px] w-[38px]  rounded-[10px]  cursor-pointer  ${
                      activeIndex === index - 1
                        ? "bg-[#C61E72]"
                        : "bg-[#D9D9D9]"
                    }`}
                    onClick={() => handlePaginationClick(index - 1)}
                  ></div>
                ))}
              </div>
              {customNextButton}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostomarReview;
