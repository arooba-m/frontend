import Cookies from "universal-cookie";
import jwt from 'jsonwebtoken';
import {SignJWT, jwtVerify, type JWTPayload} from 'jose';

export async function jwtVerification(token: string) {

    const cookies = new Cookies();
    const secretKey = 'super secret unguessable key MYname is umer faroooooooooooooooooooooooooooooooooq'; // Replace with your actual secret key
// let token: string | undefined;
const decoded = jwt.decode(token, { complete: true });

if (decoded) {
  console.log('Decoded Header:', decoded.header);
  console.log('Decoded Payload:', decoded.payload);

  try {
    const verified = jwt.verify(token, secretKey);
    console.log('Decoded Payload:', verified);
  } catch (error) {
    console.error('Token verification failed:', error);
  }
} else {
  console.error('Token decoding failed');
}
}

// export async function verify(token: string, secret: string): Promise<Token> {
//   const {payload} = await jwtVerify(token, new TextEncoder().encode(secret));
//   console.log('Payload:', payload);
//   // run some checks on the returned payload, perhaps you expect some specific values

//   // if its all good, return it, or perhaps just return a boolean
//   return payload;
// }