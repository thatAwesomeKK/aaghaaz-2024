import { data } from "@/utility/data";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: { params: any }) {
  const { id } = context.params;
  const found = data.find((obj) => obj.eventId === parseInt(id));
  return NextResponse.json(found);
}
