"use server";
import { fetchDynamicEvent } from "@/lib/utils";
import { EventBody } from "../../../../typings";

export async function editEvent(data: Object) {
  try {
  } catch (error) {}
}

export async function updateFile(data: any, eventId: number, id: string) {
  try {
    let dbData = await fetchDynamicEvent();

    if (dbData === data) return console.log("No changes made");

    const toChange = dbData[eventId];
    if (id === "rules") {
      toChange.rules = data;
    } else if (id === "cashPrize") {
      toChange.cashPrize = data;
    } else if (id === "t_coord") {
      toChange.contact.t_coord = data;
    } else if (id === "s_coord") {
      toChange.contact.s_coord = data;
    } else if (id === "info") {
      if (dbData[eventId] !== data) {
        dbData = await fetchDynamicEvent();
        dbData[eventId] = data;
      } else {
        return console.log("No changes made");
      }
    }

    await fetch("https://api.jsonbin.io/v3/b/65b69344dc746540189ce0d0", {
      method: "PUT",
      body: JSON.stringify(dbData),
      headers: {
        "X-Master-Key":
          "$2a$10$4dS9mN2/KNRiL2g/atBaTu4Pj6fqIZBFBaIHUcT3Rql33ozttWmSG",
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
