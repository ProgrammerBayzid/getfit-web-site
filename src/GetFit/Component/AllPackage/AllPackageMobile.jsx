import React from "react";
import { useRef } from "react";
import { useState } from "react";

const AllPackageMobile = () => {
  const packageData = [
    {
      category: "ওয়েট লস",
      images: "/images/servies/waightLosscatagory.svg",

      packages: [
        {
          name: "২ মাসের ওয়েট লস পাকেজ ",
          single: "সিঙ্গেল",
          couple: "কাপল",
          price: "7350",
          details:
            "আপনার প্রয়োজন অনু্যায়ী পারসোনালাইজড প্যাকেজ, ২ মাসের মধ্যে ৪-৬ কেজি ওজন কমাতে আগ্রহী এমন মানুষদের জন্য আদর্শ।",
          id: 1,
        },
        {
          name: "৪ মাসের ওয়েট লস পাকেজ ",
          single: "সিঙ্গেল",
          couple: "কাপল",
          price: "১২৬০০",
          details:
            "আপনার প্রয়োজন অনু্যায়ী পারসোনালাইজড প্যাকেজ, ৪ মাসের মধ্যে ৮-১০ কেজি ওজন কমাতে আগ্রহী এমন মানুষদের জন্য আদর্শ।",
          id: 2,
        },
        {
          name: "৬ মাসের ওয়েট লস পাকেজ ",
          single: "সিঙ্গেল",
          couple: "কাপল",
          price: "১৫৭৫০",
          details:
            "আপনার প্রয়োজন অনু্যায়ী পারসোনালাইজড প্যাকেজ, ৬ মাসের মধ্যে ১১-১৪ কেজি ওজন কমাতে আগ্রহী এমন মানুষদের জন্য আদর্শ।",
          id: 3,
        },
      ],
    },
    {
      category: "PCOS",
      images: "/images/servies/waightLosscatagory.svg",

      packages: [
        {
          name: "২ মাসের ওয়েট লস পাকেজ ",
          single: "সিঙ্গেল",
          couple: "কাপল",
          price: "7350",
          details:
            "আপনার প্রয়োজন অনু্যায়ী পারসোনালাইজড প্যাকেজ, ২ মাসের মধ্যে ৪-৬ কেজি ওজন কমাতে আগ্রহী এমন মানুষদের জন্য আদর্শ।",
          id: 1,
        },
        {
          name: "২ মাসের ওয়েট লস পাকেজ ",
          single: "সিঙ্গেল",
          couple: "কাপল",
          price: "7350",
          details:
            "আপনার প্রয়োজন অনু্যায়ী পারসোনালাইজড প্যাকেজ, ২ মাসের মধ্যে ৪-৬ কেজি ওজন কমাতে আগ্রহী এমন মানুষদের জন্য আদর্শ।",
          id: 2,
        },
        {
          name: "২ মাসের ওয়েট লস পাকেজ ",
          single: "সিঙ্গেল",
          couple: "কাপল",
          price: "7350",
          details:
            "আপনার প্রয়োজন অনু্যায়ী পারসোনালাইজড প্যাকেজ, ২ মাসের মধ্যে ৪-৬ কেজি ওজন কমাতে আগ্রহী এমন মানুষদের জন্য আদর্শ।",
          id: 3,
        },
      ],
    },
    {
      category: "ডায়াবেটিস",
      images: "/images/servies/waightLosscatagory.svg",

      packages: [
        {
          name: "২ মাসের ওয়েট লস পাকেজ ",
          single: "সিঙ্গেল",
          couple: "কাপল",
          price: "7350",
          details:
            "আপনার প্রয়োজন অনু্যায়ী পারসোনালাইজড প্যাকেজ, ২ মাসের মধ্যে ৪-৬ কেজি ওজন কমাতে আগ্রহী এমন মানুষদের জন্য আদর্শ।",
          id: 1,
        },
        {
          name: "২ মাসের ওয়েট লস পাকেজ ",
          single: "সিঙ্গেল",
          couple: "কাপল",
          price: "7350",
          details:
            "আপনার প্রয়োজন অনু্যায়ী পারসোনালাইজড প্যাকেজ, ২ মাসের মধ্যে ৪-৬ কেজি ওজন কমাতে আগ্রহী এমন মানুষদের জন্য আদর্শ।",
          id: 2,
        },
        {
          name: "২ মাসের ওয়েট লস পাকেজ ",
          single: "সিঙ্গেল",
          couple: "কাপল",
          price: "7350",
          details:
            "আপনার প্রয়োজন অনু্যায়ী পারসোনালাইজড প্যাকেজ, ২ মাসের মধ্যে ৪-৬ কেজি ওজন কমাতে আগ্রহী এমন মানুষদের জন্য আদর্শ।",
          id: 3,
        },
      ],
    },
    {
      category: "থাইরয়েড",
      images: "/images/servies/waightLosscatagory.svg",

      packages: [
        {
          name: "২ মাসের ওয়েট লস পাকেজ ",
          single: "সিঙ্গেল",
          couple: "কাপল",
          price: "7350",
          details:
            "আপনার প্রয়োজন অনু্যায়ী পারসোনালাইজড প্যাকেজ, ২ মাসের মধ্যে ৪-৬ কেজি ওজন কমাতে আগ্রহী এমন মানুষদের জন্য আদর্শ।",
          id: 1,
        },
        {
          name: "২ মাসের ওয়েট লস পাকেজ ",
          single: "সিঙ্গেল",
          couple: "কাপল",
          price: "7350",
          details:
            "আপনার প্রয়োজন অনু্যায়ী পারসোনালাইজড প্যাকেজ, ২ মাসের মধ্যে ৪-৬ কেজি ওজন কমাতে আগ্রহী এমন মানুষদের জন্য আদর্শ।",
          id: 2,
        },
        {
          name: "২ মাসের ওয়েট লস পাকেজ ",
          single: "সিঙ্গেল",
          couple: "কাপল",
          price: "7350",
          details:
            "আপনার প্রয়োজন অনু্যায়ী পারসোনালাইজড প্যাকেজ, ২ মাসের মধ্যে ৪-৬ কেজি ওজন কমাতে আগ্রহী এমন মানুষদের জন্য আদর্শ।",
          id: 3,
        },
      ],
    },
    {
      category: "বেবী নিউট্রিশন",
      images: "/images/servies/waightLosscatagory.svg",

      packages: [
        {
          name: "২ মাসের ওয়েট লস পাকেজ ",
          single: "সিঙ্গেল",
          couple: "কাপল",
          price: "7350",
          details:
            "আপনার প্রয়োজন অনু্যায়ী পারসোনালাইজড প্যাকেজ, ২ মাসের মধ্যে ৪-৬ কেজি ওজন কমাতে আগ্রহী এমন মানুষদের জন্য আদর্শ।",
          id: 1,
        },
        {
          name: "২ মাসের ওয়েট লস পাকেজ ",
          single: "সিঙ্গেল",
          couple: "কাপল",
          price: "7350",
          details:
            "আপনার প্রয়োজন অনু্যায়ী পারসোনালাইজড প্যাকেজ, ২ মাসের মধ্যে ৪-৬ কেজি ওজন কমাতে আগ্রহী এমন মানুষদের জন্য আদর্শ।",
          id: 2,
        },
        {
          name: "২ মাসের ওয়েট লস পাকেজ ",
          single: "সিঙ্গেল",
          couple: "কাপল",
          price: "7350",
          details:
            "আপনার প্রয়োজন অনু্যায়ী পারসোনালাইজড প্যাকেজ, ২ মাসের মধ্যে ৪-৬ কেজি ওজন কমাতে আগ্রহী এমন মানুষদের জন্য আদর্শ।",
          id: 3,
        },
      ],
    },
    {
      category: "প্রেগন্যান্সি",
      images: "/images/servies/waightLosscatagory.svg",

      packages: [
        {
          name: "২ মাসের ওয়েট লস পাকেজ ",
          single: "সিঙ্গেল",
          couple: "কাপল",
          price: "7350",
          details:
            "আপনার প্রয়োজন অনু্যায়ী পারসোনালাইজড প্যাকেজ, ২ মাসের মধ্যে ৪-৬ কেজি ওজন কমাতে আগ্রহী এমন মানুষদের জন্য আদর্শ।",
          id: 1,
        },
        {
          name: "২ মাসের ওয়েট লস পাকেজ ",
          single: "সিঙ্গেল",
          couple: "কাপল",
          price: "7350",
          details:
            "আপনার প্রয়োজন অনু্যায়ী পারসোনালাইজড প্যাকেজ, ২ মাসের মধ্যে ৪-৬ কেজি ওজন কমাতে আগ্রহী এমন মানুষদের জন্য আদর্শ।",
          id: 2,
        },
        {
          name: "২ মাসের ওয়েট লস পাকেজ ",
          single: "সিঙ্গেল",
          couple: "কাপল",
          price: "7350",
          details:
            "আপনার প্রয়োজন অনু্যায়ী পারসোনালাইজড প্যাকেজ, ২ মাসের মধ্যে ৪-৬ কেজি ওজন কমাতে আগ্রহী এমন মানুষদের জন্য আদর্শ।",
          id: 3,
        },
      ],
    },
  ];
  const [activeBtn, setActiveBtn] = useState(packageData[0]?.category || null);
  const handelActiveButton = (value) => {
    setActiveBtn(value);
  };

  return (
    <div className="w-full flex justify-center mt-[20px]">
      <div className="custom:w-[430px] md:w-[400px] sm:w-[375px] w-[350px] px-[12px] ">
        <div>
          <div className="sticky top-0 z-40 py-[7px] bg-white flex items-center">
            <div className="">
              <div>
                <div className="relative">
                  <input
                    // onMouseEnter={() => setIsServicesOpen(true)}
                    // onClick={toggleServicesDropdown}
                    readOnly
                    className=" placeholder:text-[#C7C8C9] h-[36px] placeholder:text-[13px] placeholder:font-light  sm:w-[345px] custom:w-[407px] md:w-[377px] w-[327px] rounded  focus:outline-none  input pl-[10px]  border border-[#101011] border-opacity-20 border-[0.5px]"
                    placeholder="যে কোন একটি সেবা সিলেক্ট করুন"
                  />
                  <div className=" absolute top-[10px] right-[15px]">
                    <img src="/images/Home/HomeHeader/searchIcon.svg" />
                  </div>
                </div>
              </div>
              <div>
                <div className="custom:w-[405px] md:w-[377px] sm:w-[343px] w-[327px]  flex items-center justify-center  ">
                  <div className=" custom:w-[405px] md:w-[377px] sm:w-[343px] w-[327px] overflow-auto flex gap-x-[10px] py-[10px]">
                    {packageData.map((category, index) => {
                      return (
                        <div key={index}>
                          <button
                            style={{ whiteSpace: "nowrap" }}
                            className={`w-full h-[24px]  rounded-[22px] pt-[2.5px] px-[12px]  border-[#C61E72] border-[0.5px] border  text-[14px] text-[#1F1F1F] font-noto font-normal   ${
                              activeBtn === category.category
                                ? "text-[#FFFFFF] bg-[#C30F69] text-[14px] font-noto font-normal"
                                : "text-[#1F1F1F]"
                            }`}
                            onClick={() =>
                              handelActiveButton(category.category)
                            }
                          >
                            {category.category}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {packageData.map((category, index) => {
              return (
                <div key={index}>
                  {activeBtn === category.category &&
                    category.packages.map((pkg) => {
                      return (
                        <div className="sm:w-[345px] md:w-[376px] custom:w-[400px] h-[157px] py-[13px] px-[15px]  border border-[0.5px] border-[#1F1F1F] border-opacity-30 bg-[#FFF9FC] rounded-[8px] mb-[15px]">
                          {" "}
                          <div className="flex justify-between items-center">
                            <div>
                              <h2 className="font-noto font-bold text-[16px] text-[#101011] leading-[21px]">
                                {pkg.name}
                              </h2>
                            </div>
                            <div>
                              <img src={category.images} />
                            </div>
                          </div>
                          <div className="w-full h-[0.5px] bg-[#C61E72] bg-opacity-20 my-[9px]"></div>
                          <p className="font-noto font-normal text-[14px] text-[#101011] leading-[18px]">
                            {pkg.details}
                          </p>
                          <div className="flex justify-between items-center mt-[5px]">
                            <div>
                              {" "}
                              <h2 className="font-noto font-medium text-[16px] text-[#101011] leading-[21px]">
                                ৳{pkg.price}
                              </h2>
                            </div>
                            <div>
                              <button className="w-[98px] h-[26px] bg-[#C61E72] bg-opacity-20 rounded-[21px] font-noto font-medium text-[14px] text-[#6D0037] leading-[18px] pt-[3px]">
                                প্যাকেজ কিনুন
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPackageMobile;
