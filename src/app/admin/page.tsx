import CreateToken from "@/components/Admin/CreateToken";
import React from "react";
import Organizer from "./Organizer";
import { cookies } from "next/headers";
import eventData from "@/utility/data.json";
import SignOut from "@/components/Admin/SignOut";
import { EventBody } from "../../../typings";

const Admin = async () => {
  const cookieStore = cookies();
  const eventId = cookieStore.get("eventId")?.value as string;
  const role = cookieStore.get("role")?.value as string;

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

  const event = eventData.find((event) => event.eventId === parseInt(eventId));
  return (
    <main className="flex flex-col justify-center items-center space-y-6">
      <SignOut />
      {role !== "admin" ? <Organizer event={event} /> : <CreateToken />}
    </main>
  );
};

export default Admin;
