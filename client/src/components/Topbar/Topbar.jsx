import { useEffect, useState } from "react";
import "./topbar.css";

import axios from "axios";

const Topbar = () => {

  const [studentCount, setStudentCount] = useState(0);
  const [facultyCount, setFacultyCount] = useState(0);

  useEffect(() => {
    const fetchStudentCount = async () => {
      const response = await axios.get('http://localhost:8000/api/getAllStudentsCount');
      setStudentCount(response.data);
    }
    fetchStudentCount();

    const fetchFacultyCount = async () => {
      const response = await axios.get('http://localhost:8000/api/getAllFacultyCount');
      setFacultyCount(response.data);
    }
    fetchFacultyCount();
  }, [studentCount, facultyCount]);

  return (
    <div className="topbar box">
      <div className="box">
        Total Students :
        {studentCount}
      </div>
      <div className="box">
        Total Faculty :
        {facultyCount}
      </div>
      <div className="box"></div>
    </div>
  )
}

export default Topbar