import Notice from "../models/noticesModel.js";

export const addNotice = async (req, res) => {
  try {
    const notice = new Notice(req.body);
    if (!notice) {
      return res.status(404).json({ message: "Notice Not Found" });
    }
    const savedNotice = await notice.save();
    // res.status(200).json({ message: "Notice Added Successfully" });
    res.status(200).json(savedNotice);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}


export const getAllNotices = async (req, res) => {
  try {
    const noticeData = await Notice.find();
    if (!noticeData) {
      return res.status(404).json({ message: "Notice Data Not Found" });
    }
    res.status(200).json(noticeData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}


export const getAllNoticeCount = async (req, res) => {
  try {
    const noticeCount = await Notice.countDocuments();
    res.status(200).json(noticeCount);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
}


export const getOneNotice = async (req, res) => {
  try {
    const id = req.params.id;
    const noticeExist = await Notice.findById(id);

    if (!noticeExist) {
      return res.status(404).json({ message: "Notice Not Found" });
    }
    res.status(200).json(noticeExist);
  } catch (error) {
    res.status(500).json({ errro: "Internal Server Error" });
  }
}

// Update Notice ????? to do or not to do

export const deleteNotice = async (req, res) => {
  try {
    const id = req.params.id;
    const noticeExist = await Notice.findById(id);

    if (!noticeExist) {
      return res.status(404).json({ message: "Notice Not Found" });
    }
    await Notice.findByIdAndDelete(id);
    res.status(200).json({ message: "Notice removed successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}