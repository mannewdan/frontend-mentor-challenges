import logo from "../assets/logo-mobile.svg";
import addTask from "../assets/icon-add-task-mobile.svg";
import chevron from "../assets/icon-chevron-down.svg";
import { useDataContext } from "../context/DataContext";
import { FormInfoT, FormStyleE } from "../App";
import DotMenu from "./DotMenu";

type HeaderProps = {
  setNoTransitions: (value: boolean) => void;
  mobileSidebarShow: boolean;
  mobileSidebarToggle: () => void;
  setFormInfo: (info: FormInfoT) => void;
};

export default function Header({
  setNoTransitions,
  mobileSidebarShow,
  mobileSidebarToggle,
  setFormInfo,
}: HeaderProps) {
  const { data } = useDataContext();

  return (
    <header
      className={`header suppress-transitions ${
        data.showSidebar ? "" : "sidebar-hidden"
      }`}
    >
      <img className="logo" src={logo}></img>

      {/* Default */}
      <h1 className="heading text-h-main unselectable suppress-transitions">
        Platform Launch
      </h1>

      {/* Small Screen */}
      <button
        onClick={() => {
          setNoTransitions(false);
          mobileSidebarToggle();
        }}
        className="view-boards-button"
      >
        <h1 className="text-h-main">Platform Launch</h1>
        <img
          className={`arrow ${mobileSidebarShow ? "show" : ""}`}
          src={chevron}
        ></img>
      </button>

      <button
        onClick={() => {
          if (
            data.boards.length > data.currentBoard &&
            data.boards[data.currentBoard].columns.length > 0
          ) {
            setFormInfo({
              style: FormStyleE.AddTask,
              board: data.boards[data.currentBoard],
            });
          }
        }}
        className={`add-task button-primary ${
          data.boards.length > data.currentBoard &&
          data.boards[data.currentBoard].columns.length > 0
            ? ""
            : "inactive"
        }`}
      >
        <img className="" src={addTask}></img>
        <span>+ Add New Task</span>
      </button>

      <DotMenu
        buttons={[
          {
            name: "Edit Board",
            onClick: () => {
              if (data.boards.length > data.currentBoard) {
                setFormInfo({
                  style: FormStyleE.EditBoard,
                  board: data.boards[data.currentBoard],
                });
              }
            },
          },
          {
            name: "Delete Board",
            onClick: () => {
              if (data.boards.length > data.currentBoard) {
                setFormInfo({
                  style: FormStyleE.DeleteBoard,
                  board: data.boards[data.currentBoard],
                });
              }
            },
            danger: true,
          },
        ]}
      />
    </header>
  );
}
