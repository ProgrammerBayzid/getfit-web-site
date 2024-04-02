import React from "react";
import { Router } from "@reach/router";
import MainLayout from "../AllLayout/MainLayout";
import Home from "../Component/HomeComponent/Home";
import HealthCalculatorMobile from "../Component/HealthCalculator/HealthCalculatorMobile";
import BmiCalculator from "../Component/HealthCalculator/AllServicesCalculatoe/BmiCalculator";
import LoginPage from "../Component/LogInRegister/LoginPage";
import OtpPage from "../Component/LogInRegister/OtpPage";
import ProfileInformetion from "../Component/LogInRegister/ProfileInformetion";
import HealgthInformation from "../Component/LogInRegister/HealgthInformation";
import PackagePage from "../Component/AllPackage/PackagePage";
import ChooseNutritionistMobile from "../Component/AllChooseNutritionist/ChooseNutritionistMobile";
import HealgthInformationBMIResultPage from "../Component/LogInRegister/LoginRegisterMobile/HealgthInformationBMIResultPage";
import PrivacyPolicyPage from "../Component/PrivacyPolicy/PrivacyPolicyPage";
import TermsAndConditionsPage from "../Component/TermsAndConditions/TermsAndConditionsPage";
import ContactUsPage from "../Component/ContactUs/ContactUsPage";
import FaqPage from "../Component/Faq/FaqPage";
import AboutUsPage from "../Component/AboutUs/AboutUsPage";
import TermsOfNutritionist from "../Component/TermsOfNutritionist/TermsOfNutritionist";
import BlogPage from "../Component/Blog/BlogPage";
import BlogPageLayout from "../AllLayout/BlogPageLayout";
import RecipePage from "../Component/Recipe/RecipePage";
import SuccessStoryPage from "../Component/SuccessStory/SuccessStoryPage";
import BlogDetails from "../Component/Blog/BlogDetails";

const AppRoutes = () => {
  return (
    <Router>
      <MainLayout path="/">
        <Home path="/" />
        <ContactUsPage path="/contactus" />
        <FaqPage path="/faq" />
        <PrivacyPolicyPage path="/privacy-policy" />
        <TermsAndConditionsPage path="/terms-and-conditions" />
        <AboutUsPage path="/aboutus" />
        <TermsOfNutritionist path="/terms-of-nutritionist" />
        <BlogPageLayout path="/blog">
          <BlogPage path="/" />
          <RecipePage path="/recipe" />
          <SuccessStoryPage path="/success-story" />
        </BlogPageLayout>
        <BlogDetails path="/blog/details/:id" />
      </MainLayout>
      <HealthCalculatorMobile path="/health-calculator" />
      <BmiCalculator path="/bmi-calculator" />
      <LoginPage path="/login" />
      <OtpPage path="/otp" />
      <ProfileInformetion path="/profile-information" />
      <HealgthInformation path="/health-information" />
      <HealgthInformationBMIResultPage path="/health-information-bmi-result" />
      <PackagePage path="/package" />
      <ChooseNutritionistMobile path="/ChooseNutritionist" />
    </Router>
  );
};

export default AppRoutes;
