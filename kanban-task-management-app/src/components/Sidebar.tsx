import boardIcon from "../assets/icon-board.svg";
import hideIcon from "../assets/icon-hide-sidebar.svg";
import showIcon from "../assets/icon-show-sidebar.svg";
import lightIcon from "../assets/icon-light-theme.svg";
import darkIcon from "../assets/icon-dark-theme.svg";
import logoDark from "../assets/logo-light.svg";
import logoLight from "../assets/logo-dark.svg";
import Icon from "./Icon";
import { useDataContext } from "../context/DataContext";

export default function Sidebar() {
  const { data, toggleDarkMode } = useDataContext();

  const boards = ["Platform Launch", "Marketing Plan", "Roadmap"];
  const boardEls = boards.map((item, index) => {
    return (
      <button
        key={item}
        className={`button-nav ${index === 0 ? "active" : ""}`}
      >
        <Icon url={boardIcon} />
        {item}
      </button>
    );
  });

  return (
    <nav className="sidebar">
      <img className="logo" src={data.darkMode ? logoDark : logoLight}></img>

      <div className="scrollable-area">
        <h2 className="text-h-s">All Boards (3)</h2>

        <div className="container">
          {boardEls}
          <button className="button-nav add">
            <Icon url={boardIcon} />+ Create New Board
          </button>
        </div>
      </div>

      <div className="dark-toggle">
        <img className="light-icon" src={lightIcon}></img>
        <button
          onClick={toggleDarkMode}
          className={data.darkMode ? "dark" : ""}
        ></button>
        <img className="dark-icon" src={darkIcon}></img>
      </div>

      <div className="hide-button container">
        <button className="button-nav">
          <Icon url={hideIcon} />
          Hide Sidebar
        </button>
      </div>
    </nav>
  );
}
