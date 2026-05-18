import { Request, Response } from "express";
import { client } from "../db/db.js";

const db = client.db("doc-appoint");
const doctorsCollections = db.collection("all-doctors");

export async function getAllDoctors(req: Request, res: Response) {
  const doctors = await doctorsCollections.find({}).toArray();

  res.status(200).json(doctors);
}
