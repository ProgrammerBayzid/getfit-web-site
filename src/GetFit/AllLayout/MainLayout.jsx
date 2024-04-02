import React, { useEffect, useState } from "react";
import HeaderMainLayout from "../AllHeader/HeaderMainLayout";
import FooterMainLayout from "../AllFooter/FooterMainLayout";
import { useLocation } from "@reach/router";
import HeaderForMobile from "../AllHeader/HeaderForMobile";
import DownLoadAppModal from "../Modal/DownLoadAppModal/DownLoadAppModal";
import BmiCalculatorPopUp from "../Modal/CalculatorPopUp/BmiCalculatorPopUp";
import DownloadAppForPackageDoctor from "../Modal/DownLoadAppModal/DownloadAppForPackageDoctor";
import { useModalContext } from "../Context/useModalContext";
import DownloadAppModalMobile from "../Modal/DownLoadAppModal/DownloadAppModalMobile";
// import HeaderMobile from "../Component/HomeComponent/MobileHomeComponent/HeaderMobile";

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [openModal, closeModal] = useState(false);
  const [openModalMobile, closeModalMobile] = useState(false);
  const [openModalBmiCalculator, closeModalBmiCalculator] = useState(false);
  const { openModalDownloadApp, setOpenModalDownloadApp } = useModalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const currentPath = pathname;
  console.log(currentPath);
  return (
    <div>
      <div className="hidden lg:block sticky top-0 z-40">
        <HeaderMainLayout
          closeModal={closeModal}
          closeModalBmiCalculator={closeModalBmiCalculator}
          setOpenModalDownloadApp={setOpenModalDownloadApp}
        ></HeaderMainLayout>
      </div>
      {/* <div className="block lg:hidden lock sticky top-0 z-40 h-[50px] bg-white flex items-center">
        <HeaderMobile></HeaderMobile>
      </div> */}
      <div>
        <main> {children}</main>
      </div>
      <div>
        <div className="hidden lg:block">
          <FooterMainLayout closeModal={closeModal}></FooterMainLayout>
        </div>
        {currentPath === "/terms-of-nutritionist" ||
        currentPath === "/privacy-policy" ||
        currentPath === "/terms-and-conditions" ? (
          <div></div>
        ) : (
          <div className=" ">
            <HeaderForMobile
              closeModalMobile={closeModalMobile}
            ></HeaderForMobile>
          </div>
        )}
      </div>
      <DownLoadAppModal visible={openModal} closeModal={closeModal} />
      <DownloadAppModalMobile
        visible={openModalMobile}
        closeModal={closeModalMobile}
      />
      <DownloadAppForPackageDoctor
        visible={openModalDownloadApp}
        closeModal={setOpenModalDownloadApp}
      />
      <BmiCalculatorPopUp
        visibleBmiCalculator={openModalBmiCalculator}
        closeModalBmiCalculator={closeModalBmiCalculator}
      />
    </div>
  );
};

export default MainLayout;
