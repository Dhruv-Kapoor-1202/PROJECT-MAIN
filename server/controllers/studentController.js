import Student from "../models/Student/studentModel.js";


export const createStudent = async (req, res) => {
  try {
    const studentData = new Student(req.body);

    if (!studentData) {
      return res.status(404).json({ message: "Student data not found" })
    }

    const savedData = await studentData.save();
    res.status(200).json({ message: "Student created successfully" });

  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}


export const getAllStudents = async (req, res) => {
  try {
    const studentData = await Student.find();
    if (!studentData) {
      return res.status(404).json({ message: "Student data not found" });
    }
    res.status(200).json(studentData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}


export const getAllStudentsCount = async (req, res) => {
  try {
    const studentCount = await Student.countDocuments();
    res.status(200).json(studentCount);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
}


export const getOneStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const studentExist = await Student.findById(id);

    if (!studentExist) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(studentExist);
  } catch (error) {
    res.status(500).json({ errro: "Internal Server Error" });
  }
}


export const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const studentExist = await Student.findById(id);

    if (!studentExist) {
      return res.status(404).json({ message: "Student not found" });
    }

    const updatedData = await Student.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "Student data updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}


export const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const studentExist = await Student.findById(id);

    if (!studentExist) {
      return res.status(404).json({ message: "Student not found" });
    }
    await Student.findByIdAndDelete(id);
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}