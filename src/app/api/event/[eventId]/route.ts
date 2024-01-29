import { EventBody } from "../../../../../typings";

export async function GET(
  request: Request,
  { params }: { params: { eventId: string } }
) {
  const id = params.eventId;
  const payload = await fetch(
    "https://api.jsonbin.io/v3/b/65b69344dc746540189ce0d0",
    {
      headers: {
        "X-Master-Key": process.env.JSON_BIN_MASTERKEY!,
      },
      cache: "no-store",
    }
  ).then((res) => res.json());

  const eventData: EventBody[] = payload.record;

  const found = eventData.find((obj) => obj.eventId === parseInt(id));
  return Response.json(found);
}
