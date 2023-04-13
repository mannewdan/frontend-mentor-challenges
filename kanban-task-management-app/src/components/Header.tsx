import logo from "../assets/logo-mobile.svg";
import addTask from "../assets/icon-add-task-mobile.svg";
import vertEllipsis from "../assets/icon-vertical-ellipsis.svg";
import chevron from "../assets/icon-chevron-down.svg";
import { useDataContext } from "../context/DataContext";

export default function Header() {
  const { data } = useDataContext();

  return (
    <header className={`header ${data.showSidebar ? "" : "sidebar-hidden"}`}>
      <img className="logo" src={logo}></img>

      {/* Default */}
      <h1 className="heading text-h-main unselectable">Platform Launch</h1>

      {/* Small Screen */}
      <button className="view-boards-button">
        <h1 className="text-h-main">Platform Launch</h1>
        <img src={chevron}></img>
      </button>

      <button className="add-task button-primary">
        <img className="" src={addTask}></img>
        <span>+ Add New Board</span>
      </button>

      <button className="edit-board">
        <img className="" src={vertEllipsis}></img>
      </button>
    </header>
  );
}
