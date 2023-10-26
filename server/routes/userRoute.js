import express from "express";

import { createStudent, deleteStudent, getAllStudents, getAllStudentsCount, getOneStudent, updateStudent } from "../controllers/studentController.js";
import { addStudentDetails, deleteOneStudentDetails, getOneStudentDetails, updateOneStudentDetails } from "../controllers/studentDetails.js";

import { createFaculty, deleteFaculty, getAllFaculty, getAllFacultyCount, getOneFaculty, updateFaculty } from "../controllers/facultyController.js";
import { addFacultyDetails, deleteOneFacultyDetails, getOneFacultyDetails, updateOneFacultyDetails } from "../controllers/facultyDetails.js";

import { addNotice, deleteNotice, getAllNoticeCount, getAllNotices, getOneNotice } from "../controllers/noticesController.js";

const route = express.Router();

// Student
route.post("/createStudent", createStudent);
route.get("/getAllStudents", getAllStudents);
route.get("/getAllStudentsCount", getAllStudentsCount);
route.get("/getOneStudent/:id", getOneStudent);
route.put("/updateStudent/:id", updateStudent);
route.delete("/deleteStudent/:id", deleteStudent);

route.post("/addStudentDetails", addStudentDetails);
route.get("/getOneStudentDetails/:id", getOneStudentDetails);
route.put("/updateOneStudentDetails/:id", updateOneStudentDetails);
route.delete("/deleteOneStudentDetails/:id", deleteOneStudentDetails);

// Faculty
route.post("/createFaculty", createFaculty);
route.get("/getAllFaculty", getAllFaculty);
route.get("/getAllFacultyCount", getAllFacultyCount);
route.get("/getOneFaculty/:id", getOneFaculty);
route.put("/updateFaculty/:id", updateFaculty);
route.delete("/deleteFaculty/:id", deleteFaculty);

route.post("/addFacultyDetails", addFacultyDetails);
route.get("/getOneFacultyDetails/:id", getOneFacultyDetails);
route.put("/updateOneFacultyDetails/:id", updateOneFacultyDetails);
route.delete("/deleteOneFacultyDetails/:id", deleteOneFacultyDetails);

// Notices
route.post("/addNotice", addNotice);
route.get("/getAllNotices", getAllNotices);
route.get("/getAllNoticeCount", getAllNoticeCount);
route.get("/getOneNotice/:id", getOneNotice);
route.delete("/deleteNotice/:id", deleteNotice);

export default route;