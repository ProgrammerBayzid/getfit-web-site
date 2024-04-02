import Collapse from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingalFaqMobile = ({ key, open, question, answer, toggle }) => {
  return (
    <div>
      <div
        className={`bg-[#FFF0F9]  pt-[10px]  px-[15px] flex justify-between  cursor-pointer   ${
          open ? " pb-[8px]" : "rounded-lg pb-[8px]"
        }`}
        onClick={toggle}
      >
        <div className="sm:w-[335px] custom:w-[385px] md:w-[355px] w-[305px]">
          <p className="sm:text-[15px] custom:text-[17px] md:text-[16px] text-[13px]  text-[#101011] font-medium leading-[23px] font-noto">
            {question}
          </p>
        </div>
        <div className=" mt-[5px]">
          {open ? (
            <img
              className="w-[12px] h-[7px] -rotate-90"
              src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1709181864925Group%20%2819%29.png"
            />
          ) : (
            <img
              className="w-[12px] h-[7px]"
              src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1709181864925Group%20%2819%29.png"
            />
          )}
        </div>
      </div>
      <div
        className={`pl-[15px]  pr-[20px]    rounded-b-lg bg-[#FFF0F9]  ${
          open ? " pb-[18px]" : ""
        }`}
      >
        <Collapse isOpened={open}>
          <p className="sm:text-[13px] custom:text-[15px] md:text-[14px] text-[12px]  text-[#101011] text-opacity-90 font-normal leading-[21px] font-noto">
            {answer}
          </p>
        </Collapse>
      </div>
    </div>
  );
};

export default SingalFaqMobile;
