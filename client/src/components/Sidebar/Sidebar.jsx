import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar box">
      <div className="sidebar_info box">
        <div className="sidebar-logo box"></div>
        <div className="sidebar-name">Dhruv</div>
      </div>
      <div className="sidebar_nav box">
        <Link to="/">Dashboard</Link>
        <Link to="/calender">Calender</Link>
        <Link to="/studentInfo">Student Info</Link>
        <Link to="/facultyInfo">Faculty Info</Link>
      </div>
      <div className="box right-box"></div>
    </div>
  )
}

export default Sidebar