import React, { useState } from "react";

const OtpMObile = () => {
  const [code, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...code.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <div className="w-full flex justify-center mt-[20px]">
      <div className="custom:w-[430px] md:w-[400px] sm:w-[375px] w-[350px] px-[12px] ">
        <div>
          <div>
            <div>
              <img src="/images/CommonLogo/backButtonIconForMobile.svg" />
            </div>
          </div>
          <div>
            <h1 className="font-poppins font-semibold text-[20px] leading-[30px] text-[#101011] text-center">
              আপনার ফোন নাম্বার
              <br /> ভেরিফাই করুন
            </h1>
          </div>
          <div>
            <h1 className="font-noto font-normal text-[14px] leading-[18px] text-[#101011] text-center mt-[10px]">
              01756748675 নম্বরে কোড পাঠানো হয়েছে
            </h1>
            <h1 className="font-noto font-normal text-[12px] leading-[18px] text-[#101011] text-center mt-[8px]">
              কোনো কোড পাননি? পুনরায় কোড পাঠান 40
            </h1>
          </div>
          <div className="mt-[15px]">
            <form>
              <div className="flex justify-center">
                <div className=" flex gap-5">
                  {code.map((data, index) => {
                    return (
                      <input
                        type="text"
                        name="otp"
                        key={index}
                        value={data}
                        onChange={(e) => handleChange(e.target, index)}
                        onFocus={(e) => e.target.select()}
                        maxLength="1"
                        className="focus:outline-none  border border-[1px] border-[#101011] border-opacity-30 rounded pl-[31px] w-[62px] h-[40px] mb-4 "
                      />
                    );
                  })}
                </div>
              </div>
              <div>
                <h1 className="font-noto font-normal text-[14px] leading-[18px] text-[#101011] text-center mt-[5px]">
                  4 ডিজিটের কোডটি দিন
                </h1>
              </div>
              <div className="mt-[17px]">
                <button className="sm:w-[345px] md:w-[372px] custom:w-[400px] h-[40px] bg-[#C61E72] rounded text-[16px] text-white font-inter font-normal">
                  সাবমিট
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpMObile;
