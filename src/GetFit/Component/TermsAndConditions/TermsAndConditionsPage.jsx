import React from "react";
import TermsAndConditionsMobile from "./TermsAndConditionsMobile";
import TermsAndConditionsWeb from "./TermsAndConditionsWeb";
import { Helmet } from "react-helmet";

const TermsAndConditionsPage = () => {
  <Helmet>
    <title>Terms for Client - Getfit</title>
    <link
      rel="icon"
      href="https://getfit-image-file.s3.amazonaws.com/1710907316288Group%2022.png"
    />
  </Helmet>;
  return (
    <div>
      <div className=" hidden lg:block">
        <TermsAndConditionsWeb />
      </div>
      <div className="block lg:hidden">
        <TermsAndConditionsMobile />
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
