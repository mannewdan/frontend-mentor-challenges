import React from "react";
import DefaultBoards from "../data.json";
import { v4 as uuid } from "uuid";

type DataContextProps = {
  children: React.ReactNode;
};
type DataContextT = {
  data: DataT;
  toggleDarkMode: () => void;
  toggleSidebar: () => void;
  showSidebar: () => void;
  setCurrentBoard: (index: number) => void;
  addBoard: (newBoard: BoardT) => void;
  editBoard: (id: string, newBoard: BoardT) => void;
  deleteBoard: (id: string) => void;
  addTask: (boardID: string, columnID: string, newTask: TaskT) => void;
  editTask: (boardID: string, newTask: TaskT) => void;
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
  id: string;
};
export type ColumnT = {
  name: string;
  tasks: Array<TaskT>;
  id: string;
};
export type TaskT = {
  title: string;
  description: string;
  column: { name: string; id: string };
  subtasks: Array<SubtaskT>;
  id: string;
};
export type SubtaskT = {
  title: string;
  isCompleted: boolean;
  id: string;
};
const DefaultDataValues: DataT = {
  darkMode: false,
  showSidebar: true,
  boards: DefaultBoards.boards.map((board) => {
    return {
      ...board,
      id: uuid(),
      columns: board.columns.map((column) => {
        const columnID = uuid();
        return {
          ...column,
          id: columnID,
          tasks: column.tasks.map((task) => {
            return {
              ...task,
              column: { name: task.status, id: columnID },
              id: uuid(),
              subtasks: task.subtasks.map((subtask) => {
                return { ...subtask, id: uuid() };
              }),
            };
          }),
        };
      }),
    };
  }),
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
    if (index < 0) index = 0;
    setData((prev) => {
      return { ...prev, currentBoard: index };
    });
  }
  function addBoard(newBoard: BoardT) {
    setData((prev) => {
      return { ...prev, boards: [...prev.boards, newBoard] };
    });
  }
  function editBoard(id: string, newBoard: BoardT) {
    setData((prev) => {
      return {
        ...prev,
        boards: prev.boards.map((item) => {
          if (item.id === id) {
            return { ...newBoard };
          } else return item;
        }),
      };
    });
  }
  function deleteBoard(id: string) {
    let deletedSomething = false;
    let index = data.currentBoard;
    setData((prev) => {
      const newBoards = prev.boards.filter((item) => {
        if (item.id === id) {
          deletedSomething = true;
          return false;
        } else return true;
      });

      if (index > newBoards.length - 1) index = newBoards.length - 1;

      return {
        ...prev,
        boards: newBoards,
      };
    });

    if (deletedSomething) {
      setCurrentBoard(index);
    }
  }
  function addTask(boardID: string, columnID: string, newTask: TaskT) {
    setData((prev) => {
      return {
        ...prev,
        boards: prev.boards.map((board) => {
          if (board.id === boardID) {
            return {
              ...board,
              columns: board.columns.map((column) => {
                if (column.id === columnID) {
                  return { ...column, tasks: [...column.tasks, newTask] };
                } else return column;
              }),
            };
          } else return board;
        }),
      };
    });
  }
  function editTask(boardID: string, newTask: TaskT) {
    setData((prev) => {
      return {
        ...prev,
        boards: prev.boards.map((board) => {
          if (board.id === boardID) {
            return {
              ...board,
              columns: board.columns.map((column) => {
                if (column.id === newTask.column.id) {
                  if (
                    column.tasks.find((task) => {
                      return task.id === newTask.id;
                    })
                  ) {
                    return {
                      ...column,
                      tasks: column.tasks.map((task) => {
                        if (task.id === newTask.id) {
                          return newTask;
                        } else return task;
                      }),
                    };
                  } else {
                    return { ...column, tasks: [...column.tasks, newTask] };
                  }
                } else {
                  return {
                    ...column,
                    tasks: column.tasks.filter((task) => {
                      return task.id !== newTask.id;
                    }),
                  };
                }
              }),
            };
          } else return board;
        }),
      };
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
        addBoard,
        editBoard,
        deleteBoard,
        addTask,
        editTask,
      }}
    >
      {children}
    </Context.Provider>
  );
}
