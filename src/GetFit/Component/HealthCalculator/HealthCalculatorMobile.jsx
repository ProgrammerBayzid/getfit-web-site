import React from "react";

const HealthCalculatorMobile = () => {
  const HealthCalculatorDAta = [
    {
      image: "/images/HealthCalculator/bmiCL.svg",
      name: "BMI ক্যালকুলেটর",
    },
    {
      image: "/images/HealthCalculator/pregnantCL.svg",
      name: "প্রেগন্যান্সি ক্যালকুলেটর",
    },
    {
      image: "/images/HealthCalculator/pcosCl.svg",
      name: "PCOS ক্যালকুলেটর",
    },
    {
      image: "/images/HealthCalculator/bmrCl.svg",
      name: "BMR ক্যালকুলেটর",
    },
    {
      image: "/images/HealthCalculator/BodyFatCl.svg",
      name: "বডি ফ্যাট ক্যালকুলেটর",
    },
    {
      image: "/images/HealthCalculator/protine.svg",
      name: "প্রোটিন ক্যালকুলেটর",
    },
    {
      image: "/images/HealthCalculator/cfrCl.svg",
      name: "GFR ক্যালকুলেটর",
    },
    {
      image: "/images/HealthCalculator/tdeCl.svg",
      name: "TDE ক্যালকুলেটর",
    },
    {
      image: "/images/HealthCalculator/weightCl.svg",
      name: "আদর্শ ওজন ক্যালকুলেটর",
    },
    {
      image: "/images/HealthCalculator/foodCalorieCl.svg",
      name: "খাদ্য ক্যালোরি ক্যালকুলেটর",
    },
  ];
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
                <h1 className="text-[#101011] text-center font-bold font-noto text-[18px]">
                  আপনার স্বাস্থ্য ও ফিটনেস পরীক্ষা করুন
                </h1>
              </div>
            </div>
            <div>
              <p className="text-[#101011] font-normal font-inter sm:text-[12px] md:text-[13px] custom:w-[14px] text-center">
                Getfit হেলথ ক্যালকুলেটর দিয়ে নিয়মিত আপনার স্বাস্থ্য ও ফিটনেস
                পরীক্ষা করুন
              </p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-[10px] mt-[20px]">
              {HealthCalculatorDAta.map((hcd, i) => {
                return (
                  <div
                    key={i}
                    className="sm:w-[167px] md:w-[185px] custom:w-[200px] h-[79px] rounded border border-[101011] border-opacity-20 flex items-center justify-center"
                  >
                    <div>
                      <div className="flex justify-center">
                        <img src={hcd.image} />
                      </div>
                      <div className="flex justify-center mx-[4px] mt-[4px]">
                        <p className="text-[101011] font-inter font-medium text-[15px] text-center">
                          {hcd.name}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCalculatorMobile;
