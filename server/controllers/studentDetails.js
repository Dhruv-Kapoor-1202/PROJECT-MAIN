import studentDetails from "../models/Student/studentDetails.js";
// import StudentDetails from "../models/Student/studentDetails.js";

export const addStudentDetails = async (req, res) => {
  try {
    const user = new studentDetails(req.body);

    if (!user) {
      return res.status(404).json({ message: "Student data not found" })
    }
    const savedData = await user.save();
    // res.status(200).json({ message: "Student Details Added Successfully" });
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// export const addStudentDetails = async (req, res) => {
//   try {
//     let user = await studentDetails.findOne({ rollnumber: req.body.rollnumber });

//     if (user) {
//       return res.status(404).json({ message: "Student With This Roll Number Already Exists" });
//     }
//     user = await studentDetails.create(req.body);
//     const data = {
//       success: true,
//       message: "Student Details Added!",
//       user
//     };
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

export const getOneStudentDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const dataPresent = await studentDetails.findById(id);

    if (!dataPresent) {
      return res.status(404).json({ message: "Data Not Found" });
    }
    res.status(200).json(dataPresent);
  } catch (error) {
    res.status(500).json({ errro: "Internal Server Error" });
  }
}

export const updateOneStudentDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const dataExists = await studentDetails.findById(id);

    if (!dataExists) {
      return res.status(404).json({ message: "Details Not Found" });
    }
    const updatedData = await StudentDetails.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "Student Details Updated Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const deleteOneStudentDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const dataExists = await studentDetails.findById(id);

    if (!dataExists) {
      return res.status(404).json({ message: "Details Not Found" });
    }
    await StudentDetails.findByIdAndDelete(id);
    res.status(200).json({ message: "Details Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}