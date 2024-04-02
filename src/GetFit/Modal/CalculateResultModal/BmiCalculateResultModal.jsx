import React, { useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { useModalContext } from "../../Context/useModalContext";

const BmiCalculateResultModal = ({ showBmiResultModal, close, bmi }) => {
  if (showBmiResultModal === false) return null;

  const getInterpretation = () => {
    if (bmi < 18.5) return "Underweight";
    else if (bmi < 25) return "Normal weight";
    else if (bmi < 30) return "Overweight";
    else if (bmi < 35) return "Obesity class 1";
    else if (bmi < 40) return "Obesity class 2";
    else return "Obesity class 3";
  };
  const interpretationTexts = [
    "Underweight",
    "Normal weight",
    "Overweight",
    "Obesity class 1",
    "Obesity class 2",
    "Obesity class 3",
  ];
  const { openModalDownloadApp, setOpenModalDownloadApp } = useModalContext();
  const downloadApp = () => {
    setOpenModalDownloadApp(true);
    close();
  };
  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-40 backdrop-blur-[10px]">
      <div className="">
        <div className=" w-full ">
          <div className=" w-[620px] bg-white h-[502px]  relative  flex justify-center  shadow-[0_8px_30px_rgb(0,0,0,0.12)] lg:p-0 md:p-0 p-2 rounded rounded-[10px]">
            <label
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              className="cursor-pointer text-[20px] absolute right-4 top-2 text-black"
            >
              ✕
            </label>
            <div className="py-[10px] px-[60px]">
              <div>
                <div className="flex justify-center">
                  {bmi !== null && (
                    <div className="mt-4">
                      <ReactSpeedometer
                        value={bmi}
                        minValue={0}
                        maxValue={50}
                        segments={6}
                        startColor="#97C6FF"
                        segmentColors={[
                          "#97C6FF",
                          "#FFA500",
                          "#FFFF00",
                          "#00FF00",
                          "#0000FF",
                          "#8A2BE2",
                        ]}
                        ringWidth={50}
                        needleHeightRatio={0.5}
                        needleColor={"#0000FF"}
                        width={230}
                        height={124}
                      />
                    </div>
                  )}
                </div>
                <div className="mt-[8px]">
                  <div className=" text-center">
                    <h1 className="text-[#C61E72] font-semibold font-inter text-[18px] mt-[16px]">
                      আপনার BMI {bmi} !
                    </h1>
                    <h1 className="text-[#101011] text-opacity-90 font-bold font-noto text-[21px] mt-[5px]">
                      {bmi < 18.5
                        ? "Underweight"
                        : bmi < 25
                        ? "Normal weight"
                        : bmi < 30
                        ? "Overweight"
                        : bmi < 35
                        ? "Obesity class 1"
                        : bmi < 40
                        ? "Obesity class 2"
                        : "Obesity class 3"}{" "}
                      ক্যাটাগরিতে পড়ে!
                    </h1>
                    <h1 className="text-[#101011] text-opacity-90 font-normal font-noto text-[16px] mt-[13px]">
                      আপনার ফিটনেস যাত্রায় সহায়তা করার জন্য আমাদের হেলথ
                      কনসাল্ট্যান্ট আপনার সাথে Getfit অডিও বা ভিডিও কলের মাধ্যমে
                      যোগাযোগ করবেন। দয়া করে আমাদের স্বাস্থ্য পরামর্শ বা
                      কনসাল্টেশন নিন যাতে আমরা আপনাকে আরও ভালোভাবে সাহায্য করতে
                      পারি।
                    </h1>
                    <button
                      type="button"
                      onClick={downloadApp}
                      className=" w-[353px] h-[40px] rounded   bg-[#C61E72] items-center justify-center pt-[2px] mt-[20px]"
                    >
                      <p className="font-medium font-noto text-[16px] text-white  leading-[16px] ">
                        কনসাল্টেশন বুক করতে অ্যাপ টি ডাউনলোড করুন
                      </p>
                    </button>
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

export default BmiCalculateResultModal;
