import "./main.css";
import { Routes, Route } from "react-router-dom";

// import Cal from "../../components/Cal.jsx";

import Student from "../Student-Info/getStudent/Student.jsx"
import AddStudent from "../Student-Info/addStudent/Add.jsx";
import EditStudent from "../Student-Info/updateStudent/Edit.jsx";
import ViewStudent from "../Student-Info/viewStudent/View.jsx";

import Faculty from "../Faculty-Info/getFaculty/Faculty.jsx";
import AddFaculty from "../Faculty-Info/addFaculty/Add.jsx";
import EditFaculty from "../Faculty-Info/updateFaculty/Edit.jsx";
// import { Calendar } from "antd";

import Cal2 from "../Calender/Cal2.jsx";


import Dash from "../Dash/Dash.jsx";


const Main = () => {
  return (
    <div className="main box">
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/calender" element={<Cal2 />} />

        <Route path="/studentInfo" element={<Student />} />
        <Route path="/studentInfo/add" element={<AddStudent />} />
        <Route path="/studentInfo/edit/:id" element={<EditStudent />} />
        <Route path="/studentInfo/view/:id" element={<ViewStudent />} />

        <Route path="/facultyInfo" element={<Faculty />} />
        <Route path="/facultyInfo/add" element={<AddFaculty />} />
        <Route path="/facultyInfo/edit/:id" element={<EditFaculty />} />

      </Routes>
    </div>
  )
}

export default Main