import "dotenv/config";

import express from "express";
import cors from "cors";
import { connectDB } from "./db/db.js";



export const app = express();

await connectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req, res)=> {
    res.send("Server is running");
})