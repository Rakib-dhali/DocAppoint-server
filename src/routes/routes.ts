import { Router } from "express";
import { getAllDoctors, getDoctorById, getTopRatedDoctors, createAppointment, deleteAppointment, updateAppointment, getAppointmentById } from "../controllers/controller.js";

const routes = Router();

routes.get("/doctors", getAllDoctors);
routes.get("/top-doctors", getTopRatedDoctors);
routes.get("/doctors/:id", getDoctorById);

routes.post("/create-appointment", createAppointment);
routes.get("/appointments/:id", getAppointmentById);
routes.patch("/appointments/:id", updateAppointment);
routes.delete("/appointments/:id", deleteAppointment);



export default routes;