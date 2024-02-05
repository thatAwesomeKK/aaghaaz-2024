import {
  connectToMongo,
  disconnectFromMongo,
} from "@/lib/server/database/dbConfig";
import { Event } from "@/lib/server/database/model/Event";

export async function GET(request: Request) {
  await connectToMongo();
  const eventData = await Event.find({});
  await disconnectFromMongo();
  return Response.json(eventData);
}
