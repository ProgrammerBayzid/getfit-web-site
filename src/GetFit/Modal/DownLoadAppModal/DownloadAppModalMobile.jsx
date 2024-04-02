import React from "react";

const DownloadAppModalMobile = ({ visible, closeModal }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-40 backdrop-blur-[10px]">
      <div className="">
        <div className=" w-full ">
          <div className=" relative w-[345px] h-[330px] flex justify-center  shadow-[0_8px_30px_rgb(0,0,0,0.12)]  p-2 rounded rounded-[10px] bg-white">
            <label
              onClick={() => closeModal(false)}
              className="cursor-pointer text-[20px] absolute right-4 top-2 text-black"
            >
              ✕
            </label>
            <div>
              <div className=" py-[37px]">
                <div className="mt-[5px]">
                  {" "}
                  <p className="font-noto text-[16px] text-center font-semibold leading-[px] text-[#212427] px-[10px]">
                    নিউট্রিশনিস্টের সাথে ভিডিও কলে কনসাল্টেশন <br/> নেওয়ার জন্য
                    Getfit অ্যাপ টি ডাউনলোড করুন
                  </p>
                </div>

                <div className="flex justify-center mt-[20px]">
                  <img
                    className="font-noto  w-[82px] h-[82px] "
                    src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708435114149Frame.png"
                  />
                </div>
                <div className="flex justify-center mt-[20px] ">
                  <div>
                    <p className="font-noto text-[14px] font-bold leading-[24px] text-[#212427] mb-[5px]">
                      অ্যাপ ডাউনলোড করতে ক্লিক করুন
                    </p>
                    <div className="flex   ">
                      <div className="flex gap-[15px]">
                        <a href="" target="_blank">
                          <img
                            className="w-[96px] h-[29px]"
                            effect="blur"
                            src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708435845407Group%20%2810%29.png"
                          />
                        </a>

                        <a href="" target="_blank">
                          <img
                            className="w-[96px] h-[29px]"
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

export default DownloadAppModalMobile;
