import React from "react";
import ContactUsWeb from "./ContactUsWeb";
import ContactUsMobile from "./ContactUsMobile";
import { Helmet } from "react-helmet";

const ContactUsPage = () => {
  <Helmet>
    <title>Contact Us - Getfit Online Nutrition Services in BD</title>
    <link
      rel="icon"
      href="https://getfit-image-file.s3.amazonaws.com/1710907316288Group%2022.png"
    />
  </Helmet>;
  return (
    <div>
      <div className=" hidden lg:block">
        <ContactUsWeb />
      </div>
      <div className="block lg:hidden">
        <ContactUsMobile />
      </div>
    </div>
  );
};

export default ContactUsPage;
