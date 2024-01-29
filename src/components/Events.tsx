import React from "react";
import EventCard from "./EventCard";
import { EventBody } from "../../typings";
import { fetchEvent } from "@/lib/utils";

async function Events() {
  const eventData: EventBody[] = await fetchEvent();

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-center max-w-[90%]">
      {eventData.map((event, i) => (
        <EventCard event={event} key={event.eventId} />
      ))}
    </div>
  );
}

export default Events;
