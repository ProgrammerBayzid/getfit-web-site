import React, { useState } from "react";

const ServicesInformetion = () => {
  return (
    <div className="w-full h-[570px] flex justify-center mt-[80px]">
      <div className="">
        <div>
          <div className="xl:w-[1247px] lg:w-[1247px] w-[1247px] xl:h-[480px] lg:h-[480px] h-[480px] relative">
            <img
              className="xl:w-[1247px] lg:w-[1247px] w-[1247px] xl:h-[480px] lg:h-[480px] h-[480px] object-fill"
              src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708614365808Frame%2012107.png"
            />
            <div className="  ">
              <div className="absolute xl:top-[40px] lg:top-[40px] top-[40px]  left-0  px-[45px]">
                <h1 className="text-[30px]  text-[#101011] font-noto  font-bold leading-[45px]">
                  গেটফিট পারসোনালাইজড নিউট্রিশন সার্ভিস
                </h1>
                <h1 className="text-[24px]  text-[#101011] font-noto  font-normal leading-[31px]">
                  সবার জন্য নিউট্রিশনিস্ট দ্বারা কনসাল্টেশন
                </h1>
                <div className="mt-[45px]">
                  <div className="flex gap-x-[7px] items-center mb-[13px]">
                    <img
                      className="w-[14px] h-[14px]"
                      src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708743925009Group%2014486.png"
                    />
                    <p className="text-[16px]  text-[#101011] font-noto font-normal leading-[21px]">
                      সার্বক্ষণিক কাস্টমার সেবা
                    </p>
                  </div>
                  <div className="flex gap-x-[7px] items-center mb-[13px]">
                    <img
                      className="w-[14px] h-[14px]"
                      src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708743925009Group%2014486.png"
                    />
                    <p className="text-[16px]  text-[#101011] font-noto font-normal leading-[21px]">
                      অভিজ্ঞ নিউট্রিশনিস্ট দ্বারা কনসাল্টেশন
                    </p>
                  </div>
                  <div className="flex gap-x-[7px] items-center mb-[13px]">
                    <img
                      className="w-[14px] h-[14px]"
                      src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708743925009Group%2014486.png"
                    />
                    <p className="text-[16px]  text-[#101011] font-noto font-normal leading-[21px]">
                      পারসোনালাইজড প্যাকেজ
                    </p>
                  </div>
                  <div className="flex gap-x-[7px] items-center mb-[13px]">
                    <img
                      className="w-[14px] h-[14px]"
                      src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708743925009Group%2014486.png"
                    />
                    <p className="text-[16px]  text-[#101011] font-noto font-normal leading-[21px]">
                      জীবনধারা পরিবর্তন
                    </p>
                  </div>
                </div>
                <div className="mt-[50px] flex gap-[20px]">
                  <img
                    className="w-[149px] h-[50px]"
                    src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708614972268google-play.png"
                  />
                  <img
                    className="w-[149px] h-[50px]"
                    src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708614938150app-store.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesInformetion;
