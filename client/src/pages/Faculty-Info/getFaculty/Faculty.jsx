import { Link } from "react-router-dom";
import "./faculty.css";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


const Faculty = () => {

  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/getAllFaculty");
      setFaculties(response.data);
    }
    fetchData();
  }, []);

  const deleteFaculty = async (facultyID) => {
    await axios.delete(`http://localhost:8000/api/deleteFaculty/${facultyID}`)
      .then((response) => {
        setFaculties((prevfaculty) => prevfaculty.filter((faculty) => faculty._id !== facultyID));
        toast.success(response.data.message, { position: "top-right" });
        // console.log(response);
      }).catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className="facultyTable">
      <Link to="/facultyInfo/add">Add Faculty</Link>

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
            faculties.map((faculty, index) => {
              return (
                <tr key={faculty._id}>
                  <td align="center">{index + 1}</td>
                  <td>{faculty.fname} {faculty.lname}</td>
                  <td>{faculty.email}</td>
                  <td className="actionButtons">
                    <button onClick={() => deleteFaculty(faculty._id)}>Delete</button>
                    <Link to={`/facultyInfo/edit/${faculty._id}`}>Edit</Link>
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

export default Faculty;