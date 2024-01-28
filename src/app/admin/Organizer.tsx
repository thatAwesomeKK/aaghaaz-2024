import DragAndDrop from "@/components/Admin/DragAndDrop";
import DragAndDropRules from "@/components/Admin/DragAndDropRules";
import UpdateEventInfo from "@/components/Forms/UpdateEventInfo";
import React from "react";
import { EventBody } from "../../../typings";
import { fetchEvent } from "@/lib/utils";

interface Props {
  event?: EventBody;
}

const Organizer = async ({ event }: Props) => {
  const events = await fetchEvent();
  if (!event) return <div></div>;
  return (
    <div className="w-full">
      <UpdateEventInfo event={event} initialEvents={events} />
      <div className="flex space-x-4 max-w-[95%] mx-auto">
        <DragAndDrop
          id="coordinators"
          typeName="s_coord"
          event={event}
          name="Student Coordinators"
          initialEvents={events}
        />
        <DragAndDrop
          id="coordinators"
          typeName="t_coord"
          event={event}
          name="Teacher Coordinator"
          initialEvents={events}
        />
        <DragAndDropRules id="rules" event={event} initialEvents={events} />
      </div>
    </div>
  );
};

export default Organizer;
