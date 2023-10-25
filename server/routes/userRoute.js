import express from "express";

import { createStudent, deleteStudent, getAllStudents, getAllStudentsCount, getOneStudent, updateStudent } from "../controllers/studentController.js";
import { createFaculty, deleteFaculty, getAllFaculty, getAllFacultyCount, getOneFaculty, updateFaculty } from "../controllers/facultyController.js";


import { addStudentDetails, deleteOneStudentDetails, getOneStudentDetails, updateOneStudentDetails } from "../controllers/studentDetails.js";


const route = express.Router();

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

route.post("/createFaculty", createFaculty);
route.get("/getAllFaculty", getAllFaculty);
route.get("/getAllFacultyCount", getAllFacultyCount);
route.get("/getOneFaculty/:id", getOneFaculty);
route.put("/updateFaculty/:id", updateFaculty);
route.delete("/deleteFaculty/:id", deleteFaculty);


export default route;