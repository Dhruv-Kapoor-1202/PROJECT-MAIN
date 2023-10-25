import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast"
import "./edit.css";

const Edit = () => {

  const faculties = {
    fname: '',
    lname: '',
    email: '',
  }

  const { id } = useParams();
  const navigate = useNavigate();
  const [faculty, setFaculty] = useState(faculties);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFaculty({ ...faculty, [name]: value });
    // console.log(faculty);
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/getOneFaculty/${id}`)
      .then((response) => {
        setFaculty(response.data)
      }).catch((error) => {
        console.log(error);
      })
  }, [id])


  const submitForm = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/updateFaculty/${id}`, faculty)
      .then((response) => {
        // console.log(response);
        toast.success(response.data.message, { position: "top-right" });
        navigate("/facultyInfo");
      }).catch((error) => {
        console.log(error);
      })
  }


  return (
    <div className="addFaculty" onSubmit={submitForm}>
      <Link to="/facultyInfo"> {"<-"}Back</Link >
      <h1>Update faculty</h1>
      <form className="addFacultyForm" >
        <div className="addFacultyFormNames">
          <div className="inputGroup">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" value={faculty.fname} onChange={inputChangeHandler} name="fname" autoComplete="off" placeholder="Enter your First Name" />
          </div>
          <div className="inputGroup">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" value={faculty.lname} onChange={inputChangeHandler} name="lname" autoComplete="off" placeholder="Enter your Last Name" />
          </div>
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={faculty.email} onChange={inputChangeHandler} name="email" autoComplete="off" placeholder="Enter your Email" />
        </div>


        <div className="inputGroup">
          <button type="submit">UPDATE FACULTY</button>
        </div>
      </form>
    </div >
  )
}

export default Edit