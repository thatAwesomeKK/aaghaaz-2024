import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { EventBody } from "../../typings";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchStaleEvent() {
  const payload = await fetch(
    "https://api.jsonbin.io/v3/b/65b69344dc746540189ce0d0",
    {
      headers: {
        "X-Master-Key":
          "$2a$10$4dS9mN2/KNRiL2g/atBaTu4Pj6fqIZBFBaIHUcT3Rql33ozttWmSG",
      },
      next: { revalidate: 60 },
    }
  ).then((res) => res.json());
  const eventData: EventBody[] = payload.record;
  return eventData;
}

export async function fetchDynamicEvent() {
  const payload = await fetch(
    "https://api.jsonbin.io/v3/b/65b69344dc746540189ce0d0",
    {
      headers: {
        "X-Master-Key":
          "$2a$10$4dS9mN2/KNRiL2g/atBaTu4Pj6fqIZBFBaIHUcT3Rql33ozttWmSG",
      },
      cache: "no-store",
    }
  ).then((res) => res.json());
  const eventData: EventBody[] = payload.record;
  return eventData;
}
