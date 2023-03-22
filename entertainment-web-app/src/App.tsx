import Home from "./pages/Home";
import Login from "./pages/Login";
import DesignSetup from "./pages/DesignSetup";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Login />}></Route>
        <Route path="/design" element={<DesignSetup />}></Route>
      </Routes>
    </>
  );
}

export default App;
