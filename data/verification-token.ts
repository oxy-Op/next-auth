import { db } from "@/lib/db";

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const vToken = await db.verificationToken.findUnique({
      where: {
        token: token,
      },
    });

    return vToken;
  } catch (error) {
    return null;
  }
};

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const vToken = await db.verificationToken.findFirst({
      where: {
        token: email,
      },
    });

    return vToken;
  } catch (error) {
    return null;
  }
};
