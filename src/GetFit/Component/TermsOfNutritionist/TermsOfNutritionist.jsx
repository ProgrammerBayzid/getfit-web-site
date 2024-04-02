import React from "react";
import TermsOfNutritionistWeb from "./TermsOfNutritionistWeb";
import TermsOfNutritionistMobile from "./TermsOfNutritionistMobile";
import { Helmet } from "react-helmet";

const TermsOfNutritionist = () => {
  <Helmet>
    <title>Terms for Client - Nutritionist</title>
    <link
      rel="icon"
      href="https://getfit-image-file.s3.amazonaws.com/1710907316288Group%2022.png"
    />
  </Helmet>;
  return (
    <div>
      <div className=" hidden lg:block">
        <TermsOfNutritionistWeb />
      </div>
      <div className="block lg:hidden">
        <TermsOfNutritionistMobile />
      </div>
    </div>
  );
};

export default TermsOfNutritionist;
