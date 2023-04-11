import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DataContext from "./context/DataContext";

export default function App() {
  return (
    <DataContext>
      <Header />
      <Sidebar />
    </DataContext>
  );
}
