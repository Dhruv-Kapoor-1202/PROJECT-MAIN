import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast"
import "./edit.css";

const Edit = () => {

  const students = {
    fname: '',
    lname: '',
    email: '',
  }

  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(students);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
    // console.log(student);
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/getOneStudent/${id}`)
      .then((response) => {
        setStudent(response.data)
      }).catch((error) => {
        console.log(error);
      })
  }, [id])


  const submitForm = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/updateStudent/${id}`, student)
      .then((response) => {
        // console.log(response);
        toast.success(response.data.message, { position: "top-right" });
        navigate("/studentInfo");
      }).catch((error) => {
        console.log(error);
      })
  }


  return (
    <div className="addStudent" onSubmit={submitForm}>
      <Link to="/studentInfo"> {"<-"}Back</Link >
      <h1>Update student</h1>
      <form className="addStudentForm" >
        <div className="addStudentFormNames">
          <div className="inputGroup">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" value={student.fname} onChange={inputChangeHandler} name="fname" autoComplete="off" placeholder="Enter your First Name" />
          </div>
          <div className="inputGroup">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" value={student.lname} onChange={inputChangeHandler} name="lname" autoComplete="off" placeholder="Enter your Last Name" />
          </div>
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={student.email} onChange={inputChangeHandler} name="email" autoComplete="off" placeholder="Enter your Email" />
        </div>


        <div className="inputGroup">
          <button type="submit">UPDATE STUDENT</button>
        </div>
      </form>
    </div >
  )
}

export default Edit