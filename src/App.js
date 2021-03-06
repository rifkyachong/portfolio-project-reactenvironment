import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Project from "./pages/Project";

import "./App.css";

function App() {
  console.log("app rendered!!");

  return (
    <div className="app-container">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Project />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
