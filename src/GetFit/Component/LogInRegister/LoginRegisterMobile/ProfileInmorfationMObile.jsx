import React from "react";
import { useState } from "react";
import DefueltImageModal from "../DefueltImageModal";
import { useRef } from "react";
import Select from "react-select";
import { Link } from "@reach/router";

const ProfileInmorfationMObile = () => {
  const [openGender, setopenGender] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  console.log(selectedFile);
  console.log(selectedImage);
  const handleButtonClick = () => {
    fileInputRef.current.click();
    toggleDrop();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    // setSelectedDefaultFile(null);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const [isOpenf, setIsOpenf] = useState(false);
  const toggleDrop = () => {
    setIsOpenf(!isOpenf);
  };
  const [selectedDefaultFile, setSelectedDefaultFile] = useState(null); // New state for selected default file

  const options = [{ value: "male" }, { value: "female" }];
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };
  const [defultImageOpen, setdefultImageOpen] = useState(false);
  return (
    <div className="w-full flex justify-center mt-[20px]">
      <div className="custom:w-[430px] md:w-[400px] sm:w-[375px] w-[350px] px-[12px] ">
        <div>
          <div>
            <div>
              <img src="/images/CommonLogo/backButtonIconForMobile.svg" />
            </div>
          </div>
          <div className="sm:w-[345px] md:w-[372px] custom:w-[400px]">
            <h1 className="font-inter font-semibold text-[19px] leading-[30px] text-[#101011] text-center">
              Getfit এ একাউন্ট খোলার জন্য তথ্য
              <br /> গুলো পূরণ করুন
            </h1>
          </div>
          <div>
            <div className="mb-7 mt-[18px]">
              <div className=" flex justify-center">
                <div className="relative h-[52px] w-[52px]">
                  <img
                    onClick={toggleDrop}
                    src={
                      selectedImage === null
                        ? selectedDefaultFile === null
                          ? "/images/CommonLogo/profileimg.svg"
                          : selectedDefaultFile
                        : selectedImage || "/images/CommonLogo/profileimg.svg"
                    }
                    className="h-[52px] w-[52px] rounded rounded-full object-cover"
                  />
                  <img
                    onClick={toggleDrop}
                    className="absolute bottom-0 right-0  cursor-pointer"
                    src="/images/CommonLogo/camara.svg"
                  />
                </div>

                <input
                  type="file"
                  ref={fileInputRef}
                  name="image"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>
              <h1 className="text-center text-[14px] text-[#101011]  font-normal mt-3">
                আপনার প্রোফাইল ফটো আপলোড করুন
              </h1>
              <div className="ml-[72px] absolute z-40">
                {isOpenf && (
                  <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white rounded w-[210px] h-[160px] pb-3 pt-2  overflow-auto pl-5 pt-6 rounded-[10px]">
                    <p
                      onClick={handleButtonClick}
                      className="text-[#212427] cursor-pointer text-[16px] font-normal mb-4"
                    >
                      Upload From Gallery
                    </p>
                    <p
                      onClick={() => setdefultImageOpen(true)}
                      className="text-[#212427] cursor-pointer text-[16px] font-normal mb-4"
                    >
                      Select From Default
                    </p>
                    <p
                      onClick={toggleDrop}
                      className="text-[#212427] cursor-pointer text-[16px] font-normal mb-4"
                    >
                      Cancel
                    </p>
                  </div>
                )}
              </div>
              <div>
                <div className="mt-[20px]">
                  <h1 className="text-[14px] font-normal font-inter text-[#101011] mb-[5px]">
                    আপনার পুরো নাম
                  </h1>
                  <input
                    placeholder="e.g Jakaria Hasan"
                    className="pl-[13px] sm:w-[345px] md:w-[372px] custom:w-[400px] h-[40px] border border-[#101011] outline-none border-opacity-30 rounded rounded-[5px]"
                  />
                </div>
                <div className="mt-[10px]">
                  <h1 className="text-[14px] font-normal font-inter text-[#101011] mb-[5px]">
                    ইমেইল
                  </h1>
                  <input
                    placeholder="e.g jakaria@getfit.care"
                    className="pl-[13px] sm:w-[345px] md:w-[372px] custom:w-[400px] h-[40px] border border-[#101011] outline-none border-opacity-30 rounded rounded-[5px]"
                  />
                </div>
                <div className="mt-[10px] ">
                  <h1 className="text-[14px] font-normal font-inter text-[#101011] mb-[5px]">
                    আপনি একজন
                  </h1>
                  <div className="relative  sm:w-[345px] md:w-[372px] custom:w-[400px] h-[40px]">
                    <input
                      placeholder="Select"
                      className="pl-[13px] sm:w-[345px] md:w-[372px] custom:w-[400px] h-[40px] border border-[#101011] outline-none border-opacity-30 rounded rounded-[5px]"
                      defaultValue={selectedOption}
                      onClick={() => setopenGender(!openGender)}
                    />
                    <div className="absolute bottom-0 right-[15px] inset-y-1/2 ">
                      {openGender === false ? (
                        <img
                          onClick={() => setopenGender(!openGender)}
                          src="/images/CommonLogo/downAro.svg"
                        />
                      ) : (
                        <img
                          onClick={() => setopenGender(!openGender)}
                          className="rotate-180"
                          src="/images/CommonLogo/downAro.svg"
                        />
                      )}
                    </div>

                    {openGender && (
                      <div>
                        <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white rounded sm:w-[345px] md:w-[372px] custom:w-[400px] h-[100px] pb-3 pt-2  overflow-auto pl-5 pt-6 rounded-[10px]">
                          {options.map((v) => (
                            <p
                              onClick={() => handleSelectChange(v.value)}
                              className="text-[#212427] cursor-pointer text-[16px] font-normal mb-4"
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
              <div className="my-[20px]">
                <div className="flex gap-2 mb-[20px] items-center">
                  <input
                    className="cursor-pointer mb-[18px]"
                    type="checkbox"
                    // checked={agreed}
                    // onChange={() => setAgreed(!agreed)}
                  />
                  <p className="text-[14px] font-noto font-normal leading-[18px] text-[#101011] ml:2">
                    আমি গোপনীয়তা নীতির সাথে সম্মত আছি এবং শর্তাবলী <br />{" "}
                    স্বীকার করছি।
                  </p>
                </div>
                <div className="mt-[17px]">
                  <button className="sm:w-[345px] md:w-[372px] custom:w-[400px] h-[40px] bg-[#C61E72] rounded text-[16px] text-white font-inter font-normal">
                    সাইন আপ
                  </button>
                </div>
              </div>

              {defultImageOpen && (
                <DefueltImageModal
                  setSelectedDefaultFile={setSelectedDefaultFile}
                  setSelectedFile={setSelectedFile}
                  setSelectedImage={setSelectedImage}
                  setdefultImageOpen={setdefultImageOpen}
                  toggleDrop={toggleDrop}
                  defultImageOpen={defultImageOpen}
                ></DefueltImageModal>
              )}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInmorfationMObile;
