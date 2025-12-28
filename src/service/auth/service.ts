import type { AuthUser } from "@/types/AuthTypes";
import api from "./api";

async function registerUser(body: AuthUser) {
  const response = await api.registerUser(body);
  return response;
}

export default { registerUser };
