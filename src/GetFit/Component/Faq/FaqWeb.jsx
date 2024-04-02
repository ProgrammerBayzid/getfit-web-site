import React, { useEffect, useState } from "react";
import SingalFaqWeb from "./SingalFaqWeb";

const FaqWeb = () => {
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
    <div className="w-full pb-[300px] flex justify-center">
      <div className="xl:w-[1366px] lg:w-[1280px]  flex justify-center ">
        <div>
          <div>
            <div className="mt-[60px] mb-[15px]">
              <h1 className="text-center font-bold  font-noto xl:text-[28px] lg:text-[28px] leading-[33px] text-[#101011] ">
                সাধারণ জিজ্ঞাসা
              </h1>
            </div>
            <div className="flex justify-center my-[30px]">
              <div className=" ">
                <div className=" flex xl:gap-x-[25px] lg:gap-x-[13px]">
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
                              ? " rounded rounded-[20px] bg-[#F6DDEA] font-semibold font-noto text-[20px] text-[#C61E72]   leading-[26px] px-[10px] h-[33px] pt-[5px]"
                              : " rounded  font-normal font-noto text-[20px] text-[#6C6C6C] h-[33px] pt-[5px] leading-[26px]"
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
            <div className="">
              {faqData.map((data, index) => {
                const isLastItem = index === faqData.length - 1;

                return (
                  <div
                    key={index}
                    className={`lg:w-[1000px] mb-3 rounded  ${
                      isLastItem ? "" : ""
                    }`}
                  >
                    <SingalFaqWeb
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
  );
};

export default FaqWeb;
