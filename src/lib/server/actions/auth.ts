"use server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";

const jwtPublicKey = process.env.JWT_PUBLIC_KEY!;
const jwtPrivateKey = process.env.JWT_PRIVATE_KEY!;

interface jwtInfo extends JwtPayload {
  role: string;
  eventId: string;
}

export async function signIn(authKey: string) {
  if (!authKey) throw new Error("Invalid token");

  const verifiedToken = jwt.verify(authKey, jwtPublicKey, {
    algorithms: ["RS256"],
  });
  const info = verifiedToken as jwtInfo;

  cookies().set("role", info.role);
  cookies().set("eventId", info.eventId);
}

export async function signOut() {
  try {
    cookies().delete("role");
    cookies().delete("eventId");
  } catch (error) {
    console.log(error);
  }
}

export async function createToken(data: Object) {
  try {
    return jwt.sign(data, jwtPrivateKey, {
      algorithm: "RS256",
    });
  } catch (error) {}
}
