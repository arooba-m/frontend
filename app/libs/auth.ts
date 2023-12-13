// import { jwtVerify } from "jose";

// export function getJwtSecretKey() {
//   const secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;
//   if (!secret) {
//     throw new Error("JWT Secret key is not matched");
//   }
//   return new TextEncoder().encode(secret);
// }

// export async function verifyJwtToken(token: string) {
//   try {
//     const { payload } = await jwtVerify(token, getJwtSecretKey());
//     return payload;
//   } catch (error) {
//     return null;
//   }
// }

// import { getEnvVariable } from "./helpers";
import { SignJWT, jwtVerify } from "jose";


export const verifyJWT = async <T>(token: string): Promise<T> => {
  try {
    return (
      await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET_KEY)
      )
    ).payload as T;
  } catch (error) {
    console.log(error);
    throw new Error("Your token has expired.");
  }
};
