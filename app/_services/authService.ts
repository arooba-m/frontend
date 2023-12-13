// import { FilteredUser, UserLoginResponse, UserResponse } from "./types";
import useFetch from "../_helpers/useFetch";
import { ResponseVM } from "../_models/response.model";
import { User, UserPayload } from "../_models/user.model";
// import { cookies } from 'next/headers'
// import { NextRequest, NextResponse } from "next/server";

const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "https://oneclicksapi.azurewebsites.net";
// const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "https://localhost:7256";

async function handleResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get("Content-Type") || "";
    const isJson = contentType.includes("application/json");
    const data = isJson ? await response.json() : await response.text();

    if (!response.ok) {
        if (isJson && data.errors !== null) {
            throw new Error(JSON.stringify(data.errors));
        }

        throw new Error(data.message || response.statusText);
    }

    // cookies().set({
    //     name: "token",
    //     value: data.token,
    //     path: "/",
    //   });


//     const res = NextResponse.next()
//   res.cookies.set('vercel', 'fast')
//   res.cookies.set({
//     name: 'vercel',
//     value: 'fast',
//     path: '/',
//   })

    return data as T;
}
const fetch = useFetch();

export async function RegisterService(payload: UserPayload): Promise<User> {
    const response = await fetch.post(`${SERVER_ENDPOINT}/api/accounts/register`, payload);

    return handleResponse<ResponseVM<User>>(response).then((data) => data.responseData);
}

export async function LoginService(username: string, password: string): Promise<User> {
    const response = await fetch.post(`${SERVER_ENDPOINT}/api/Accounts/login`, {username, password});

    return handleResponse<ResponseVM<User>>(response).then((data) => data.responseData);
}

export async function VerifyService(): Promise<User>{
    const responseToken = await fetch.get(`${SERVER_ENDPOINT}/api/accounts/verify`);

    return handleResponse<ResponseVM<User>>(responseToken).then((data) => data.responseData);
}

export async function ResetPasswordService(token :string,password: string, confirmPassword :string): Promise<User>{
    const response = await fetch.post(`${SERVER_ENDPOINT}/api/accounts/resetPassword`, {token,confirmPassword,password});

    return handleResponse<ResponseVM<User>>(response).then((data) => data.responseData);
}
export async function ForgetPasswordService(username :string): Promise<User>{
    const response = await fetch.post(`${SERVER_ENDPOINT}/api/accounts/forgetPassword`, username);

    return handleResponse<ResponseVM<User>>(response).then((data) => data.responseData);
}

// export async function getUsersService(password: string): Promise<User>{
//     const responseToken = await fetch.get(`${SERVER_ENDPOINT}/api/getUsers`);

//     return handleResponse<ResponseVM<User>>(responseToken).then((data) => data.responseData);
// }

// export async function deleteUserService(id: string): Promise<User>{
//     const responseToken = await fetch.delete(`${SERVER_ENDPOINT}/api/user/${id}`);

//     return handleResponse<ResponseVM<User>>(responseToken).then((data) => data.responseData);
// }


// export async function apiLogoutUser(): Promise<void> {    
//     const response = await fetch(`${SERVER_ENDPOINT}/api/auth/logout`, {
//         method: "GET",
//         credentials: "include",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });

//     return handleResponse<void>(response);
// }

// export async function apiGetAuthUser(token?: string): Promise<FilteredUser> {
//     const headers: Record<string, string> = {
//         "Content-Type": "application/json",
//     };

//     if (token) {
//         headers["Authorization"] = `Bearer ${token}`;
//     }
//     const response = await fetch(`${SERVER_ENDPOINT}/api/users/me`, {
//         method: "GET",
//         credentials: "include",
//         headers,
//     });

//     return handleResponse<UserResponse>(response).then((data) => data.data.user);
// }
