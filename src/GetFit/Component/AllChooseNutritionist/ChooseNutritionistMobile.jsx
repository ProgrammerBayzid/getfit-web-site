import React from "react";

const ChooseNutritionistMobile = () => {
  return (
    <div className="w-full flex justify-center mt-[20px]">
      <div className="custom:w-[430px] md:w-[400px] sm:w-[375px] w-[350px] px-[12px] ">
        <div>
          <div className="mt-[8px]">
            <div className="flex items-center justify-between ">
              <div className="w-[10px]">
                <img src="/images/CommonLogo/backButtonIconForMobile.svg" />
              </div>
              <div>
                <h1 className="text-[#101011] font-semibold font-inter text-[15px]">
                  আপনার নিউট্রিশনিস্ট পছন্দ করুন
                </h1>
              </div>
              <div className="">
                <div className="flex items-center gap-x-[5px] ">
                  <div>
                    <img
                      className="w-[10.5px] h-[11px]"
                      src="/images/CommonLogo/filter.svg"
                    />
                  </div>
                  <h1 className="text-[#101011] font-normal font-inter text-[14px]">
                    ফিল্টার
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[12px]">
            <div className="relative sm:w-[352px] md:w-[377px] custom:w-[407px] h-[150px]  border border-[0.5px] border-[#101011] border-opacity-30 p-[10px]  flex justify-between rounded-[5px]">
              <div>
                <div className="flex gap-x-[7px]">
                  <div>
                    <h1 className="font-medium font-noto text-[15px] text-[#101011]  leading-[18px] ">
                      রুবাইয়াত খান
                    </h1>
                  </div>
                  <div className="flex gap-x-[3px] items-center">
                    <div className="">
                      <div className="w-[8px] h-[8px] rounded-full bg-[#008000]"></div>
                    </div>
                    <div>
                      <h1 className="font-normal font-inter text-[12px] text-[#101011]  leading-[14px] ">
                        Online
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="mt-[7px]">
                  <h1 className="font-normal font-inter text-[12px] text-[#101011]  leading-[14px] text-opacity-90 ">
                    বিএসসি (ফুড এন্ড নিউট্রিশন সায়েন্স)
                  </h1>
                  <h1 className="font-normal font-inter text-[12px] text-[#101011]  leading-[14px] text-opacity-90 ">
                    ৩ বছরের অভিজ্ঞতা
                  </h1>
                  <h1 className="font-normal font-inter text-[12px] text-[#101011]  leading-[14px] ">
                    ঢাকা মেডিকেল কলেজ
                  </h1>
                  <div className="my-[5px]">
                    <h1 className="font-normal font-inter text-[12px] text-[#101011] text-opacity-70  leading-[14px] ">
                      <span className="font-normal font-inter text-[12px] text-[#101011]   leading-[14px] ">
                        স্পেশালিস্ট
                      </span>{" "}
                      ঢাকা মেডিকেল কলেজ
                    </h1>
                    <h1 className="font-normal font-inter text-[12px] text-[#101011] text-opacity-70  leading-[14px] ">
                      থাইরয়েড বেবী নিউট্রিশন, প্রেগন্যান্সি
                    </h1>
                  </div>
                  <div className="flex gap-x-[5px] items-center">
                    <div>
                      <img src="/images/CommonLogo/vdocallicon.svg" />
                    </div>
                    <div>
                      <h1 className="font-normal font-inter text-[12px] text-[#C61E72]   leading-[14px] ">
                        প্যাকেজ কেনার পূর্বে কল করুন
                      </h1>
                    </div>
                    <div>
                      <h1 className="font-medium font-inter text-[12px] text-[#101011]   leading-[14px] text-center ">
                        ৳400
                      </h1>
                      <h1 className="font-normal font-inter text-[6px] text-[#101011]  leading-[7px] text-center">
                        প্রতি কনসাল্টেশন
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="/images/CommonLogo/d.svg"
                    className="w-[60px] h-[60px] object-fill rounded-full"
                  />
                </div>
                <div className="flex justify-center mt-[8px]">
                  <div>
                    <h1 className="font-medium font-inter text-[10px] text-[#101011]  leading-[12px] text-center text-opacity-80 ">
                      4.8
                    </h1>
                    <img
                      className="w-[55px]"
                      src="/images/CommonLogo/star.svg"
                    />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2">
                  <img src="/images/CommonLogo/moveForword.svg" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseNutritionistMobile;
