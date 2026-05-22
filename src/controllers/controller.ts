import { Request, Response } from "express";
import { client } from "../db/db.js";
import { ObjectId } from "mongodb";

const db = client.db("doc-appoint");
const doctorsCollections = db.collection("all-doctors");
const appointmentCollection = db.collection("appointments");
const userCollection = db.collection("users");

export async function getAllDoctors(req: Request, res: Response) {
  const doctors = await doctorsCollections.find({}).toArray();

  res.status(200).json(doctors);
}

export async function getTopRatedDoctors(req: Request, res: Response) {
  const doctors = await doctorsCollections
    .find({})
    .sort({ rating: -1 })
    .limit(3)
    .toArray();

  res.status(200).json(doctors);
}

export async function getDoctorById(req: Request, res: Response) {
  const  id  = req.params.id as string;
  const doctor = await doctorsCollections.findOne({ _id: new ObjectId(id) });

  if (!doctor) {
    res.status(404).json({ message: "Doctor not found" });
    return;
  }

  res.status(200).json(doctor);
}

export async function createAppointment(req: Request, res: Response) {
    const appointments = await appointmentCollection.insertOne(req.body)
    res.status(201).json(appointments);
}

export async function getAppointmentByEmailId(req: Request, res: Response) {
  try {
    const email = req.params.emailId;

    const appointments = await appointmentCollection
      .find({ patientEmail: email })
      .toArray();

    res.status(200).json(appointments);
  } catch (error) {
    console.error("Error fetching appointments by email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function  getAllAppointments(req: Request, res: Response) {
  const appointments = await appointmentCollection.find({}).toArray();
  res.status(200).json(appointments);
}
export async function updateAppointment(req: Request, res: Response) {
  const id = req.params.id as string;
  const result = await appointmentCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: req.body }
  )
  res.json(result)
}

export async function deleteAppointment(req: Request, res: Response) {
    const result = await appointmentCollection.deleteOne({
        _id: new ObjectId(req.params.id as string)
      });
      res.json(result);
}

