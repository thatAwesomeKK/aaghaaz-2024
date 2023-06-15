import { data } from "@/utility/data";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(data);
}
