import { Link } from "react-router-dom";
import "./student.css";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


const Student = () => {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/getAllStudents");
      setStudents(response.data);
    }
    fetchData();
  }, []);

  const deleteStudent = async (studentID) => {
    await axios.delete(`http://localhost:8000/api/deleteStudent/${studentID}`)
      .then((response) => {
        setStudents((prevStudent) => prevStudent.filter((student) => student._id !== studentID));
        toast.success(response.data.message, { position: "top-right" });
        // console.log(response);
      }).catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className="studentTable">
      <Link to="/studentInfo/add">Add Student</Link>

      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((student, index) => {
              return (
                <tr key={student._id}>
                  <td align="center">{index + 1}</td>
                  <td><Link to={`/studentInfo/view/${student._id}`}>{student.fname} {student.lname}</Link></td>
                  <td>{student.email}</td>
                  <td className="actionButtons">
                    <button onClick={() => deleteStudent(student._id)}>Delete</button>
                    <Link to={`/studentInfo/edit/${student._id}`}>Edit</Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Student