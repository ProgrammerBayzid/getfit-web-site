import React from "react";

const ContactUsWeb = () => {
  return (
    <div className="w-full h-[1000px] flex justify-center">
      <div className="xl:w-[1366px] lg:w-[1280px]  flex justify-center ">
        <div>
          <div className="mt-[60px]">
            <div className=" ">
              <h1 className="text-center font-inter  font-noto xl:text-[28px] lg:text-[6px] leading-[33px] text-[#101011]">
              Thanks for being with us
              </h1>
              {/* <h1 className="text-center font-bold  font-noto xl:text-[28px] lg:text-[6px] leading-[33px] text-[#101011]">
                আমাদের সেবা সম্পর্কে গ্রাহকদের মূল্যবান
              </h1> */}
            </div>
            <div className="w-[825px] h-[183px] mt-[50px]">
              <p className=" font-normal  font-inter xl:text-[16px] lg:text-[16px] leading-[21px] text-[#101011] text-opacity-70 mb-[5px]">
              Contact us if you have any queries. We will be happy to help you with.
              </p>
              {/* <p className=" font-normal  font-noto xl:text-[16px] lg:text-[16px] leading-[21px] text-[#101011] text-opacity-70 mb-[5px]">
                আপনার যদি কোন জিজ্ঞাসা থাকে আমাদের সাথে যোগাযোগ করুন। আপনাকে
                সাহায্য করতে পারলে আমরা আনন্দিত হব।
              </p> */}
              <input
                className="w-[825px] h-[183px] border border-[0.5px] border-opacity-30 rounded-[10px]  placeholder:font-normal  placeholder:font-noto placeholder:text-[16px] placeholder:leading-[21px] placeholder:text-[#101011] placeholder:text-opacity-70 pb-[130px] pl-[10px] outline-none
                
                font-normal  font-noto xl:text-[16px] lg:text-[16px] leading-[21px] text-[#101011] text-opacity-70
                "
                placeholder="Write Here"
              />
              {/* <input
                className="w-[825px] h-[183px] border border-[0.5px] border-opacity-30 rounded-[10px]  placeholder:font-normal  placeholder:font-noto placeholder:text-[16px] placeholder:leading-[21px] placeholder:text-[#101011] placeholder:text-opacity-70 pb-[130px] pl-[10px] outline-none
                
                font-normal  font-noto xl:text-[16px] lg:text-[16px] leading-[21px] text-[#101011] text-opacity-70
                "
                placeholder="এখানে লিখুন"
              /> */}
              <div className="flex justify-end mt-[15px]">
                <button className="w-[126px] h-[36px] rounded rounded-[3px] bg-[#C61E72] font-normal font-inter text-[16px] text-[#FFFFFF] pt-[4px] leading-[19px]">
                Submit
                </button>
                {/* <button className="w-[126px] h-[36px] rounded rounded-[3px] bg-[#C61E72] font-normal font-noto text-[16px] text-[#FFFFFF] pt-[4px] leading-[19px]">
                  পাঠিয়ে দিন
                </button> */}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center mt-[120px] mb-[60px]">
                <div className="w-[95px] h-[0.2px] bg-[#2594A4] bg-opacity-60"></div>
                <div>
                  <p className="  w-[48px] h-[20px] border-[0.2px] border-[#2594A4] border-opacity-60 rounded rounded-[20px] flex items-center pt-[4px] justify-center font-inter text-[13px] text-[#000000] font-medium">
                    or
                  </p>
                  {/* <p className="  w-[48px] h-[20px] border-[0.2px] border-[#2594A4] border-opacity-60 rounded rounded-[20px] flex items-center pt-[4px] justify-center font-noto text-[13px] text-[#000000] font-medium">
                    অথবা
                  </p> */}
                </div>
                <div className="w-[95px] h-[0.2px] bg-[#2594A4] bg-opacity-60"></div>
              </div>
            </div>
            <div className="w-[825px] h-[183px] flex justify-center">
              <div>
                <div className="grid grid-cols-3 gap-x-[30px]">
                  <div className="w-[251px] h-[115px] border border-[0.5px] border-[#101011] border-opacity-30  rounded-[20px] pt-[22px] pl-[22px]">
                    <div>
                      <div className="flex items-center gap-x-[7px] h-[20px]">
                        <img
                          className="w-[14px] h-[15px]"
                          src="https://getfit-image-file.s3.amazonaws.com/1708857405467Group%20%2812%29.png"
                        />
                        <p className="font-normal pt-[3px]  font-inter xl:text-[16px] lg:text-[16px]  text-[#101011]">
                          WhatsApp
                        </p>
                        {/* <p className="font-normal pt-[3px]  font-inter xl:text-[16px] lg:text-[16px]  text-[#101011]">
                          হোয়াটসঅ্যাপ
                        </p> */}
                      </div>
                      <p className="font-normal  font-inter xl:text-[16px] lg:text-[16px] leading-[19px] text-[#101011] mt-[9px]">
                        +88 01635401965
                      </p>
                    </div>
                  </div>
                  <div className="w-[251px] h-[115px] border border-[0.5px] border-[#101011] border-opacity-30  rounded-[20px] pt-[22px] pl-[22px]">
                    <div>
                      <div className="flex items-center gap-x-[7px] h-[20px]">
                        <img
                          className="w-[15px] h-[13px]"
                          src="https://getfit-image-file.s3.amazonaws.com/1709178513760Vector%20%286%29.png"
                        />
                        <p className="font-normal pt-[3px] font-inter xl:text-[16px] lg:text-[16px]  text-[#101011]">
                          Email
                        </p>
                        {/* <p className="font-normal pt-[3px] font-inter xl:text-[16px] lg:text-[16px]  text-[#101011]">
                          ইমেইল
                        </p> */}
                      </div>
                      <p className="font-normal  font-inter xl:text-[16px] lg:text-[16px] leading-[19px] text-[#101011] mt-[9px] ">
                        hello@getfit.com.bd
                      </p>
                    </div>
                  </div>
                  <div className="w-[251px] h-[115px] border border-[0.5px] border-[#101011] border-opacity-30  rounded-[20px] pt-[22px] pl-[22px]">
                    <div>
                      <div className="flex items-center gap-x-[7px] h-[20px]">
                        <div>
                          <img
                            className="w-[15px] h-[15px]"
                            src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1709178729748Group%20%2818%29.png"
                          />
                        </div>
                        <div className="pt-[3px]">
                          <p className="font-normal  font-inter xl:text-[16px] lg:text-[16px] text-[#101011] ">
                          Office Address
                          </p>
                          {/* <p className="font-normal  font-inter xl:text-[16px] lg:text-[16px] text-[#101011] ">
                            অফিসের ঠিকানা
                          </p> */}
                        </div>
                      </div>
                      <p className="font-normal  font-inter xl:text-[16px] lg:text-[16px] leading-[19px] text-[#101011] mt-[9px]">
                      Flat 2B, House 254, Road 09, Block C, Bashundhara R/A,
                      </p>
                      {/* <p className="font-normal  font-inter xl:text-[16px] lg:text-[16px] leading-[19px] text-[#101011] mt-[9px]">
                        ফ্ল্যাট 2B, বাড়ি 254, রোড 09, ব্লক সি, বসুন্ধরা R/A,
                        ঢাকা
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <div>
                  <p className="font-bold  font-inter xl:text-[18px] lg:text-[18px] leading-[23px] text-[#101011] text-center">
                  Social Media
                  </p>
                  {/* <p className="font-bold  font-noto xl:text-[18px] lg:text-[18px] leading-[23px] text-[#101011] text-center">
                    সোশ্যাল মিডিয়া
                  </p> */}
                  <p className="font-normal  font-inter xl:text-[14px] lg:text-[14px] leading-[19px] text-[#101011] text-opacity-70 text-center mt-[5px]">
                  Stay connected with us to know about all
                    <br /> new updates, offers and health benefits!
                  </p>
                  {/* <p className="font-normal  font-inter xl:text-[14px] lg:text-[14px] leading-[19px] text-[#101011] text-opacity-70 text-center mt-[5px]">
                    নতুন নতুন আপডেট, অফার এবং সুবিধা গুলো সম্পর্কে
                    <br /> জানতে আমাদের সাথে যুক্ত থাকুন!
                  </p> */}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-[10px]">
              <div className="flex gap-x-[10px]">
                <img
                  className="w-[28px] h-[28px] rounded-full"
                  src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708858286071Facebook.png"
                />
                <img
                  className="w-[28px] h-[28px] rounded-full"
                  src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/170885832293703.Instagram.png"
                />
                <img
                  className="w-[28px] h-[28px] rounded-full"
                  src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708858361560LinkedIn.png"
                />
                <img
                  className="w-[28px] h-[28px] rounded-full"
                  src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708858798838x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsWeb;
