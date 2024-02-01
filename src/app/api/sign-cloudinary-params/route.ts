import { v2 as cloudinary } from "cloudinary";

const apiSecret = process.env.CLOUDINARY_API_SECRET;

export async function POST(request: Request) {
  const body = await request.json();
  const { paramsToSign } = body;

  const signature = cloudinary.utils.api_sign_request(
    paramsToSign,
    apiSecret as string
  );

  return Response.json({ signature });
}
