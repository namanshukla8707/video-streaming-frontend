import type { UserType } from "@/types/AuthTypes";

export interface RegisterUserResponse {
    username:string,
    email:string,
    role:UserType,
    token:string
}