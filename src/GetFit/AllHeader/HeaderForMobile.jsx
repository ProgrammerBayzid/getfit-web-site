import React from "react";

const HeaderForMobile = ({closeModalMobile}) => {
  return (
    <div className="w-full flex justify-center items-center h-[50px] pt-[6px] bg-white block lg:hidden  fixed bottom-0 z-40">
      <div className=" custom:w-[430px] md:w-[400px] sm:w-[375px] w-[350px] px-[12px]  ">
        <div>
          <div className=" flex  justify-between  ">
            <div className=" ">
              <div className="flex justify-center">
                <img src="/images/Home/HomeHeader/home.svg" />
              </div>

              <p className="text-[14px] font-normal font-noto text-[#C61E72]">
                হোম
              </p>
            </div>
            <div className="" onClick={() => closeModalMobile(true)}>
              <div className="flex justify-center">
                <img src="/images/Home/HomeHeader/package.svg" />
              </div>

              <p className="text-[14px] font-normal font-noto text-[#C61E72]">
                প্যাকেজ
              </p>
            </div>
            <div className="" onClick={() => closeModalMobile(true)}>
              <div className="flex justify-center">
                <img src="/images/Home/HomeHeader/consaltent.svg" />
              </div>

              <p className="text-[14px] font-normal font-noto text-[#C61E72]">
                কনসাল্টেশন
              </p>
            </div>
            <div className="" onClick={() => closeModalMobile(true)}>
              <div className="flex justify-center">
                <img src="/images/Home/HomeHeader/doctor.svg" />
              </div>

              <p className="text-[14px] font-normal font-noto text-[#C61E72]">
                ডাক্তার
              </p>
            </div>
            <div className="" onClick={() => closeModalMobile(true)}>
              <div className="flex justify-center">
                <img src="/images/Home/HomeHeader/more.svg" />
              </div>

              <p className="text-[14px] font-normal font-noto text-[#C61E72]">
                আরও
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderForMobile;
