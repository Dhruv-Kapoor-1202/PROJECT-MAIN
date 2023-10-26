import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast"

const NoticeHome = () => {

  const notices = {
    title: '',
    description: ''
  }

  const [notice, setNotice] = useState(notices);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setNotice({ ...notice, [name]: value });
  }

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/addNotice", notice).then((response) => {
      
      toast.success(response.data.message)
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="addNotice">
      <h1>New Notice</h1>
      <form className="addNoticeForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="title">Title</label>
          <input onChange={inputHandler} type="text" id='title' autoComplete='off' placeholder='Enter Notice Title...' /></div>
        <div className="inputGroup">
          <label htmlFor="notice-body">Body</label>
          <input onChange={inputHandler} type="text" id='notice-body' autoComplete='off' name='notice-body' placeholder='Enter Notice Information...' /></div>

        <div className="inputGroup">
          <button type="submit">ADD NOTICE</button>
        </div>
      </form>
    </div>
  )
}

export default NoticeHome