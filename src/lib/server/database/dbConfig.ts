import mongoose from "mongoose";
const mongoURI = process.env.DATABASE_URL as string;

export async function connectToMongo() {
  try {
    await mongoose.connect(mongoURI, {
      ssl: true,
    });
  } catch (error) {
    console.log("Connection failed!");
  }
}

export async function disconnectFromMongo() {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.log("Disconnection failed!");
  }
}
