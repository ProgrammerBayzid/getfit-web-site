import React from "react";
import FaqWeb from "./FaqWeb";
import FaqMobile from "./FaqMobile";

const FaqPage = () => {
  <Helmet>
    <title>FAQ - Answers to Your Questions about Our Nutrition Services</title>
    <link
      rel="icon"
      href="https://getfit-image-file.s3.amazonaws.com/1710907316288Group%2022.png"
    />
  </Helmet>;
  return (
    <div>
      <div className=" hidden lg:block">
        <FaqWeb />
      </div>
      <div className="block lg:hidden">
        <FaqMobile />
      </div>
    </div>
  );
};

export default FaqPage;
