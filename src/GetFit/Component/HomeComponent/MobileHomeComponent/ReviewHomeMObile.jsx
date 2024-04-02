import React from "react";
import { Navigation, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
const ReviewHomeMObile = ({ closeModalMobile }) => {
  return (
    <div className="w-full flex justify-center mb-[80px] mt-[30px]">
      <div className="custom:w-[430px] md:w-[400px] sm:w-[375px] w-[350px] px-[12px] ">
        <div>
          <div>
            <div>
              <h1 className="sm:text-[14px] custom:text-[16px] md:text-[15px] text-[12px] font-noto font-bold text-[#101011] mb-[9px] text-center">
                আমার গেটফিট
              </h1>
            </div>
            <div>
              <div className="custom:w-[418px] md:w-[388px] sm:w-[353px] w-[337px]  flex items-center justify-center  ">
                <div className="custom:w-[418px] md:w-[388px] sm:w-[353px] w-[337px]">
                  <Swiper
                    modules={[Navigation, A11y, Autoplay]}
                    spaceBetween={0}
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
                      <SwiperSlide>
                        <div className="custom:w-[108px] md:w-[108px]  sm:w-[108px] w-[100px] sm:h-[90px] custom:h-[90px] md:h-[90px] h-[85px]">
                          <div>
                            <div>
                              <img
                                className="rounded  custom:w-[108px] md:w-[108px]  sm:w-[108px] w-[100px] sm:h-[90px] custom:h-[90px] md:h-[90px] h-[85px] object-cover"
                                src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711338245138Frame%2012107.png"
                              />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="custom:w-[108px] md:w-[108px]  sm:w-[108px] w-[100px] sm:h-[90px] custom:h-[90px] md:h-[90px] h-[85px]">
                          <div>
                            <div>
                              <img
                                className="rounded  custom:w-[108px] md:w-[108px]  sm:w-[108px] w-[100px] sm:h-[90px] custom:h-[90px] md:h-[90px] h-[85px] object-cover"
                                src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711338385649Frame%2012152.png"
                              />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="custom:w-[108px] md:w-[108px]  sm:w-[108px] w-[100px] sm:h-[90px] custom:h-[90px] md:h-[90px] h-[85px]">
                          <div>
                            <div>
                              <img
                                className="rounded  custom:w-[108px] md:w-[108px]  sm:w-[108px] w-[100px] sm:h-[90px] custom:h-[90px] md:h-[90px] h-[85px] object-cover"
                                src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711338457562Frame%2012153.png"
                              />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="custom:w-[108px] md:w-[108px]  sm:w-[108px] w-[100px] sm:h-[90px] custom:h-[90px] md:h-[90px] h-[85px]">
                          <div>
                            <div>
                              <img
                                className="rounded  custom:w-[108px] md:w-[108px]  sm:w-[108px] w-[100px] sm:h-[90px] custom:h-[90px] md:h-[90px] h-[85px] object-cover"
                                src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711338502781Frame%2012107%20%281%29.png"
                              />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
            {/* <div className="flex justify-center mt-[17px]">
              <button
                type="button"
                onClick={() => closeModalMobile(true)}
                className="w-[60px] h-[20px] rounded rounded-[20px] border border-[#101011] border-[0.5px] pt-[1.5px]"
              >
                <p className="text-[#101011] text-[12px] font-normal font-noto">
                  সব দেখুন
                </p>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewHomeMObile;
