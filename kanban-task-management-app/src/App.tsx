import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DataContext from "./context/DataContext";

export default function App() {
  React.useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove("notransition");
    }, 500);
  }, []);

  return (
    <DataContext>
      <Header />
      <Sidebar />
    </DataContext>
  );
}
