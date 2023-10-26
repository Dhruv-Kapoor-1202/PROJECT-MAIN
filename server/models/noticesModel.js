import mongoose from "mongoose";

const noticesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

export default mongoose.model("Notices", noticesSchema);