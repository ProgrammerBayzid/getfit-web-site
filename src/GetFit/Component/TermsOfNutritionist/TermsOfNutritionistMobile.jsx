import React from "react";
import { useToggleLanguage } from "../../Context/useToggleLanguage";
import { useLocation } from "@reach/router";

const TermsOfNutritionistMobile = () => {
  const { isToggledLanguage } = useToggleLanguage();
  const { pathname, search } = useLocation();
  const currentPath = pathname + search;
  return (
    <div className="w-full flex justify-center">
      <div
        className={`${
          currentPath === "/terms-of-nutritionist?navigation=true"
            ? "custom:w-[430px] md:w-[400px] sm:w-[375px] w-[350px] px-[12px] pt-[5px] pb-[80px]"
            : "custom:w-[430px] md:w-[400px] sm:w-[375px] w-[350px] px-[12px] pt-[25px] pb-[80px]"
        } `}
      >
        <div>
          {isToggledLanguage === true ? (
            <div></div>
          ) : (
            <div>
              {currentPath === "/terms-of-nutritionist?navigation=true" ? (
                <></>
              ) : (
                <div className="mt-[8px]">
                  <div className="flex items-center ">
                    <div className="w-[10px]">
                      <img src="/images/CommonLogo/backButtonIconForMobile.svg" />
                    </div>
                    <div className="w-full flex justify-center">
                      <h1 className="text-[#101011] font-bold font-inter text-[18px]">
                        Terms of Nutritionist
                      </h1>
                    </div>
                  </div>
                </div>
              )}

              <div className="">
                <div className="my-[10px]">
                  <div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                      Welcome to the Getfit health service. These Terms and
                      Conditions ("Terms") govern your use of the App as a
                      registered nutritionist. By accessing or using the App,
                      you agree to be bound by these Terms. If you do not agree
                      to these Terms, please do not use the App.
                    </p>
                  </div>
                </div>
                <div className="mt-[13px]">
                  <h2 className="text-[#101011] font-bold font-inter text-[16px]">
                    Our Services
                  </h2>

                  <div className="ml-[10px]">
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        Getfit provides nutrition and health services for the
                        people of Bangladesh through qualified and experienced
                        nutritionists. However, please note that Getfit does not
                        provide any emergency or medical treatment/services.
                        Registered nutritionists only offer advice on improving
                        life through diet plans and dietary changes.
                      </p>
                    </div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        Users can obtain personalized diet/nutrition plans from
                        our app for Weight Loss, Weight Gain, Thyroid and
                        Diabetes, PCOS/PCOD, Baby Nutrition or Pregnancy Diet,
                        Pet/Animal Nutrition, Liver Disease, Kidney Disease, and
                        High Pressure Diet. These plans are created based on the
                        information provided by the user and their results may
                        vary individually. These plans are managed under the
                        supervision of registered nutritionists.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-[13px]">
                  <h2 className="text-[#101011] font-bold font-inter text-[16px]">
                    Nutritionist Registration
                  </h2>

                  <div className="ml-[10px]">
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        By registering an account on getfit, you affirm that you
                        are at least 18 years old and have reached the age of
                        majority in your jurisdiction.
                      </p>
                    </div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        By register an account on Getfit, a nutritionist
                        acknowledges that all personal and other information
                        (e.g. name, location, educational qualifications,
                        experience, nid info etc) provided is completely
                        accurate and remain valid. If a nutritionist wants to
                        change or update any of their information, they must
                        notify the Getfit authorities.
                      </p>
                    </div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        You may have the option to register for an account using
                        third-party account credentials (e.g., Google or
                        Facebook). By doing so, you grant us permission to
                        access and use your information from the third-party
                        account for the purposes of account registration and
                        authentication.
                      </p>
                    </div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        You may only use the Getfit platform to provide
                        professional nutrition consultations and services to
                        users in accordance with these Terms and applicable
                        laws.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-[13px]">
                  <h2 className="text-[#101011] font-bold font-inter text-[16px]">
                    Account Approval
                  </h2>

                  <div className="ml-[10px]">
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        Getfit reserves the right to review and approve all
                        nutritionist registrations before granting access to the
                        platform.By registering as a nutritionist on Getfit, you
                        acknowledge that you have read and understood these
                        registration terms and agree to be bound by them.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-[13px]">
                  <h2 className="text-[#101011] font-bold font-inter text-[16px]">
                    Terms of Use
                  </h2>

                  <div className="ml-[10px]">
                    <div className="flex gap-x-[10px] mb-[1px]">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        Acknowledge that Getfit is not a substitute for
                        in-person nutrition health care, and you will not
                        provide any medical diagnosis or treatment advice
                        through the platform.
                      </p>
                    </div>

                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        Advise users to consult a physician for any concerning
                        medical conditions.
                      </p>
                    </div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        Be solely responsible for the quality, accuracy, and
                        effectiveness of the nutrition advice and services you
                        provide to users.
                      </p>
                    </div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        Treat all user information as confidential and comply
                        with all applicable laws and regulations regarding
                        privacy.
                      </p>
                    </div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        You are responsible for maintaining the confidentiality
                        of your account credentials, including your email and
                        password. You agree not to disclose your password to any
                        third party. You must immediately notify us if you
                        become aware of any unauthorized use of your account or
                        any other breach of security. You agree to accept
                        responsibility for all activities that occur under your
                        account.
                      </p>
                    </div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        Nutritionists must use the tools available on the Getfit
                        platform to communicate with clients.
                      </p>
                    </div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        A nutritionist is not allowed to ask for a client's
                        personal contact information, such as phone number or
                        email address etc. If someone intentionally does this,
                        it will be considered a violation of the terms of use.
                      </p>
                    </div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        The nutritionist cannot use the platform as an agent or
                        third party.
                      </p>
                    </div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        Avoid discriminatory or offensive language in all
                        interactions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-[13px]">
                  <h2 className="text-[#101011] font-bold font-inter text-[16px]">
                    Our Policy
                  </h2>

                  <div className="ml-[10px]">
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        We reserve the right to refuse registration of, or
                        cancel, an account in our sole discretion, for any
                        reason whatsoever. In the event of termination, all
                        provisions of these Terms of Use which by their nature
                        should survive termination, including, without
                        limitation, ownership provisions, warranty disclaimers,
                        indemnity, and limitations of liability, shall survive
                        termination.
                      </p>
                    </div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        We encourage you to regularly review the policies to
                        ensure you are compliant with the latest guidelines.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-[13px]">
                  <h2 className="text-[#101011] font-bold font-inter text-[16px]">
                    Payments
                  </h2>

                  <div className="ml-[10px]">
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        Payments will be settled on a monthly basis, typically
                        within 30 days. Payment shall be processed by deducting
                        Getfit's service and other applicable charges from the
                        nutritionist's full month's income.
                      </p>
                    </div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        All payment exchanges between the Parties shall be
                        consummated through a direct bank transfer.
                      </p>
                    </div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        Any disputes regarding payments must be raised within 7
                        days of receiving the statement of earnings. Failure to
                        dispute within this timeframe will be deemed as
                        acceptance of the statement.
                      </p>
                    </div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        Nutritionist is responsible for any taxes or fees
                        applicable to the payments received. It is the
                        nutritionist's obligation to comply with all relevant
                        tax laws and regulations.
                      </p>
                    </div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        In the event of termination of the agreement between the
                        nutritionist and Getfit, any outstanding payments owed
                        to the doctor will be settled within 7 days of the
                        termination date.
                      </p>
                    </div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        Getfit reserves the right to modify these payment terms
                        with prior notice to the doctor. Continued use of
                        Getfit's services after such modifications constitutes
                        acceptance of the revised payment terms.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-[13px]">
                  <h2 className="text-[#101011] font-bold font-inter text-[16px]">
                    Termination
                  </h2>

                  <div className="ml-[10px]">
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        Getfit may terminate the agreement upon written notice
                        to the other party, with or without cause, at any time.
                      </p>
                    </div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        Upon termination of the agreement, the doctor shall
                        immediately cease providing services through Getfit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-[13px]">
                  <h2 className="text-[#101011] font-bold font-inter text-[16px]">
                    Indemnity
                  </h2>

                  <div className="ml-[10px]">
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        Getfit will never be responsible for any activities of
                        nutritionists.
                      </p>
                    </div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        Doctor shall indemnify, defend from all actions,
                        proceedings, complaints, claims, damages, demands,
                        liabilities, costs, expenses, etc arising out of or in
                        relation with: any violation of confidentiality
                        obligations, any form of medical negligence, any
                        violation of the intellectual property rights, any act
                        of willful misconduct, any statutory violation, any
                        other act which may have any form of legal
                        impact platform;
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-[13px]">
                  <h2 className="text-[#101011] font-bold font-inter text-[16px]">
                    Intellectual Property Rights
                  </h2>

                  <div className="ml-[10px]">
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        The site contains various features and elements such as
                        graphics, content, images, and materials and Getfit owns
                        these items. The services are protected by copyright,
                        trademarks and other laws of Bangladesh. Without our
                        prior permission, none of our property or services can
                        be used elsewhere.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-[13px]">
                  <h2 className="text-[#101011] font-bold font-inter text-[16px]">
                    Relationship
                  </h2>

                  <div className="ml-[10px]">
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        The nutritionist acknowledges and agrees that their
                        relationship with Getfit is that of an independent
                        contractor. Nothing in this Agreement shall be construed
                        to create a partnership, joint venture, employment, or
                        agency relationship between the parties.
                      </p>
                    </div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        The nutritionist is free to provide services to other
                        entities or individuals and is not obligated to provide
                        services exclusively through Getfit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-[13px]">
                  <h2 className="text-[#101011] font-bold font-inter text-[16px]">
                    Governing Law and Jurisdiction
                  </h2>

                  <div className="ml-[10px]">
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[14px]">
                        This terms and conditions shall be governed by and
                        construed in accordance with the laws of Bangladesh. Any
                        dispute arising out of this Agreement may in the first
                        instance be resolved through conciliation or mediation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsOfNutritionistMobile;
