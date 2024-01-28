import eventData from "@/utility/data.json";

export async function GET(
  request: Request,
  { params }: { params: { eventId: string } }
) {
  const id = params.eventId;
  const found = eventData.find((obj) => obj.eventId === parseInt(id));
  return Response.json(found);
}
