import React from "react";
import AboutUsWeb from "./AboutUsWeb";
import AboutUsMobile from "./AboutUsMobile";
import { Helmet } from "react-helmet";

const AboutUsPage = () => {
  <Helmet>
    <title>About Us - Empowering Your Journey to Health and Wellness</title>
    <link
      rel="icon"
      href="https://getfit-image-file.s3.amazonaws.com/1710907316288Group%2022.png"
    />
  </Helmet>;
  return (
    <div>
      <div className=" hidden lg:block">
        <AboutUsWeb />
      </div>
      <div className="block lg:hidden">
        <AboutUsMobile />
      </div>
    </div>
  );
};

export default AboutUsPage;
