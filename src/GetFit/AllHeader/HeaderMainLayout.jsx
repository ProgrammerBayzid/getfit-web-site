import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You may need to import the AOS styles as well
import { useToggleLanguage } from "../Context/useToggleLanguage";
import { Link } from "@reach/router";

const HeaderMainLayout = ({
  closeModal,
  closeModalBmiCalculator,
  setOpenModalDownloadApp,
}) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isRecipeOpen, setIsRecipeOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };
  const toggleCalculatorDropdown = () => {
    setIsCalculatorOpen(!isCalculatorOpen);
  };
  const closeDropdown = () => {
    // Apply fade-zoom-out effect when dropdown closes
    AOS.refresh({
      duration: 3000,
      easing: "ease-out-back",
      fadeing: "fade-zoom-out",
    });
    setIsOpen(false);
  };
  const closeServicesDropdown = () => {
    // Apply fade-zoom-out effect when dropdown closes
    AOS.refresh({
      duration: 3000,
      easing: "ease-out-back",
      fadeing: "fade-zoom-out",
    });
    setIsServicesOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
        closeServicesDropdown();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const { isToggledLanguage, setIsToggledLanguage } = useToggleLanguage();

  const handleClick = () => {
    setIsToggledLanguage((prevState) => !prevState);
  };

  console.log(isToggledLanguage);

  return (
    <div>
      <div className=" h-[58px]  bg-[#C61E72] flex justify-center">
        <div className=" h-[58px] bg-[#C61E72] xl:w-[1366px] lg:w-[1280px] xl:px-[45px] lg:px-[45px] flex items-center justify-between ">
          <div>
            <Link to="/">
              <img
                className="w-[111px] h-[26px]"
                src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1709047626498Group%2012305.png"
              />
            </Link>
          </div>
          <div className="  flex gap-x-[45px]">
            <div className="  flex items-center gap-x-[45px]">
              <div>
                <div className=" relative  " ref={dropdownRef}>
                  <div
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="mt-[37px] h-[58px]"
                  >
                    <div className=" flex gap-[5px] items-center">
                      <p
                        onMouseEnter={() => setIsServicesOpen(true)}
                        // onMouseLeave={() => setIsServicesOpen(false)}
                        //   onClick={toggleServicesDropdown}
                        className="font-noto  font-light text-[#FFFFFF] text-[18px] leading-[21px] cursor-pointer"
                      >
                        সেবাসমূহ
                      </p>
                      {isServicesOpen === false ? (
                        <img
                          onMouseEnter={() => setIsServicesOpen(true)}
                          className="font-noto  w-[12px] h-[12px] cursor-pointer"
                          src="/images/MainHeaderImages/NavDropdownIcon.svg"
                        />
                      ) : (
                        <img
                          onMouseEnter={() => setIsServicesOpen(true)}
                          className="font-noto  w-[12px] h-[12px] rotate-180 cursor-pointer"
                          src="/images/MainHeaderImages/NavDropdownIcon.svg"
                        />
                      )}
                    </div>
                    {isServicesOpen && (
                      <div
                        data-aos="fade-zoom-in "
                        data-aos-easing="ease-in-back "
                        data-aos-delay="40"
                        data-aos-offset="0"
                        onMouseLeave={() => setIsServicesOpen(false)}
                        className="font-noto absolute top-0 -left-[20px] mt-2 bg-white border shadow-lg w-[199px] h-[437px] rounded-b-[10px] mt-[40px]  py-[15px] transition-all ease-in-out duration-500 opacity-100"
                      >
                        <div>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            ওয়েট লস
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            অয়েট গেইন
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            থাইরয়েড
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            PCOS
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            ডায়াবেটিস
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            বেবী নিউট্রিশন
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            প্রেগন্যন্সি ডায়েট
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            লিভার রোগ ডায়েট
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            কিডনি রোগ
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            হাইপ্রেশার ডায়েট
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div className=" relative  ">
                  <div
                    onMouseLeave={() => setIsBlogOpen(false)}
                    className="mt-[37px] h-[58px]"
                  >
                    <div className=" flex gap-[5px] items-center">
                      <p
                        onMouseEnter={() => setIsBlogOpen(true)}
                        // onMouseLeave={() => setIsBlogOpen(false)}
                        //   onClick={toggleServicesDropdown}
                        className="font-noto  font-light text-[#FFFFFF] text-[18px] leading-[21px] cursor-pointer"
                      >
                        ব্লগ
                      </p>
                      {isBlogOpen === false ? (
                        <img
                          onMouseEnter={() => setIsBlogOpen(true)}
                          className="font-noto  w-[12px] h-[12px] cursor-pointer"
                          src="/images/MainHeaderImages/NavDropdownIcon.svg"
                        />
                      ) : (
                        <img
                          onMouseEnter={() => setIsBlogOpen(true)}
                          className="font-noto  w-[12px] h-[12px] rotate-180 cursor-pointer"
                          src="/images/MainHeaderImages/NavDropdownIcon.svg"
                        />
                      )}
                    </div>
                    {isBlogOpen && (
                      <div
                        data-aos="fade-zoom-in "
                        data-aos-easing="ease-in-back "
                        data-aos-delay="40"
                        data-aos-offset="0"
                        onMouseLeave={() => setIsBlogOpen(false)}
                        className="font-noto absolute top-0 -left-[21px] mt-2 bg-white border shadow-lg w-[199px] h-[437px] rounded-b-[10px] mt-[40px]  py-[15px] transition-all ease-in-out duration-500 opacity-100"
                      >
                        <div>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            ওয়েট লস
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            অয়েট গেইন
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            থাইরয়েড
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            PCOS
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            ডায়াবেটিস
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            বেবী নিউট্রিশন
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            প্রেগন্যন্সি ডায়েট
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            লিভার রোগ ডায়েট
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            কিডনি রোগ
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            হাইপ্রেশার ডায়েট
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div className=" relative  " ref={dropdownRef}>
                  <div
                    onMouseLeave={() => setIsRecipeOpen(false)}
                    className="mt-[37px] h-[58px]"
                  >
                    <div className=" flex gap-[5px] items-center">
                      <p
                        onMouseEnter={() => setIsRecipeOpen(true)}
                        // onMouseLeave={() => setIsRecipeOpen(false)}
                        //   onClick={toggleServicesDropdown}
                        className="font-noto  font-light text-[#FFFFFF] text-[18px] leading-[21px] cursor-pointer"
                      >
                        রেসিপি
                      </p>
                      {isRecipeOpen === false ? (
                        <img
                          onMouseEnter={() => setIsRecipeOpen(true)}
                          className="font-noto  w-[12px] h-[12px] cursor-pointer"
                          src="/images/MainHeaderImages/NavDropdownIcon.svg"
                        />
                      ) : (
                        <img
                          onMouseEnter={() => setIsRecipeOpen(true)}
                          className="font-noto  w-[12px] h-[12px] rotate-180 cursor-pointer"
                          src="/images/MainHeaderImages/NavDropdownIcon.svg"
                        />
                      )}
                    </div>
                    {isRecipeOpen && (
                      <div
                        data-aos="fade-zoom-in "
                        data-aos-easing="ease-in-back "
                        data-aos-delay="40"
                        data-aos-offset="0"
                        onMouseLeave={() => setIsRecipeOpen(false)}
                        className="font-noto absolute top-0 -left-[21px] mt-2 bg-white border shadow-lg w-[199px] h-[437px] rounded-b-[10px] mt-[40px]  py-[15px] transition-all ease-in-out duration-500 opacity-100"
                      >
                        <div>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            ওয়েট লস
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            অয়েট গেইন
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            থাইরয়েড
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            PCOS
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            ডায়াবেটিস
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            বেবী নিউট্রিশন
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            প্রেগন্যন্সি ডায়েট
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            লিভার রোগ ডায়েট
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            কিডনি রোগ
                          </p>
                          <p
                            onClick={() => closeModal(true)}
                            className="font-noto font-normal cursor-pointer text-[#95004A] text-[18px] leading-[36px] w-[198px] h-[32px] hover:bg-[#EBEBEB] flex items-center pt-[6px] pl-[20px] mb-[9px]"
                          >
                            হাইপ্রেশার ডায়েট
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className=" relative  ">
                <div
                  onMouseLeave={() => setIsCalculatorOpen(false)}
                  className="mt-[37px] h-[58px]"
                >
                  <div
                    className="  flex  gap-[5px] items-center "
                    onMouseEnter={() => setIsCalculatorOpen(true)}
                  >
                    <p className="cursor-pointer font-light font-noto text-[#FFFFFF] text-[18px] leading-[21px]">
                      ফিটনেস ক্যালকুলেটর
                    </p>

                    {isCalculatorOpen === false ? (
                      <img
                        onMouseEnter={() => setIsCalculatorOpen(true)}
                        className="font-noto  w-[12px] h-[12px] cursor-pointer"
                        src="/images/MainHeaderImages/NavDropdownIcon.svg"
                      />
                    ) : (
                      <img
                        onMouseEnter={() => setIsCalculatorOpen(true)}
                        className="font-noto  w-[12px] h-[12px] rotate-180 cursor-pointer"
                        src="/images/MainHeaderImages/NavDropdownIcon.svg"
                      />
                    )}
                  </div>
                  {isCalculatorOpen && (
                    <div
                      data-aos="fade-zoom-in "
                      data-aos-easing="ease-in-back "
                      data-aos-delay="40"
                      data-aos-offset="0"
                      onMouseLeave={() => setIsCalculatorOpen(false)}
                      className="font-noto absolute top-[37px] -left-[20px] mt-2 bg-white border shadow-lg w-[253px] h-[463px] rounded-b-[10px] mt-[40px]  py-[15px] transition-all ease-in-out duration-500 opacity-100"
                    >
                      <div>
                        <div className="cursor-pointer w-[252px] h-[32px]  flex items-center pt-[6px] pl-[20px] mb-[17px]">
                          <div
                            onClick={() => closeModalBmiCalculator(true)}
                            className="flex gap-x-[13px] items-center"
                          >
                            <div>
                              <img
                                onMouseEnter={() => setIsCalculatorOpen(true)}
                                className="font-noto  w-[24px] h-[24px]  rounded-full"
                                src="https://getfit-image-file.s3.amazonaws.com/1708432237580Group%20%282%29.png"
                              />
                            </div>
                            <div>
                              {" "}
                              <p className="font-noto  font-normal cursor-pointer text-[#101011] text-opacity-90 text-[16px] leading-[20px] mt-[4px]">
                                <span className=" font-noto">BMI</span>{" "}
                                ক্যালকুলেটর
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          onClick={() => closeModal(true)}
                          className="cursor-pointer w-[252px] h-[32px]  flex items-center pt-[6px] pl-[20px] mb-[17px]"
                        >
                          <div className="flex gap-x-[13px] items-center">
                            <div>
                              <img
                                onMouseEnter={() => setIsCalculatorOpen(true)}
                                className="font-noto  w-[24px] h-[24px] "
                                src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708432707739Group%2014296.png"
                              />
                            </div>
                            <div>
                              {" "}
                              <p className="font-noto  font-normal cursor-pointer text-[#101011] text-opacity-90 text-[16px] leading-[20px] mt-[4px]">
                                প্রেগন্যান্সি ক্যালকুলেটর
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          onClick={() => closeModal(true)}
                          className="cursor-pointer w-[252px] h-[32px]  flex items-center pt-[6px] pl-[20px] mb-[17px]"
                        >
                          <div className="flex gap-x-[13px] items-center">
                            <div>
                              <img
                                onMouseEnter={() => setIsCalculatorOpen(true)}
                                className="font-noto w-[24px] h-[24px]  rounded-full"
                                src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708432863943Group%20%283%29.png"
                              />
                            </div>
                            <div>
                              {" "}
                              <p className="font-noto  font-normal cursor-pointer text-[#101011] text-opacity-90 text-[16px] leading-[20px] mt-[4px]">
                                <span className=" font-noto">PCOS</span>{" "}
                                ক্যালকুলেটর
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          onClick={() => closeModal(true)}
                          className="cursor-pointer w-[252px] h-[32px]  flex items-center pt-[6px] pl-[20px] mb-[17px]"
                        >
                          <div className="flex gap-x-[13px] items-center">
                            <div>
                              <img
                                onMouseEnter={() => setIsCalculatorOpen(true)}
                                className="font-noto  w-[24px] h-[24px]  rounded-full"
                                src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708433080589Group%20%284%29.png"
                              />
                            </div>
                            <div>
                              {" "}
                              <p className="font-noto font-medium cursor-pointer text-[#101011] text-opacity-90 text-[16px] leading-[20px] mt-[4px]">
                                <span className="">BMR</span> ক্যালকুলেটর
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          onClick={() => closeModal(true)}
                          className="cursor-pointer w-[252px] h-[32px]  flex items-center pt-[6px] pl-[20px] mb-[17px]"
                        >
                          <div className="flex gap-x-[13px] items-center">
                            <div>
                              <img
                                onMouseEnter={() => setIsCalculatorOpen(true)}
                                className="font-noto  w-[24px] h-[24px]  "
                                src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708433143447Group%20%285%29.png"
                              />
                            </div>
                            <div>
                              {" "}
                              <p className="font-noto font-medium cursor-pointer text-[#101011] text-opacity-90 text-[16px] leading-[20px] mt-[4px]">
                                বডি ফ্যাট ক্যালকুলেটর
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          onClick={() => closeModal(true)}
                          className="cursor-pointer w-[252px] h-[32px]  flex items-center pt-[6px] pl-[20px] mb-[17px]"
                        >
                          <div className="flex gap-x-[13px] items-center">
                            <div>
                              <img
                                onMouseEnter={() => setIsCalculatorOpen(true)}
                                className="font-noto  w-[24px] h-[24px]  "
                                src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708433198179Group%20%286%29.png"
                              />
                            </div>
                            <div>
                              {" "}
                              <p className="font-noto font-medium cursor-pointer text-[#101011] text-opacity-90 text-[16px] leading-[20px] mt-[4px]">
                                প্রোটিন ক্যালকুলেটর
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          onClick={() => closeModal(true)}
                          className="cursor-pointer w-[252px] h-[32px]  flex items-center pt-[6px] pl-[20px] mb-[17px]"
                        >
                          <div className="flex gap-x-[13px] items-center">
                            <div>
                              <img
                                onMouseEnter={() => setIsCalculatorOpen(true)}
                                className="font-noto  w-[24px] h-[24px]  "
                                src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708433291219Group%20%287%29.png"
                              />
                            </div>
                            <div>
                              {" "}
                              <p className="font-noto font-medium cursor-pointer text-[#101011] text-opacity-90 text-[16px] leading-[20px] mt-[4px]">
                                <span className="">GFR</span> ক্যালকুলেটর
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          onClick={() => closeModal(true)}
                          className="cursor-pointer w-[252px] h-[32px]  flex items-center pt-[6px] pl-[20px] mb-[17px]"
                        >
                          <div className="flex gap-x-[13px] items-center">
                            <div>
                              <img
                                onMouseEnter={() => setIsCalculatorOpen(true)}
                                className="font-noto  w-[24px] h-[24px]  "
                                src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708433377101Group%20%288%29.png"
                              />
                            </div>
                            <div>
                              {" "}
                              <p className="font-noto font-medium cursor-pointer text-[#101011] text-opacity-90 text-[16px] leading-[20px] mt-[4px]">
                                <span className="">TDE</span> ক্যালকুলেটর
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          onClick={() => closeModal(true)}
                          className="cursor-pointer w-[252px] h-[32px]  flex items-center pt-[6px] pl-[20px] mb-[17px]"
                        >
                          <div className="flex gap-x-[13px] items-center">
                            <div>
                              <img
                                onMouseEnter={() => setIsCalculatorOpen(true)}
                                className="font-noto  w-[24px] h-[24px] "
                                src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1708433420106Group%20%289%29.png"
                              />
                            </div>
                            <div>
                              {" "}
                              <p className="font-noto font-medium cursor-pointer text-[#101011] text-opacity-90 text-[16px] leading-[20px] mt-[4px]">
                                আদর্শ ওজন ক্যালকুলেটর
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="font-noto  flex  gap-[5px] items-center">
                <p
                  onClick={() => closeModal(true)}
                  className="font-noto  font-light text-[#FFFFFF] text-[18px] leading-[21px] cursor-pointer"
                >
                  ডাউনলোড অ্যাপ
                </p>
              </div>
            </div>
            <div className="  flex items-center gap-x-[33px]">
              {/* <div>
                <div class="group flex relative">
                  <span class="font-noto  w-[120px] h-[36px] border border-[#C61E72]  border-[1px] rounded rounded-[19px]  font-light text-[#FFFFFF] text-[18px] leading-[21px] flex items-center justify-center pt-[3px]">
                    {" "}
                    জয়েন করুন
                  </span>
                  <span class="group-hover:opacity-100 transition-opacity bg-[#C61E72] px-[5px]  absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0   mx-auto w-[275px] h-[30px] font-medium text-[#FFFFFF] text-[15px] leading-[19px] flex items-center pt-[4px] mt-[15px] rounded-[10px]">
                    শুধুমাত্র নিউট্রিশনিস্ট এবং ডক্টরদের জন্য{" "}
                  </span>
                </div>
              </div> */}
              <div>
                <button
                  type="button"
                  onClick={() => closeModal(true)}
                  className="font-noto border-[#FFFFFF] w-[160px] h-[36px] border  bg-[#C61E72] border-[1px] rounded rounded-[19px] pt-[3px] font-light hover:font-normal text-[#FFFFFF] text-[18px] leading-[21px] hover:bg-white hover:text-[#C61E72]"
                >
                  লগ ইন/সাইন আপ
                </button>
              </div>
              <div className="font-noto  relative " ref={dropdownRef}>
                <img
                  onClick={toggleDropdown}
                  src="/images/MainHeaderImages/getfitHeaderDropDownlogo.svg"
                  className="font-noto  cursor-pointer"
                />

                {isOpen && (
                  <div
                    data-aos="fade-zoom-in "
                    data-aos-easing="ease-in-back "
                    data-aos-delay="40"
                    data-aos-offset="0"
                    onMouseLeave={() => setIsOpen(false)}
                    className="font-noto absolute top-0 right-0 mt-2 bg-white border shadow-lg w-[136px] h-[106px] rounded-bl-[10px] mt-[40px] pl-[17px] pt-[20px] transition-all ease-in-out duration-500 opacity-100 z-50"
                  >
                    <Link to="/blog/recipe">
                      <p className="font-noto cursor-pointer font-light text-[#101011] text-[18px] leading-[22px]">
                        রেসিপি
                      </p>
                    </Link>
                    <Link to="/blog">
                      <p className="font-noto cursor-pointer mt-[14px] font-light text-[#101011] text-[18px] leading-[22px]">
                        ব্লগ সমূহ
                      </p>
                    </Link>

                    <div>
                      {/* <div className="flex items-center justify-center mt-4">
                        <span className="mr-2">Bangla</span>
                        <label
                          htmlFor="languageSwitch"
                          className="flex items-center cursor-pointer"
                        >
                          <div className="relative">
                            <input
                              type="checkbox"
                              id="languageSwitch"
                              className="hidden"
                              checked={isToggledLanguage}
                              onChange={handleClick}
                            />
                            <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                            <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
                          </div>
                        </label>
                        <span className="ml-2">English</span>
                      </div> */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMainLayout;
