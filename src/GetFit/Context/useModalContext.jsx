import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext(null);

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [openModalDownloadApp, setOpenModalDownloadApp] = useState(null);

  return (
    <ModalContext.Provider
      value={{ openModalDownloadApp, setOpenModalDownloadApp }}
    >
      {children}
    </ModalContext.Provider>
  );
};
