import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";
import connectDB from "./db/db.js";
import cookieParser from "cookie-parser";



export const app = express();

await connectDB();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api", routes);

app.get("/", (req, res)=> {
    res.send("Server is running");
})