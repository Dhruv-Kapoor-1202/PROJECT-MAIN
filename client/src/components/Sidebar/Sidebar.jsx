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
        <Link to="/">
          <div className="sidebar-logo-2 box"></div>
          <p>Dashboard</p>
        </Link>
        <Link to="/calender">
          <div className="sidebar-logo-2 box"></div>
          <p>Calender</p>
        </Link>
        <Link to="/studentInfo">
          <div className="sidebar-logo-2 box"></div>
          <p>Student Info</p>
        </Link>
        <Link to="/facultyInfo">
          <div className="sidebar-logo-2 box"></div>
          <p>Faculty Info</p>
        </Link>
        <Link to="/notices">
          <div className="sidebar-logo-2 box"></div>
          <p>Notices</p>
        </Link>
      </div>
      <div className="box right-box"></div>
    </div>
  )
}

export default Sidebar