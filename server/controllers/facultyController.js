import Faculty from "../models/Faculty/facultyModel.js";


export const createFaculty = async (req, res) => {
  try {
    const facultyData = new Faculty(req.body);

    if (!facultyData) {
      return res.status(404).json({ message: "Faculty data not found" })
    }

    const savedData = await facultyData.save();
    res.status(200).json({ message: "Faculty created successfully" });

  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}


export const getAllFaculty = async (req, res) => {
  try {
    const facultyData = await Faculty.find();
    if (!facultyData) {
      return res.status(404).json({ message: "Faculty data not found" });
    }
    res.status(200).json(facultyData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}


export const getOneFaculty = async (req, res) => {
  try {
    const id = req.params.id;
    const facultyExist = await Faculty.findById(id);

    if (!facultyExist) {
      return res.status(404).json({ message: "Faculty not found" });
    }
    res.status(200).json(facultyExist);
  } catch (error) {
    res.status(500).json({ errro: "Internal Server Error" });
  }
}


export const updateFaculty = async (req, res) => {
  try {
    const id = req.params.id;
    const facultyExist = await Faculty.findById(id);

    if (!facultyExist) {
      return res.status(404).json({ message: "Faculty not found" });
    }

    const updatedData = await Faculty.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "Faculty data updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}


export const deleteFaculty = async (req, res) => {
  try {
    const id = req.params.id;
    const facultyExist = await Faculty.findById(id);

    if (!facultyExist) {
      return res.status(404).json({ message: "Faculty not found" });
    }
    await Faculty.findByIdAndDelete(id);
    res.status(200).json({ message: "Faculty deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}