import React, { useState } from "react";
import BmiCalculateResultModal from "../CalculateResultModal/BmiCalculateResultModal";

const BmiCalculatorPopUp = ({
  visibleBmiCalculator,
  closeModalBmiCalculator,
}) => {
  const [weight, setWeight] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [bmi, setBMI] = useState(null);
  const [showBmiResultModal, setShowBmiResultModal] = useState(false);
  console.log(showBmiResultModal);
  const calculateBMI = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const weightInKg = parseFloat(weight);
    const heightInFeet = parseFloat(heightFeet);
    const heightInInch = parseFloat(heightInches);

    if (
      !isNaN(weightInKg) &&
      !isNaN(heightInFeet) &&
      !isNaN(heightInInch) &&
      heightInFeet > 0 &&
      heightInInch >= 0 &&
      heightInInch < 12
    ) {
      const heightInCm = heightInFeet * 30.48 + heightInInch * 2.54;
      const calculatedBMI =
        weightInKg / ((heightInCm / 100) * (heightInCm / 100));
      setBMI(calculatedBMI.toFixed(2));
      setShowBmiResultModal(true);
    } else {
      setBMI(null);
    }
  };

  const bmiClose = () => {
    setShowBmiResultModal(false);
    closeModalBmiCalculator(false);
  };

  if (!visibleBmiCalculator) return null;

  return (
    <>
      <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-40 backdrop-blur-[10px]">
        <div className="">
          <div className=" w-full ">
            <div className=" w-[620px] bg-white h-[502px]  relative  flex justify-center  shadow-[0_8px_30px_rgb(0,0,0,0.12)] lg:p-0 md:p-0 p-2 rounded rounded-[10px]">
              <label
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event from propagating to modal close handler
                  closeModalBmiCalculator(false);
                }}
                className="cursor-pointer text-[20px] absolute right-4 top-2 text-black"
              >
                ✕
              </label>
              <div className="py-[30px]">
                <div>
                  <div className="mt-[8px]">
                    <div className="flex items-center ">
                      <div className="w-full flex justify-center">
                        <div className="flex items-center gap-x-[12px] ">
                          <div>
                            <img
                              className="w-[28px] h-[28px]"
                              src="/images/HealthCalculator/bmiCL.svg"
                            />
                          </div>
                          <h1 className="text-[#101011] font-bold font-inter text-[22px]">
                            BMI ক্যালকুলেটর
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[469px] mt-[20px]">
                    <form>
                      <div>
                        <div>
                          <h1 className="text-[16px] font-normal font-inter text-[#101011] mb-[5px]">
                            আপনার ওজন (কেজি)
                          </h1>
                          <input
                            placeholder="e.g 67"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="pl-[13px] w-[469px] h-[52px] border border-[#101011] outline-none border-opacity-30 rounded rounded-[5px]"
                          />
                        </div>
                        <div className="mt-[15px]">
                          <h1 className="text-[16px] font-normal font-inter text-[#101011] mb-[13px]">
                            আপনার উচ্চতা
                          </h1>
                          <div className="flex gap-x-[11px] mt-[5px]">
                            <div className="w-[235px] h-[52px] relative">
                              <div className="absolute left-2 -top-[10px] bg-white px-[2px]">
                                <p className=" text-[#101011] text-[14px] text-opacity-80 font-normal font-inter">
                                  ফিট
                                </p>
                              </div>
                              <div className="">
                                <input
                                  placeholder="e.g 5"
                                  value={heightFeet}
                                  onChange={(e) =>
                                    setHeightFeet(e.target.value)
                                  }
                                  className="pl-[13px] w-[235px] h-[52px] outline-none border border-[#101011] border-opacity-30 rounded rounded-[5px]"
                                />
                              </div>
                            </div>
                            <div className="w-[220px] h-[52px] relative">
                              <div className="absolute left-2 -top-[10px] bg-white px-[2px]">
                                <p className=" text-[#101011]  text-[14px] text-opacity-80 font-normal font-inter">
                                  ইঞ্চি
                                </p>
                              </div>
                              <div className="">
                                <input
                                  placeholder="e.g 5"
                                  value={heightInches}
                                  onChange={(e) =>
                                    setHeightInches(e.target.value)
                                  }
                                  className="pl-[13px] w-[220px] h-[52px] outline-none border border-[#101011] border-opacity-30 rounded rounded-[5px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-[15px]">
                          <h1 className="text-[16px] font-normal font-inter text-[#101011] mb-[15px]">
                            আপনার বয়স
                          </h1>
                          <div className="flex gap-x-[11px] mt-[5px]">
                            <div className="w-[235px] h-[52px] relative">
                              <div className="absolute left-2 -top-[10px] bg-white px-[2px]">
                                <p className=" text-[#101011] text-[16px] text-opacity-80 font-normal font-inter">
                                  বছর
                                </p>
                              </div>
                              <div className="">
                                <input
                                  placeholder="e.g 27"
                                  className="pl-[13px] w-[235px] h-[52px] outline-none border border-[#101011] border-opacity-30 rounded rounded-[5px]"
                                />
                              </div>
                            </div>
                            <div className="w-[220px] h-[52px] relative">
                              <div className="absolute left-2 -top-[10px] bg-white px-[2px]">
                                <p className=" text-[#101011] text-opacity-80 font-normal font-inter">
                                  মাস
                                </p>
                              </div>
                              <div className="">
                                <input
                                  placeholder="e.g 4"
                                  className="pl-[13px] w-[220px] h-[52px] outline-none border border-[#101011] border-opacity-30 rounded rounded-[5px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-[25px] flex justify-center">
                          <button
                            onClick={calculateBMI}
                            className="w-[158px] h-[40px] bg-[#C61E72] rounded-[25px] text-[16px] text-white font-inter font-normal"
                          >
                            হিসাব করুন
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showBmiResultModal === true && (
        <BmiCalculateResultModal
          visible={showBmiResultModal}
          close={bmiClose}
          bmi={bmi}
        />
      )}
    </>
  );
};

export default BmiCalculatorPopUp;
