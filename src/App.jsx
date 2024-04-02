import { useEffect } from "react";
import "./App.css";
import AppRoutes from "./GetFit/Router/Routers";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToggleLanguageProvider } from "./GetFit/Context/useToggleLanguage";
import { ModalProvider } from "./GetFit/Context/useModalContext";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <ToggleLanguageProvider>
      <ModalProvider>
        <AppRoutes />
      </ModalProvider>
    </ToggleLanguageProvider>
  );
}

export default App;
