import { Router } from "express";
import { getAllDoctors, getDoctorById, getTopRatedDoctors, createAppointment, deleteAppointment, updateAppointment, getAllAppointments, getAppointmentByEmailId } from "../controllers/controller.js";
import { verifyToken } from "../middlewares/middleware.js";

const routes = Router();

routes.get("/doctors", getAllDoctors);
routes.get("/top-doctors", getTopRatedDoctors);
routes.get("/doctors/:id", getDoctorById);

routes.post("/create-appointment", createAppointment);
routes.get("/appointments", getAllAppointments);
routes.get("/appointments/:emailId",verifyToken, getAppointmentByEmailId);
routes.patch("/appointments/:id",verifyToken, updateAppointment);
routes.delete("/appointments/:id",verifyToken, deleteAppointment);



export default routes;