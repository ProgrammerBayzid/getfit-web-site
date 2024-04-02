import Collapse from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingalFaqWeb = ({ key, open, question, answer, toggle }) => {
  return (
    <div>
      <div
        className={`bg-[#FFF0F9]  pt-[22px]  px-[25px] flex justify-between items-center cursor-pointer   ${
          open ? " pb-[8px]" : "rounded-lg pb-[18px]"
        }`}
        onClick={toggle}
      >
        <div>
          <p className="lg:text-[18px] xl:text-[18px]  text-[#101011] font-medium leading-[23px] font-noto">
            {question}
          </p>
        </div>
        <div className="lg:text-[22px] md:text-[20px] text-[18px] text-[#0077B5] ">
          {open ? (
            <img
              className="w-[12px] h-[22px]"
              src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1709048122620Vector%20%285%29.png"
            />
          ) : (
            <img
              className="w-[22px] h-[12px]"
              src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1709048083777Vector%20%284%29.png"
            />
          )}
        </div>
      </div>
      <div
        className={`pl-[25px]  pr-[35px]    rounded-b-lg bg-[#FFF0F9]  ${
          open ? " pb-[18px]" : ""
        }`}
      >
        <Collapse isOpened={open}>
          <p className="lg:text-[16px] xl:text-[16px]  text-[#101011] text-opacity-90 font-normal leading-[21px] font-noto">
            {answer}
          </p>
        </Collapse>
      </div>
    </div>
  );
};

export default SingalFaqWeb;
