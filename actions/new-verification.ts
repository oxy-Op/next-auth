"use server";

import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";
import { db } from "@/lib/db";

export const newVerification = async (token: string) => {
  const vToken = await getVerificationTokenByToken(token);

  if (!vToken) {
    return {
      success: false,
      message: "Invalid token",
    };
  }

  const hasExpired = new Date() > new Date(vToken.expires);

  if (hasExpired) {
    return {
      success: false,
      message: "Token has expired",
    };
  }

  const existingUser = await getUserByEmail(vToken.email);

  if (!existingUser) {
    return {
      success: false,
      message: "Email does not exist",
    };
  }

  await db.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      emailVerified: new Date(),
      email: vToken.email,
    },
  });

  await db.verificationToken.delete({
    where: {
      id: vToken.id,
    },
  });

  return {
    success: true,
    message: "Email verified",
  };
};
