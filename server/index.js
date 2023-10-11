import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL).then(() => {
  console.log("Connected to MongoDB");

  app.listen(PORT, () => {
    console.log(`Hi Mom and Dad! Server started at PORT : ${PORT}`);
  })
}).catch(error => console.log(error))

app.use("/api", route);