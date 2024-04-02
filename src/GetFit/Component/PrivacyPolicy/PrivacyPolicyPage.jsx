import React from "react";
import PrivacyPolicyMobile from "./PrivacyPolicyMobile";
import PrivacyPolicyWeb from "./PrivacyPolicyWeb";
import { Helmet } from "react-helmet";

const PrivacyPolicyPage = () => {
  <Helmet>
    <title>Privacy Policy - Getfit</title>
    <link
      rel="icon"
      href="https://getfit-image-file.s3.amazonaws.com/1710907316288Group%2022.png"
    />
  </Helmet>;
  return (
    <div>
      <div className=" hidden lg:block">
        <PrivacyPolicyWeb />
      </div>
      <div className="block lg:hidden">
        <PrivacyPolicyMobile />
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
