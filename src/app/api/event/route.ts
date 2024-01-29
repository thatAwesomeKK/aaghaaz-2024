import { EventBody } from "../../../../typings";

export async function GET(request: Request) {
  const payload = await fetch(
    "https://api.jsonbin.io/v3/b/65b69344dc746540189ce0d0",
    {
      headers: {
        "X-Master-Key":
          "$2a$10$4dS9mN2/KNRiL2g/atBaTu4Pj6fqIZBFBaIHUcT3Rql33ozttWmSG",
      },
      cache: "no-store"
    }
  ).then((res) => res.json());
  console.log(payload);
  
  const eventData: EventBody[] = payload.record;
  return Response.json(eventData);
}
