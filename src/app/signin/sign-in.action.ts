"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export const signInAction = async () => {
  try {
    await signIn("google");
  } catch (error) {
    if (error instanceof AuthError) {
      return redirect(`/signin?error=${error.type}`);
    }
    throw error;
  }
};
