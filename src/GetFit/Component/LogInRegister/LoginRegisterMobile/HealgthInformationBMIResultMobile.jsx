import React from "react";
import { useLocation } from "@reach/router";

const HealgthInformationBMIResultMobile = () => {
  const location = useLocation();
  const bmiResult = location.state?.bmiResult;

  if (!bmiResult) {
    // Handle the case when the state is not available
    return <p>No BMI result available</p>;
  }
  return (
    <div>
      <h2>BMI Result</h2>
      <p>Your BMI is: {bmiResult.value}</p>
      <p>BMI Category: {bmiResult.category}</p>
    </div>
  );
};

export default HealgthInformationBMIResultMobile;
