import { useMutation } from "@tanstack/react-query";
import AuthService from "@/service/auth";
import type { AuthUser } from "@/types/AuthTypes";

export function useRegisterUser() {
  return useMutation({
    mutationFn: (body: AuthUser) => AuthService.registerUser(body),
    onSuccess: (data) => {
      console.log("Registered:", data);
    },
    onError: (error) => {
      console.error("Registration failed", error);
    },
  });
}
