import React from "react";

const HeaderMobile = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="sm:w-[375px] md:w-[400px] custom:w-[430px] w-[350px] px-[12px]  mt-[10px]">
        <div className="">
          <div className="flex justify-between items-center">
            <div className="">
              <div>
                <img src="/images/Home/HomeHeader/aro.svg" />
              </div>
            </div>
            <div>
              <button className="w-[179px] h-[26px] rounded-[10px] bg-[#C61E72] flex items-center justify-center gap-x-1">
                <img src="/images/Home/HomeHeader/clander.svg" />
                <p className="font-inter text-[12px] font-normal text-white mt-[3px]">
                  ফিটনেস ক্যালকুলেটর
                </p>
              </button>
            </div>
            <div className="">
              <div>
                <img src="/images/Home/HomeHeader/notifecation.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
