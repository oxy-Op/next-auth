"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGGIN_REDIRECT } from "@/routes";

export const signWithProvider = async (provider: "google" | "github") => {
  await signIn(provider, {
    callbackUrl: DEFAULT_LOGGIN_REDIRECT,
  });
};
