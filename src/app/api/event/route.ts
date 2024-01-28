import data from "@/utility/data.json";

export async function GET(request: Request) {
  return Response.json({data});
}
