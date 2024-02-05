"use server";
import { EventBody } from "../../../../typings";
import { connectToMongo, disconnectFromMongo } from "../database/dbConfig";
import { Event } from "../database/model/Event";

const host = process.env.API_IP_ADDRESS;

export async function editEvent(data: Object) {
  try {
  } catch (error) {}
}

export async function updateFile(data: any, eventId: number, id: string) {
  try {
    let dbData = await fetchDynamicEvents();

    if (dbData === data) return console.log("No changes made");

    await connectToMongo();
    if (id === "rules") {
      await Event.findOneAndUpdate(
        { eventId },
        {
          $set: {
            rules: data,
          },
        }
      );
    } else if (id === "cashPrize") {
      await Event.findOneAndUpdate(
        { eventId },
        {
          $set: {
            cashPrize: data,
          },
        }
      );
    } else if (id === "t_coord" || id === "s_coord") {
      await Event.findOneAndUpdate(
        { eventId },
        {
          $set: {
            [`contact.${id}`]: data,
          },
        }
      );
    } else if (id === "info") {
      await Event.findOneAndUpdate({ eventId }, data);
    }
    await disconnectFromMongo();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchStaleEvents() {
  const eventData: EventBody[] = await fetch(`${host}/api/event`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
  return eventData;
}
export async function fetchDynamicEvents() {
  const eventData: EventBody[] = await fetch(`${host}/api/event`, {
    cache: "no-store",
  }).then((res) => res.json());
  return eventData;
}

export async function fetchStaleEvent(eventId: string) {
  const eventData: EventBody = await fetch(`${host}/api/event/${eventId}`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
  return eventData;
}

export async function fetchDynamicEvent(eventId: string) {
  const eventData: EventBody = await fetch(`${host}/api/event/${eventId}`, {
    cache: "no-store",
  }).then((res) => res.json());

  return eventData;
}
