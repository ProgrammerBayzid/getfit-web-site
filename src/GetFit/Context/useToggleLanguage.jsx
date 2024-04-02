import React, { createContext, useState, useContext, useEffect } from "react";

const ToggleLanguageContext = createContext();

export const ToggleLanguageProvider = ({ children }) => {
  const [isToggledLanguage, setIsToggledLanguage] = useState(() => {
    // Check if localStorage is available before accessing it
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("isToggledLanguage")) || false;
    } else {
      return false; // Default value if localStorage is not available
    }
  });

  useEffect(() => {
    // Check if localStorage is available before accessing it
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "isToggledLanguage",
        JSON.stringify(isToggledLanguage)
      );
    }
  }, [isToggledLanguage]);

  return (
    <ToggleLanguageContext.Provider
      value={{ isToggledLanguage, setIsToggledLanguage }}
    >
      {children}
    </ToggleLanguageContext.Provider>
  );
};

export const useToggleLanguage = () => {
  return useContext(ToggleLanguageContext);
};
