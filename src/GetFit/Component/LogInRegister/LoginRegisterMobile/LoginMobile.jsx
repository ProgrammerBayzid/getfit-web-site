import React from "react";

const LoginMobile = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="custom:w-[430px] md:w-[400px] sm:w-[375px] w-[350px] px-[12px] ">
        <div className="mt-[50px]">
          <div>
            <h1 className="font-poppins font-semibold text-[20px] leading-[30px] text-[#101011] text-center">
              <span className="text-[#C61E72]">Getfit</span> স্বাস্থ্য সেবায়
              <br /> আপনাকে স্বাগতম!
            </h1>
          </div>
          <div className="flex gap-5 mt-[35px]">
            <form className="">
              <h1 className="text-[#101011] text-opacity-90 text-[16px] font-noto font-normal leading-[21px] mb-[7px]">
                একটি স্বাস্থ্যকর জীবনধারা আলিঙ্গন করতে প্রস্তুত?
              </h1>
              <div className="relative ">
                <div className="flex gap-x-[7px] items-center absolute pt-[8px]  left-0 flex items-center pl-[12px] pointer-events-none">
                  <img
                    className="w-[28px] h-[16px]"
                    src="/images/Home/AppHome/flag.svg"
                  />
                  <p className="text-[#212427] font-inter text-[18px]">+88</p>
                </div>
                <input
                  type="tel"
                  maxLength="11"
                  //   value={phoneNumber}
                  //   onChange={handleInputChange}
                  // onBlur={handleBlur}
                  className=" placeholder:text-[#C7C8C9] border border-[#C61E72] h-[40px]  placeholder:text-[18px] sm:w-[345px] md:w-[372px] custom:w-[400px]   rounded pl-[85px] focus:outline-none  input   placeholder:font-normal text-[18px] pt-[px]"
                  placeholder="01635401965"
                />
              </div>
              <p className="text-[#101011] text-opacity-90 text-[14px] font-noto font-normal leading-[18px] mt-[10px]">
                প্রদত্ত নম্বরে ইতিমধ্যে একাউন্ট চালু থাকলে OTP যাচাইয়ের পর
                অটোমেটিক প্রোফাইলে লগইন হয়ে যাবে।
              </p>
              <div className="mt-[15px]">
                <button className="sm:w-[345px] md:w-[372px] custom:w-[400px] h-[40px] bg-[#C61E72] rounded text-[16px] text-white font-inter font-normal">
                  কোড সেন্ড করুন
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center">
            <div className="w-[101px]">
              <div className="flex items-center">
                <div className="w-[32px] h-[1px] bg-[#2594A4] bg-opacity-60"></div>
                <div>
                  <p className="w-[37px] h-[14px] border border-[1px] border-[#2594A4] border-opacity-60 rounded rounded-[20px] font-inter font-medium text-[10px] text-[#101011] flex justify-center my-[30px]">
                    অথবা
                  </p>
                </div>
                <div className="w-[32px] h-[1px] bg-[#2594A4] bg-opacity-60"></div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-inter font-medium text-[16px] leading-[30px] text-[#101011] text-center">
              লগ ইন/সাইন আপ করতে ব্যবহার করুন
            </h1>
          </div>
          <div className="flex justify-center">
            <div>
              <div className="grid grid-cols-2 gap-x-[18px] ">
                <div className="w-[130px] h-[40px] border border-[1px] border-[#101011] border-opacity-30 rounded flex items-center justify-center gap-x-[10px]">
                  <div>
                    <img src="/images/CommonLogo/google.svg" />
                  </div>
                  <div>
                    <p className="font-inter font-medium text-[16px] leading-[19px] text-[#101011] ">
                      গুগল
                    </p>
                  </div>
                </div>
                <div className="w-[130px] h-[40px] border border-[1px] border-[#101011] border-opacity-30 rounded flex items-center justify-center gap-x-[10px]">
                  <div>
                    <img src="/images/CommonLogo/facebook.svg" />
                  </div>
                  <div>
                    <p className="font-inter font-medium text-[16px] leading-[19px] text-[#101011] ">
                      গুগল
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-[18px]">
                <div className="w-[130px] h-[40px] border border-[1px] border-[#101011] border-opacity-30 rounded flex items-center justify-center gap-x-[10px]">
                  <div>
                    <img src="/images/CommonLogo/google.svg" />
                  </div>
                  <div>
                    <p className="font-inter font-medium text-[16px] leading-[19px] text-[#101011] ">
                      গুগল
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginMobile;
