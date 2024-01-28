import React from "react";
import EventCard from "./EventCard";
import { EventBody } from "../../typings";

async function Events() {
  const payload = await fetch(
    "https://api.jsonbin.io/v3/b/65b69344dc746540189ce0d0",
    {
      headers: {
        "X-Master-Key":
          "$2a$10$4dS9mN2/KNRiL2g/atBaTu4Pj6fqIZBFBaIHUcT3Rql33ozttWmSG",
        "X-Access-Key":
          "$2a$10$zuJKZQUyZYaRAa7cvzt/Pupo.14iB9mIBIRuZhllKhqOgvRUHWbUq",
      },
    }
  ).then((res) => res.json());
  const eventData: EventBody[] = payload.record;

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-center max-w-[90%]">
      {eventData.map((event, i) => (
        <EventCard event={event} key={event.eventId} />
      ))}
    </div>
  );
}

export default Events;
