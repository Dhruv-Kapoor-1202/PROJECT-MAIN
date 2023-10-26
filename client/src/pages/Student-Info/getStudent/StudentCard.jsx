
const StudentCard = ({ index, fname, lname, email }) => {
  return (
    <div className="StudentCard">
      <p>{index}</p>
      <p>{fname}</p>
      <p>{lname}</p>
      <p>{email}</p>
    </div>
  )
}

export default StudentCard