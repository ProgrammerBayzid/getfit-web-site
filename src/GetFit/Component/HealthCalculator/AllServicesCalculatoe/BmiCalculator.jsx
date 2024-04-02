import React from "react";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
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
    } else {
      setBMI(null);
    }
  };
  return (
    <div className="w-full flex justify-center">
      <div className="custom:w-[430px] md:w-[400px] sm:w-[375px] w-[350px] px-[12px] ">
        <div>
          <div className="mt-[8px]">
            <div className="flex items-center ">
              <div className="w-[10px]">
                <img src="/images/CommonLogo/backButtonIconForMobile.svg" />
              </div>
              <div className="w-full flex justify-center">
                <div className="flex items-center gap-x-[5px] ">
                  <div>
                    <img
                      className="w-[18px] h-[18px]"
                      src="/images/HealthCalculator/bmiCL.svg"
                    />
                  </div>
                  <h1 className="text-[#101011] font-bold font-inter text-[16px]">
                    BMI ক্যালকুলেটর
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[345px] md:w-[372px] custom:w-[400px] mt-[20px]">
            <form>
              <div>
                <div>
                  <h1 className="text-[14px] font-normal font-inter text-[#101011] mb-[2px]">
                    আপনার ওজন (কেজি)
                  </h1>
                  <input
                    placeholder="e.g 67"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
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
                          placeholder="e.g 5"
                          value={heightFeet}
                          onChange={(e) => setHeightFeet(e.target.value)}
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
                          placeholder="e.g 5"
                          value={heightInches}
                          onChange={(e) => setHeightInches(e.target.value)}
                          className="pl-[13px] sm:w-[164px] md:w-[180px] custom:w-[198px] h-[47px] outline-none border border-[#101011] border-opacity-30 rounded rounded-[5px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[15px]">
                  <button
                    onClick={calculateBMI}
                    className="sm:w-[345px] md:w-[372px] custom:w-[400px] h-[40px] bg-[#C61E72] rounded text-[16px] text-white font-inter font-normal"
                  >
                    হিসাব করুন
                  </button>
                </div>
              </div>
            </form>
            {bmi !== null && (
              <div>
                <h2>Your BMI: {bmi}</h2>
                <p>
                  Interpretation:
                  {bmi < 18.5
                    ? "Underweight"
                    : bmi < 25
                    ? "Normal weight"
                    : "Overweight"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
