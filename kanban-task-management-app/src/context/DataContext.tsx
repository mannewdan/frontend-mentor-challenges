import React from "react";
import DefaultBoards from "../data.json";

type DataContextProps = {
  children: React.ReactNode;
};
type DataContextT = {
  data: DataT;
  toggleDarkMode: () => void;
  toggleSidebar: () => void;
  showSidebar: () => void;
  setCurrentBoard: (index: number) => void;
};
type DataT = {
  darkMode: boolean;
  showSidebar: boolean;
  boards: Array<BoardT>;
  currentBoard: number;
};
export type BoardT = {
  name: string;
  columns: Array<ColumnT>;
};
export type ColumnT = {
  name: string;
  tasks: Array<TaskT>;
  id?: string;
};
type TaskT = {
  title: string;
  description: string;
  status: string;
  subtasks: Array<SubtaskT>;
};
type SubtaskT = {
  title: string;
  isCompleted: boolean;
};
const DefaultDataValues: DataT = {
  darkMode: false,
  showSidebar: true,
  boards: DefaultBoards.boards,
  currentBoard: 0,
};

const Context = React.createContext<DataContextT>({} as DataContextT);
export function useDataContext() {
  return React.useContext(Context);
}

export default function DataContext({ children }: DataContextProps) {
  const [data, setData] = React.useState<DataT>(loadData());

  console.log(data);

  //functions
  function toggleDarkMode() {
    setData((prev) => ({ ...prev, darkMode: !prev.darkMode }));
  }
  function toggleSidebar() {
    setData((prev) => ({ ...prev, showSidebar: !prev.showSidebar }));
  }
  function showSidebar() {
    setData((prev) => {
      if (prev.showSidebar) return prev;
      return { ...prev, showSidebar: true };
    });
  }
  function setCurrentBoard(index: number) {
    setData((prev) => {
      return { ...prev, currentBoard: index };
    });
  }

  //save/load
  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  function loadData(): DataT {
    const data = localStorage.getItem("data");
    if (data) return JSON.parse(data);
    return { ...DefaultDataValues };
  }

  //darkmode
  React.useEffect(() => {
    if (data.darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [data.darkMode]);

  return (
    <Context.Provider
      value={{
        data,
        toggleDarkMode,
        toggleSidebar,
        showSidebar,
        setCurrentBoard,
      }}
    >
      {children}
    </Context.Provider>
  );
}
