import {
  connectToMongo,
  disconnectFromMongo,
} from "@/lib/server/database/dbConfig";
import { Event } from "@/lib/server/database/model/Event";

export async function GET(
  request: Request,
  { params }: { params: { eventId: string } }
) {
  const id = params.eventId;
  await connectToMongo();
  const eventData = await Event.findOne({ eventId: id });
  await disconnectFromMongo();
  return Response.json(eventData);
}
