import DragAndDrop from "@/components/Admin/DragAndDrop";
import DragAndDropRules from "@/components/Admin/DragAndDropRules";
import UpdateEventInfo from "@/components/Forms/UpdateEventInfo";
import React from "react";
import { EventBody } from "../../../typings";

interface Props {
  event?: EventBody;
}

const Organizer = async ({ event }: Props) => {
  if (!event) return <div></div>;
  return (
    <div className="w-full">
      <UpdateEventInfo initialEvent={event} />
      <div className="flex space-x-4 max-w-[95%] mx-auto">
        <DragAndDrop
          id="coordinators"
          typeName="s_coord"
          initialEvent={event}
          name="Student Coordinators"
        />
        <DragAndDrop
          id="coordinators"
          typeName="t_coord"
          initialEvent={event}
          name="Teacher Coordinator"
        />
        <DragAndDropRules id="rules" initialEvent={event} />
        {event.cashPrize && (
          <DragAndDropRules id="cashPrize" initialEvent={event} />
        )}
      </div>
    </div>
  );
};

export default Organizer;
