import SignInForm from "@/components/Forms/SignInForm";
import React from "react";

const SignIn = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div className="mb-10">
        <h1 className="font-bold text-5xl mb-2 text-primary">SignIn</h1>
      </div>
      <SignInForm />
    </main>
  );
};

export default SignIn;
