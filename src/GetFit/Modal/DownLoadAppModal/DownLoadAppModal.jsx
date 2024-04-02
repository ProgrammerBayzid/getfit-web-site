import React from "react";

const DownLoadAppModal = ({ visible, closeModal }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-40 backdrop-blur-[10px]">
      <div className="">
        <div className=" w-full ">
          <div className=" lg:w-[620px] bg-white lg:h-[420px] md:w-[750px] relative md:h-[550px] w-[330px] h-[450px] flex justify-center  shadow-[0_8px_30px_rgb(0,0,0,0.12)] lg:p-0 md:p-0 p-2 rounded rounded-[10px]">
            <label
              onClick={() => closeModal(false)}
              className="cursor-pointer text-[20px] absolute right-4 top-2 text-black"
            >
              ✕
            </label>
            <div>
              <div className=" py-[37px]">
                <div className="mt-[10px]">
                  {" "}
                  <p className="font-noto text-[22px] font-semibold leading-[22px] text-[#212427]">
                    নিউট্রিশনিস্টের সাথে ভিডিও কলে কনসাল্টেশন <br /> নেওয়ার জন্য
                    Getfit অ্যাপ টি ডাউনলোড করুন
                  </p>
                </div>

                <div className="flex justify-center mt-[38px]">
                  <img
                    className="font-noto  w-[128px] h-[128px] "
                    src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708435114149Frame.png"
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

export default DownLoadAppModal;
