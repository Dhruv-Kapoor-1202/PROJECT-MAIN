import express from "express";

import { createStudent, deleteStudent, getAllStudents, getOneStudent, updateStudent } from "../controllers/studentController.js";
import { createFaculty, deleteFaculty, getAllFaculty, getOneFaculty, updateFaculty } from "../controllers/facultyController.js";


const route = express.Router();

route.post("/createStudent", createStudent);
route.get("/getAllStudents", getAllStudents);
route.get("/getOneStudent/:id", getOneStudent);
route.put("/updateStudent/:id", updateStudent);
route.delete("/deleteStudent/:id", deleteStudent);


route.post("/createFaculty", createFaculty);
route.get("/getAllFaculty", getAllFaculty);
route.get("/getOneFaculty/:id", getOneFaculty);
route.put("/updateFaculty/:id", updateFaculty);
route.delete("/deleteFaculty/:id", deleteFaculty);


export default route;