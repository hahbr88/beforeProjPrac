import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Main from "./pages/main/Main";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
