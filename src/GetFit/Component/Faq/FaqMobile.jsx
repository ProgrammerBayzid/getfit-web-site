import React, { useEffect, useState } from "react";
import SingalFaqMobile from "./SingalFaqMobile";

const FaqMobile = () => {
  const [faqData, setFaqData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  console.log(faqData);
  const category_status = (status) => {
    setCategory(status);
  };
  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      let url = "https://lv2kdcqw-3000.asse.devtunnels.ms/faq";
      if (category !== "") {
        url += `?category=${category}`;
      }
      console.log(url);
      fetch(url)
        .then((res) => {
          if (res.status === 401) {
            console.log("Unauthorized error");
          }
          return res.json();
        })
        .then((data) => {
          if (data) {
            setFaqData(data);
            console.log(data);
          }
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        })
        .finally(() => {
          setLoading(false); // Mark the loading as complete
        });
    };

    fetchData();
  }, [category]);

  useEffect(() => {
    const fetchcategoryData = () => {
      setLoading(true);
      let url = "https://lv2kdcqw-3000.asse.devtunnels.ms/faq";
      fetch(url)
        .then((res) => {
          if (res.status === 401) {
            console.log("Unauthorized error");
          }
          return res.json();
        })
        .then((data) => {
          if (data) {
            setCategoryData(data);
            console.log(data);
          }
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        })
        .finally(() => {
          setLoading(false); // Mark the loading as complete
        });
    };

    fetchcategoryData();
  }, []);

  const categoryDataArray = [
    ...new Set(categoryData.map((item) => item.category)),
  ];
  if (categoryDataArray.length > 0 && category === "") {
    setCategory(categoryDataArray[0]);
  }

  console.log(categoryDataArray[0]);
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  return (
    <div className="w-full flex justify-center">
      <div>
        <div className="h-[111px] w-full bg-[#C61E72] pt-[45px]">
          <div className="">
            <div className="flex items-center px-[12px]">
              <div className="">
                <img
                  className="w-[8px] h-[16px]"
                  src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1709180329986Vector%20%287%29.png"
                />
              </div>
              <div className="w-full flex justify-center">
                <h1 className="text-white font-bold font-noto text-[18px]">
                  সাধারণ জিজ্ঞাসা
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="custom:w-[430px] md:w-[400px] sm:w-[375px] w-[350px] px-[12px]  pb-[50px]">
          <div>
            <div>
              <div className="flex  my-[20px]">
                <div className=" ">
                  <div className=" flex gap-x-[13px]">
                    {categoryDataArray.map((cat, index) => {
                      return (
                        <div key={index}>
                          <button
                            onClick={() =>
                              category === cat
                                ? category_status("")
                                : category_status(cat)
                            }
                            className={`${
                              category === cat
                                ? " rounded rounded-[20px] bg-[#F6DDEA] font-medium font-noto sm:text-[15px] custom:text-[17px] md:text-[16px] text-[13px] text-[#C61E72]   leading-[26px] px-[10px] h-[33px] pt-[5px]"
                                : " rounded  font-normal font-noto sm:text-[15px] custom:text-[17px] md:text-[16px] text-[13px] text-[#6C6C6C] h-[33px] pt-[5px] leading-[26px]"
                            }`}
                          >
                            {cat}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="">
                {faqData.map((data, index) => {
                  const isLastItem = index === faqData.length - 1;

                  return (
                    <div
                      key={index}
                      className={`sm:w-[345px] custom:w-[407px] md:w-[375px] w-[327px] mb-3 rounded  ${
                        isLastItem ? "" : ""
                      }`}
                    >
                      <SingalFaqMobile
                        key={index}
                        open={index === open}
                        question={data.question}
                        answer={data.answer}
                        toggle={() => toggle(index)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqMobile;
