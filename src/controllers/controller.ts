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
  const { id } = req.params;
  const doctor = await doctorsCollections.findOne({ id: id });

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

export async function getAppointmentById(req: Request, res: Response) {
    const appointment = await appointmentCollection.findOne({ _id: new ObjectId(req.params.id as string)});

    if (!appointment) {
      res.status(404).json({ message: "Appointment not found" });
      return;
    }

    res.status(200).json(appointment);
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

