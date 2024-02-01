"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "@/lib/server/actions/auth";
import { useRouter } from "next/navigation";

const SignOut = () => {
  const router = useRouter();
  const logout = async () => {
    await signOut();
    router.push("/admin/signin");
  };
  return (
    <div className="w-full flex justify-end mr-10 mt-4">
      <Button onClick={() => logout()}>SignOut</Button>
    </div>
  );
};

export default SignOut;
