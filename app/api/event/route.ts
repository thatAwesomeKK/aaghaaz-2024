import { data } from "@/utility/data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json( data );
}
