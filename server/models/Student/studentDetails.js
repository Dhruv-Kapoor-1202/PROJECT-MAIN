import mongoose from "mongoose";

const studentDetailsSchema = new mongoose.Schema({
  rollnumber: {
    type: Number,
    required: true
  },
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  }
});

export default mongoose.model("StudentDetails", studentDetailsSchema);