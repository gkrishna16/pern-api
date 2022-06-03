import express, { Request, Response } from "express";
import dotenv from "dotenv";
import pool from ".././db";
dotenv.config();
const port = process.env.PG_PORT || 5000;

const app = express();
import { getData, postData, getDataById } from "../controllers/index";
app.use(express.json());

app.get("/", getData);
app.get("/data/:id", getDataById);
app.post("/post", postData);

app.listen(port, () => {
  console.log(`----- server running on port ${port} ----`);
});
