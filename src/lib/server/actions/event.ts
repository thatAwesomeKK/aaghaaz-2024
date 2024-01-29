"use server";
import { EventBody } from "../../../../typings";

export async function editEvent(data: Object) {
  try {
  } catch (error) {}
}

export async function updateFile(data: any) {
  try {
    const payload = await fetch(
      "https://api.jsonbin.io/v3/b/65b69344dc746540189ce0d0",
      {
        headers: {
          "X-Master-Key":
            "$2a$10$4dS9mN2/KNRiL2g/atBaTu4Pj6fqIZBFBaIHUcT3Rql33ozttWmSG",
        },
      }
    ).then((res) => res.json());
    const eventData: EventBody[] = payload.record;

    if (eventData === data) return console.log("No changes made");
    
    const res = await fetch(
      "https://api.jsonbin.io/v3/b/65b69344dc746540189ce0d0",
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "X-Master-Key":
            "$2a$10$4dS9mN2/KNRiL2g/atBaTu4Pj6fqIZBFBaIHUcT3Rql33ozttWmSG",
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());

  } catch (error) {
    console.log(error);
  }
}
