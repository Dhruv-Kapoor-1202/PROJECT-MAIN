import facultyDetails from "../models/Faculty/facultyDetails.js";

export const addFacultyDetails = async (req, res) => {
  try {
    const user = new facultyDetails(req.body);

    if (!user) {
      return res.status(404).json({ message: "Faculty data not found" })
    }
    const savedData = await user.save();
    // res.status(200).json({ message: "Faculty Details Added Successfully" });
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const getOneFacultyDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const dataPresent = await facultyDetails.findById(id);

    if (!dataPresent) {
      return res.status(404).json({ message: "Data Not Found" });
    }
    res.status(200).json(dataPresent);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const updateOneFacultyDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const dataExists = await facultyDetails.findById(id);

    if (!dataExists) {
      return res.status(404).json({ message: "Details Not Found" });
    }
    const updatedData = await facultyDetails.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "Faculty Details Updated Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const deleteOneFacultyDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const dataExists = await facultyDetails.findById(id);

    if (!dataExists) {
      return res.status(404).json({ message: "Details Not Found" });
    }
    await facultyDetails.findByIdAndDelete(id);
    res.status(200).json({ message: "Details Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}