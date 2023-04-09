import boardIcon from "../assets/icon-board.svg";
import hideIcon from "../assets/icon-hide-sidebar.svg";
import showIcon from "../assets/icon-show-sidebar.svg";
import lightIcon from "../assets/icon-light-theme.svg";
import darkIcon from "../assets/icon-dark-theme.svg";
import Icon from "./Icon";

export default function Sidebar() {
  const boards = ["Platform Launch", "Marketing Plan", "Roadmap"];
  const boardEls = boards.map((item, index) => {
    return (
      <button className={`button-nav ${index === 0 ? "active" : ""}`}>
        <Icon url={boardIcon} />
        {item}
      </button>
    );
  });

  return (
    <nav className="sidebar">
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
        <button className="dark"></button>
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
