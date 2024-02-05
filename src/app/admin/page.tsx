import CreateToken from "@/components/Admin/CreateToken";
import React from "react";
import Organizer from "./Organizer";
import { cookies } from "next/headers";
import SignOut from "@/components/Admin/SignOut";
import { fetchDynamicEvent as fetchEvent } from "@/lib/server/actions/event";

const Admin = async () => {
  const cookieStore = cookies();
  const eventId = cookieStore.get("eventId")?.value as string;
  const role = cookieStore.get("role")?.value as string;

  const event = await fetchEvent(eventId);

  return (
    <main className="flex flex-col justify-center items-center space-y-6">
      <SignOut />
      {role !== "admin" ? <Organizer event={event} /> : <CreateToken />}
    </main>
  );
};

export default Admin;
