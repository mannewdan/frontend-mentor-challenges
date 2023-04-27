import boardIcon from "../assets/icon-board.svg";
import hideIcon from "../assets/icon-hide-sidebar.svg";
import showIcon from "../assets/icon-show-sidebar.svg";
import lightIcon from "../assets/icon-light-theme.svg";
import darkIcon from "../assets/icon-dark-theme.svg";
import logoDark from "../assets/logo-light.svg";
import logoLight from "../assets/logo-dark.svg";
import Icon from "./Icon";
import { useDataContext } from "../context/DataContext";
import { FormInfoT, FormStyleE } from "../App";

type SidebarProps = {
  setNoTransitions: (value: boolean) => void;
  mobileShow: boolean;
  setMobileShow: (show: boolean) => void;
  setFormInfo: (info: FormInfoT) => void;
};

export default function Sidebar({
  setNoTransitions,
  mobileShow,
  setMobileShow,
  setFormInfo,
}: SidebarProps) {
  const { data, toggleDarkMode, toggleSidebar, showSidebar, setCurrentBoard } =
    useDataContext();

  const boardEls = data.boards.map((item, index) => {
    return (
      <button
        key={item.id}
        className={`button-nav ${index === data.currentBoard ? "active" : ""}`}
        onClick={() => {
          setCurrentBoard(index);
        }}
      >
        <Icon url={boardIcon} />
        {item.name}
      </button>
    );
  });

  return (
    <nav
      className={`sidebar suppress-transitions ${
        !data.showSidebar ? "hide" : ""
      }  ${mobileShow ? "mobile-show" : ""}`}
    >
      <div
        className={`logo-container suppress-transitions ${
          !data.showSidebar ? "clickable" : ""
        }`}
        onClick={() => {
          setNoTransitions(false);
          showSidebar();
        }}
      >
        <img
          className="logo suppress-transitions"
          src={data.darkMode ? logoDark : logoLight}
        ></img>
      </div>

      <div className="content-container suppress-transitions">
        <div className="scrollable-area">
          <h2 className="text-h-s">All Boards ({data.boards.length})</h2>

          <div className="button-container">
            {boardEls}
            <button
              onClick={() => {
                setMobileShow(false);
                setFormInfo({ style: FormStyleE.AddBoard, skipBGFade: true });
              }}
              className="button-nav add"
            >
              <Icon url={boardIcon} />+ Create New Board
            </button>
          </div>
        </div>

        <div className="dark-toggle suppress-transitions">
          <img className="light-icon" src={lightIcon}></img>
          <button
            onClick={() => {
              setNoTransitions(false);
              toggleDarkMode();
            }}
            className={data.darkMode ? "dark" : ""}
          ></button>
          <img className="dark-icon" src={darkIcon}></img>
        </div>

        <div
          className={`hide-button button-container ${
            data.showSidebar ? "" : "hidden"
          }`}
        >
          <button
            onClick={() => {
              setNoTransitions(false);
              toggleSidebar();
            }}
            className="button-nav"
          >
            <Icon url={hideIcon} />
            Hide Sidebar
            <img className="hide-icon" src={showIcon}></img>
          </button>
        </div>
      </div>
    </nav>
  );
}
