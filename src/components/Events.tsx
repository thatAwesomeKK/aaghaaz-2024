import React from "react";
import EventCard from "./EventCard";
import eventData from "@/utility/data.json";

function Events() {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-center max-w-[90%]">
      {eventData.map((event, i) => (
        <EventCard event={event} key={event.eventId} />
      ))}
    </div>
  );
}

export default Events;
