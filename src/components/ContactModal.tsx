import React from "react";
import { Coordinator } from "../../typings";

type Props = {
  contact: Coordinator;
};

function ContactModal({ contact }: Props) {
  return (
    <>
      <div className="absolute shadow-lg h-72 w-64 bg-slate-200 -top-72 -right-6 flex flex-col space-y-4 justify-evenly p-6 rounded-md">
        <div>
          <p className="text-base font-bold">Student Coordinator:</p>
          {contact.s_coord.map((s, i) => (
            <div key={i} className="flex gap-2 items-center whitespace-nowrap">
              <p className="text-sm font-medium">{s.name}</p>
              <p>-</p>
              <p className="text-sm">{s.number}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="text-base font-bold">Teacher Coordinator:</p>
          {contact.t_coord.map((t, i) => (
            <p key={i} className="text-sm font-medium">
              {t.name}
            </p>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-t-[20px] border-t-slate-200 border-r-[10px] border-r-transparent"></div>
    </>
  );
}

export default ContactModal;
