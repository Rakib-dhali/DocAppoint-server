import { Router } from "express";
import { getAllDoctors } from "../controllers/controller.js";

const routes = Router();

routes.get("/all-doctors", getAllDoctors);


export default routes;