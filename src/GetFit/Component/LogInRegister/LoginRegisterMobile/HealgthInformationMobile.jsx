import React from "react";
import { useState } from "react";
import { navigate } from "@reach/router";

const HealgthInformationMobile = () => {
  const [married, setmarried] = useState(false);
  const [selectesmarried, setselectesmarried] = useState(null);
  const [blod, setblod] = useState(false);
  const [selectesblod, setselectesblod] = useState(null);
  const marriedoptions = [
    { value: "বিবাহিত " },
    { value: "অবিবাহিত" },
    { value: "ডিভোর্স " },
    { value: "বিপত্নীক " },
  ];
  const blodoptions = [
    { value: "A+ " },
    { value: "A-" },
    { value: "B+ " },
    { value: "B- " },
    { value: "O+ " },
    { value: "O-" },
    { value: "AB+ " },
    { value: "AB- " },
  ];

  const handleSelectMarriedChange = (value) => {
    setselectesmarried(value);
  };
  const handleSelectBlodChange = (value) => {
    setselectesblod(value);
  };

  const [weight, setWeight] = useState();
  const [heightFeet, setHeightFeet] = useState();
  const [heightInches, setHeightInches] = useState();
  const [ageYears, setAgeYears] = useState();
  const [ageMonths, setAgeMonths] = useState();
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState(null);

  const calculateBmi = () => {
    // Convert height to meters
    const heightMeters = heightFeet * 0.3048 + heightInches * 0.0254;

    // Convert age to years
    const ageInYears = ageYears + ageMonths / 12;

    // Calculate BMI
    const calculatedBmi = (weight / Math.pow(heightMeters, 2)).toFixed(2);

    // Determine BMI category
    let category = "";
    if (calculatedBmi < 18.5) {
      category = "Underweight";
    } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
      category = "Normal Weight";
    } else if (calculatedBmi >= 25.0 && calculatedBmi <= 29.9) {
      category = "Overweight";
    } else if (calculatedBmi >= 30.0 && calculatedBmi <= 34.9) {
      category = "Obesity Class I";
    } else if (calculatedBmi >= 35.0 && calculatedBmi <= 39.9) {
      category = "Obesity Class II";
    } else {
      category = "Obesity Class III";
    }

    // Update state with BMI, age, and category
    setBmi({ value: calculatedBmi, age: ageInYears });
    setBmiCategory(category);
    // Navigate to the result page
    navigate("/health-information-bmi-result", {
      state: {
        bmiResult: {
          value: calculatedBmi,
          age: ageInYears,
          category: category,
        },
      },
    });
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
          <div className="sm:w-[345px] md:w-[372px] custom:w-[400px] mt-[3px]">
            <h1 className="font-inter font-semibold text-[18px] leading-[30px] text-[#101011] text-center">
              আপনার স্বাস্থ্য সম্পর্কিত তথ্য গুলো দিন,
              <br /> এটি আপনাকে সর্বোচ্চ সেবা পেতে
              <br /> সাহায্য করবে
            </h1>
          </div>
          <div className="sm:w-[345px] md:w-[372px] custom:w-[400px] mt-[20px]">
            <div>
              <div>
                <div>
                  <h1 className="text-[14px] font-normal font-inter text-[#101011] mb-[2px]">
                    আপনার ওজন (কেজি)
                  </h1>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g 67"
                    className="pl-[13px] sm:w-[345px] md:w-[372px] custom:w-[400px] h-[40px] border border-[#101011] outline-none border-opacity-30 rounded rounded-[5px]"
                  />
                </div>
                <div className="mt-[12px]">
                  <h1 className="text-[14px] font-normal font-inter text-[#101011] mb-[13px]">
                    আপনার উচ্চতা
                  </h1>
                  <div className="flex gap-x-[11px] mt-[5px]">
                    <div className="sm:w-[169px] md:w-[179px] custom:w-[190px] h-[47px] relative">
                      <div className="absolute left-2 -top-[10px] bg-white px-[2px]">
                        <p className=" text-[#101011] text-opacity-80 font-normal font-inter">
                          ফিট
                        </p>
                      </div>
                      <div className="">
                        <input
                          type="number"
                          value={heightFeet}
                          onChange={(e) => setHeightFeet(e.target.value)}
                          placeholder="e.g 5"
                          className="pl-[13px] sm:w-[169px] md:w-[179px] custom:w-[190px] h-[47px] outline-none border border-[#101011] border-opacity-30 rounded rounded-[5px]"
                        />
                      </div>
                    </div>
                    <div className="sm:w-[164px] md:w-[180px] custom:w-[198px] h-[47px] relative">
                      <div className="absolute left-2 -top-[10px] bg-white px-[2px]">
                        <p className=" text-[#101011] text-opacity-80 font-normal font-inter">
                          ইঞ্চি
                        </p>
                      </div>
                      <div className="">
                        <input
                          type="number"
                          value={heightInches}
                          onChange={(e) => setHeightInches(e.target.value)}
                          placeholder="e.g 5"
                          className="pl-[13px] sm:w-[164px] md:w-[180px] custom:w-[198px]  h-[47px] outline-none border border-[#101011] border-opacity-30 rounded rounded-[5px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[12px]">
                  <h1 className="text-[14px] font-normal font-inter text-[#101011] mb-[12px]">
                    আপনার বয়স
                  </h1>
                  <div className="flex gap-x-[11px] mt-[5px]">
                    <div className="sm:w-[169px] md:w-[179px] custom:w-[190px] h-[47px] relative">
                      <div className="absolute left-2 -top-[10px] bg-white px-[2px]">
                        <p className=" text-[#101011] text-opacity-80 font-normal font-inter">
                          বছর
                        </p>
                      </div>
                      <div className="">
                        <input
                          type="number"
                          value={ageYears}
                          onChange={(e) => setAgeYears(e.target.value)}
                          placeholder="e.g 27"
                          className="pl-[13px] sm:w-[169px] md:w-[179px] custom:w-[190px] h-[47px] outline-none border border-[#101011] border-opacity-30 rounded rounded-[5px]"
                        />
                      </div>
                    </div>
                    <div className="sm:w-[164px] md:w-[180px] custom:w-[198px] h-[47px] relative">
                      <div className="absolute left-2 -top-[10px] bg-white px-[2px]">
                        <p className=" text-[#101011] text-opacity-80 font-normal font-inter">
                          মাস
                        </p>
                      </div>
                      <div className="">
                        <input
                          type="number"
                          value={ageMonths}
                          onChange={(e) => setAgeMonths(e.target.value)}
                          placeholder="e.g 4"
                          className="pl-[13px] sm:w-[164px] md:w-[180px] custom:w-[198px] h-[47px] outline-none border border-[#101011] border-opacity-30 rounded rounded-[5px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[10px] ">
                    <h1 className="text-[14px] font-normal font-inter text-[#101011] mb-[5px]">
                      বৈবাহিক অবস্থা
                    </h1>
                    <div className="relative  sm:w-[345px] md:w-[372px] custom:w-[400px] custom:w-[198px] h-[40px]">
                      <input
                        placeholder="Select"
                        className="pl-[13px] sm:w-[345px] md:w-[372px] custom:w-[400px] custom:w-[198px] h-[40px] border border-[#101011] outline-none border-opacity-30 rounded rounded-[5px]"
                        defaultValue={selectesmarried}
                        onClick={() => setmarried(!married)}
                      />
                      <div className="absolute bottom-0 right-[15px] inset-y-1/2  ">
                        {married === false ? (
                          <img
                            onClick={() => setmarried(!married)}
                            src="/images/CommonLogo/downAro.svg"
                          />
                        ) : (
                          <img
                            onClick={() => setmarried(!married)}
                            className="rotate-180"
                            src="/images/CommonLogo/downAro.svg"
                          />
                        )}
                      </div>

                      {married && (
                        <div>
                          <div className="fixed shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white z-50 rounded w-[130px] h-[167px]  pt-2  overflow-auto pl-5 pt-6 rounded-b-[10px]">
                            {marriedoptions.map((v) => (
                              <p
                                onClick={() =>
                                  handleSelectMarriedChange(v.value)
                                }
                                className="text-[#101011] cursor-pointer text-[16px] font-inter font-normal mb-[10px]"
                              >
                                {v.value}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-[10px] ">
                    <h1 className="text-[14px] font-normal font-inter text-[#101011] mb-[5px]">
                      রক্তের গ্রুপ
                    </h1>
                    <div className=" relative sm:w-[345px] md:w-[372px] custom:w-[400px] h-[40px] ">
                      <input
                        placeholder="Select"
                        className="pl-[13px] sm:w-[345px] md:w-[372px] custom:w-[400px] h-[40px] border border-[#101011] outline-none border-opacity-30 rounded rounded-[5px]"
                        defaultValue={selectesblod}
                        onClick={() => setblod(!blod)}
                      />
                      <div className="absolute bottom-0 right-[15px] inset-y-1/2 ">
                        {blod === false ? (
                          <img
                            onClick={() => setblod(!blod)}
                            src="/images/CommonLogo/downAro.svg"
                          />
                        ) : (
                          <img
                            onClick={() => setblod(!blod)}
                            className="rotate-180"
                            src="/images/CommonLogo/downAro.svg"
                          />
                        )}
                      </div>

                      {blod && (
                        <div>
                          <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] z-50 bg-white rounded w-[90px] h-[290px] pb-1 pt-[10px] overflow-auto pl-5 pt-6 rounded-b-[10px]">
                            {blodoptions.map((v) => (
                              <p
                                onClick={() => handleSelectBlodChange(v.value)}
                                className="text-[#101011] cursor-pointer text-[16px] font-inter font-normal mb-[10px]"
                              >
                                {v.value}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-[15px]">
                  <button
                    onClick={calculateBmi}
                    className="sm:w-[345px] md:w-[372px] custom:w-[400px] h-[40px] bg-[#C61E72] rounded text-[16px] text-white font-inter font-normal"
                  >
                    পরবর্তী
                  </button>
                </div>
              </div>
            </div>
            {bmi && (
              <div>
                <h3>Your BMI is: {bmi.value}</h3>
                <p>Your age is: {bmi.age} years</p>
                <p>BMI Category: {bmiCategory}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealgthInformationMobile;
