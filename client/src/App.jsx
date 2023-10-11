import './App.css'
import Cal from './components/Cal';
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Topbar from "./components/Topbar/Topbar.jsx";

import Main from "./pages/Main/Main.jsx"

// import { Routes, Route } from "react-router-dom";

function App() {

  return (

    <>
      <div className="box App ">

        <Sidebar />

        <div className="Middle box">
          <Topbar />
          <Main />
        </div>

        <div className="box Right ">
          <Cal />
          <div className="box right-box"></div>
          <div className="box right-box"></div>
        </div>

      </div>
    </>
  )
}

export default App
