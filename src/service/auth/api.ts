import request from "@/config/AxiosRequest";
import type { AuthUser } from "@/types/AuthTypes";
import { APIRequestType } from "@/types/GlobalTypes";
import type { RegisterUserResponse } from "./type";

async function registerUser(body: AuthUser) {
  const response = await request<AuthUser, RegisterUserResponse>(
    APIRequestType.POST,
    "/auth/signup",
    body
  );
  return Promise.resolve(response!!);
}

export default { registerUser };
