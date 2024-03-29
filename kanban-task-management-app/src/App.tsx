import React from "react";
import ModalFade from "./components/ModalFade";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import FormHandler from "./components/Forms/FormHandler";
import { useDataContext } from "./context/DataContext";
import useWindowSize from "./hooks/useWindowSize";
import { BoardT, TaskT } from "./context/DataContext";

export type FormInfoT = {
  style: FormStyleE;
  board?: BoardT;
  task?: TaskT;
  skipBGFade?: boolean;
  makeNewColumn?: boolean;
};
export enum FormStyleE {
  None,
  ViewTask,
  AddTask,
  EditTask,
  AddBoard,
  EditBoard,
  DeleteBoard,
  DeleteTask,
}

export default function App() {
  const { data } = useDataContext();
  const [showSidebarMobile, setShowSidebarMobile] = React.useState(false);
  const [noTransitions, setNoTransitions] = React.useState(true);
  const { isMedium } = useWindowSize();
  const [formInfo, setFormInfo] = React.useState<FormInfoT>({
    style: FormStyleE.None,
  });

  //re-enable transitions (they are disabled for a moment on refresh)
  React.useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove("notransition");
    }, 500);
  }, []);
  //disable transitions after they are finished (for better resizing behavior)
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
      {showSidebarMobile && (
        <ModalFade
          action={() => {
            setShowSidebarMobile(false);
          }}
        />
      )}

      {!showSidebarMobile && (
        <FormHandler formInfo={formInfo} setFormInfo={setFormInfo} />
      )}

      <Header
        setNoTransitions={setNoTransitions}
        mobileSidebarShow={showSidebarMobile}
        mobileSidebarToggle={() => setShowSidebarMobile((prev) => !prev)}
        setFormInfo={setFormInfo}
      />
      <Sidebar
        setNoTransitions={setNoTransitions}
        mobileShow={showSidebarMobile}
        setMobileShow={setShowSidebarMobile}
        setFormInfo={setFormInfo}
      />

      <main>
        <Content formInfo={formInfo} setFormInfo={setFormInfo} />
      </main>
    </div>
  );
}
