import React from "react";
import ModalFade from "./components/ModalFade";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useDataContext } from "./context/DataContext";
import useWindowSize from "./hooks/useWindowSize";

export default function App() {
  const { data } = useDataContext();
  const [showSidebarMobile, setShowSidebarMobile] = React.useState(false);
  const [noTransitions, setNoTransitions] = React.useState(true);
  const { isMedium } = useWindowSize();

  //disable transitions on load
  React.useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove("notransition");
    }, 500);
  }, []);
  //disable transitions after finishing
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setNoTransitions(true);
    }, 750);
    return () => {
      clearTimeout(timer);
    };
  }, [data.darkMode, data.showSidebar, showSidebarMobile]);
  //disable sidebar modal on resize
  React.useEffect(() => {
    if (isMedium) setShowSidebarMobile(false);
  }, [isMedium]);

  return (
    <div className={noTransitions ? "notransition" : ""}>
      {showSidebarMobile && <ModalFade />}

      <Header
        setNoTransitions={setNoTransitions}
        mobileSidebarShow={showSidebarMobile}
        mobileSidebarToggle={() => setShowSidebarMobile((prev) => !prev)}
      />
      <Sidebar
        setNoTransitions={setNoTransitions}
        mobileShow={showSidebarMobile}
      />

      <main>content</main>
    </div>
  );
}
