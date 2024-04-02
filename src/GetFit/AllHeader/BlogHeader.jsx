import { Link, useLocation } from "@reach/router";
import { useState } from "react";

const BlogHeader = () => {
  const { pathname } = useLocation();
  const currentPath = pathname;
  const [active, setActive] = useState(currentPath);

  return (
    <div className="w-full flex justify-center ">
      <div>
        <div className="xl:w-[1366px] lg:w-[1280px] flex justify-center">
          <div>
            <div className="bg-[url('https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711447225929Frame%2012127.png')] xl:w-[1366px] lg:w-[1280px] px-[45px] flex justify-between items-center h-[63px] bg-[#C61E72]">
              <div className="flex items-center gap-x-[5px]">
                <p className="font-noto font-normal text-[16px] text-white">
                  হোম
                </p>
                <img
                  src="https://getfit-image-file.s3.amazonaws.com/1711262984423Group.png"
                  className="w-[6px] h-[6px]"
                />
                <p className="font-noto font-normal text-[16px] text-white">
                  ব্লগ
                </p>
              </div>
              <div className="flex items-center gap-x-[30px]">
                <div>
                  <Link to="/blog">
                    <p
                      // onClick={() => setActive("ব্লগ")}
                      className={`${
                        active === "/blog"
                          ? "flex justify-center items-center font-noto cursor-pointer font-normal text-[18px] text-[#101011] px-[25px] h-[35px] bg-white rounded-[22px]"
                          : "font-noto font-normal text-[18px] text-white cursor-pointer px-[25px]"
                      }`}
                    >
                      ব্লগ
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/blog/recipe">
                    <p
                      className={`${
                        active === "/blog/recipe"
                          ? "flex justify-center items-center font-noto cursor-pointer font-normal text-[18px] text-[#101011] px-[20px] h-[35px] bg-white rounded-[22px]"
                          : "font-noto font-normal text-[18px] text-white cursor-pointer px-[20px]"
                      }`}
                    >
                      রেসিপি
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/blog/success-story">
                    <p
                      className={`${
                        active === "/blog/success-story"
                          ? "flex justify-center items-center font-noto cursor-pointer font-normal text-[18px] text-[#101011] px-[20px] h-[35px] bg-white rounded-[22px]"
                          : "font-noto font-normal text-[18px] text-white cursor-pointer px-[20px]"
                      }`}
                    >
                      সাফল্যের গল্প
                    </p>
                  </Link>
                </div>
              </div>
              <div>
                <div className="cursor-pointer w-[130px] h-[35px] flex items-center justify-between px-[10px] bg-white rounded-[6px]">
                  <p className="font-noto font-normal text-[18px] text-[#101011]">
                    সবগুলো
                  </p>
                  <img
                    className="w-[10px] h-[5px]"
                    src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711264968288Vector.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
