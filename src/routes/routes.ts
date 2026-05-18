import { Router } from "express";
import { getAllDoctors, getDoctorById, getTopRatedDoctors, createAppointment, myAppoinments, deleteAppointment } from "../controllers/controller.js";

const routes = Router();

routes.get("/doctors", getAllDoctors);
routes.get("/top-doctors", getTopRatedDoctors);
routes.get("/doctors/:id", getDoctorById);

routes.post("/create-appointment", createAppointment);
routes.get("/appointments/my", myAppoinments);
routes.get("/appointments/:id", deleteAppointment);



export default routes;