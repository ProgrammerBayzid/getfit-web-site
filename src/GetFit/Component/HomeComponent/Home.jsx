import { Link } from "@reach/router";
import React from "react";
import HomeHero from "./HomeHero";
import Services from "./Services";
import AppDownload from "./AppDownload";
import BestDoctorAndNutrition from "./BestDoctorAndNutrition";
import PackageDetails from "./PackageDetails";
import CostomarReview from "./CostomarReview";
import ServicesInformetion from "./ServicesInformetion";
import MobileHomeHero from "./MobileHomeComponent/MobileHomeHero";
import BestDoctorAndNutritionMobile from "./MobileHomeComponent/BestDoctorAndNutritionMobile";
import AllOnlineDoctorMobile from "./MobileHomeComponent/AllOnlineDoctorMobile";
import ReviewHomeMObile from "./MobileHomeComponent/ReviewHomeMObile";
import HeaderMobile from "./MobileHomeComponent/HeaderMobile";
import ServicesMobile from "./MobileHomeComponent/ServicesMobile";
import ServicesPackageMobile from "./MobileHomeComponent/ServicesPackageMobile";
import { Helmet } from "react-helmet";
import { useState } from "react";
import DownloadAppModalMobile from "../../Modal/DownLoadAppModal/DownloadAppModalMobile";

const Home = () => {
  const [openModalMobile, closeModalMobile] = useState(false);
  return (
    <div>
      <Helmet>
        <title>
          Getfit - Your Online Destination for Personalized Nutrition Services
        </title>
        <link
          rel="icon"
          href="https://getfit-image-file.s3.amazonaws.com/1710907316288Group%2022.png"
        />
      </Helmet>
      <div className=" hidden lg:block">
        <HomeHero></HomeHero>
        <Services></Services>
        <BestDoctorAndNutrition></BestDoctorAndNutrition>
        <AppDownload></AppDownload>
        <PackageDetails></PackageDetails>
        <CostomarReview></CostomarReview>
        <ServicesInformetion></ServicesInformetion>
      </div>
      {/* mobile responsive component  */}
      <div className="block lg:hidden">
        <div className="block lg:hidden lock sticky top-0 z-40 h-[50px] bg-white flex items-center">
          <HeaderMobile></HeaderMobile>
        </div>
        <MobileHomeHero></MobileHomeHero>
        <BestDoctorAndNutritionMobile closeModalMobile={closeModalMobile}></BestDoctorAndNutritionMobile>
        <ServicesMobile closeModalMobile={closeModalMobile}></ServicesMobile>
        <ServicesPackageMobile closeModalMobile={closeModalMobile}></ServicesPackageMobile>
        <AllOnlineDoctorMobile closeModalMobile={closeModalMobile}></AllOnlineDoctorMobile>
        <ReviewHomeMObile closeModalMobile={closeModalMobile}></ReviewHomeMObile>
      </div>
      <DownloadAppModalMobile visible={openModalMobile} closeModal={closeModalMobile} />
    </div>
  );
};

export default Home;
