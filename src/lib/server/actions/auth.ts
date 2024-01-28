"use server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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

  console.log(info);
  cookies().set("role", info.role, {
    domain: process.env.COOKIE_DOMAIN,
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
  cookies().set("eventId", info.eventId, {
    domain: process.env.COOKIE_DOMAIN,
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
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
