import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import dotenv from "dotenv";
dotenv.config();

import { MongoClient, ServerApiVersion } from "mongodb";

const mongoUri = process.env.MONGO_URI as string;

if (!mongoUri) {
  console.warn("WARNING: MONGO_URI not set. Database operations will fail.");
}

export const client = new MongoClient(mongoUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const connectDB = async () => {
  if (!mongoUri) {
    throw new Error("MONGO_URI environment variable is not set");
  }
  await client.connect();
  console.log("mongoDb connected");
};

export default connectDB;