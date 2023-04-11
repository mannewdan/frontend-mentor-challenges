import React from "react";

type DataContextProps = {
  children: React.ReactNode;
};
type DataContextT = {
  data: DataT;
  toggleDarkMode: () => void;
  toggleSidebar: () => void;
};
type DataT = {
  darkMode: boolean;
  showSidebar: boolean;
};
const DefaultDataValues: DataT = {
  darkMode: false,
  showSidebar: false,
};

const Context = React.createContext<DataContextT>({} as DataContextT);
export function useDataContext() {
  return React.useContext(Context);
}

export default function DataContext({ children }: DataContextProps) {
  const [data, setData] = React.useState<DataT>(loadData());

  //functions
  function toggleDarkMode() {
    setData((prev) => ({ ...prev, darkMode: !prev.darkMode }));
  }
  function toggleSidebar() {
    setData((prev) => ({ ...prev, showSidebar: !prev.showSidebar }));
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
    <Context.Provider value={{ data, toggleDarkMode, toggleSidebar }}>
      {children}
    </Context.Provider>
  );
}
