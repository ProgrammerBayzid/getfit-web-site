import React from "react";

const DownloadAppForPackageDoctor = ({ visible, closeModal }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-40 backdrop-blur-[10px]">
      <div className="">
        <div className=" w-full ">
          <div className=" lg:w-[620px] bg-white lg:h-[550px] md:w-[750px] relative md:h-[550px] w-[330px] h-[550px] flex justify-center  shadow-[0_8px_30px_rgb(0,0,0,0.12)] lg:p-0 md:p-0 p-2 rounded rounded-[10px]">
            <label
              onClick={() => closeModal(false)}
              className="cursor-pointer text-[20px] absolute right-4 top-2 text-black"
            >
              ✕
            </label>
            <div>
              <div className=" py-[37px]">
                <div className="mt-[10px] px-[80px]">
                  {" "}
                  <p className="font-noto text-[16px] font-medium text-center leading-[25px] text-[#212427]">
                    ওজন কমানো কোনো কঠিন ডায়েট বা ব্যাথা সহ্যের বিষয় নয় -
                    আপনার চাহিদা, পছন্দ ও স্বাস্থ্যগত অবস্থার উপর ভিত্তি করে
                    বিশেষজ্ঞ পুষ্টিবিদরা আপনার জন্য টেইলার-মেড পুষ্টি পরিকল্পনা
                    তৈরি করবেন তাই দ্রুত পরামর্শ গ্রহণ করে সঠিক উপায়ে ওজন কমান।
                  </p>
                </div>
                <div className="mt-[20px]">
                  {" "}
                  <p className="font-noto text-[16px] font-semibold leading-[22px] text-[#212427] text-center">
                    নিউট্রিশনিস্টের সাথে ভিডিও কলে কনসাল্টেশন <br /> নেওয়ার জন্য
                    Getfit অ্যাপ টি ডাউনলোড করুন
                  </p>
                </div>

                <div className="flex justify-center mt-[38px]">
                  <img
                    className="font-noto  w-[122px] h-[133px] "
                    src="https://getfit-image-file.s3.amazonaws.com/1709535538317Group%2014262.png"
                  />
                </div>
                <div className="flex justify-center mt-[38px] ">
                  <div>
                    <p className="font-noto text-[18px] font-bold leading-[24px] text-[#212427] mb-[5px]">
                      অ্যাপ ডাউনলোড করতে ক্লিক করুন
                    </p>
                    <div className="flex   ">
                      <div className="flex gap-4">
                        <a href="" target="_blank">
                          <img
                            className="w-[128px] h-[38px]"
                            effect="blur"
                            src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708435845407Group%20%2810%29.png"
                          />
                        </a>

                        <a href="" target="_blank">
                          <img
                            className="w-[128px] h-[38px]"
                            effect="blur"
                            src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708435891829Group%20%2811%29.png"
                          />
                        </a>
                      </div>
                    </div>
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

export default DownloadAppForPackageDoctor;
