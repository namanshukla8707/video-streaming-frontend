import { create, type StateCreator } from "zustand";
import type { AuthStoreState } from "../types/AuthTypes";
import { devtools } from "zustand/middleware";

const AuthStore: StateCreator<AuthStoreState> = (set, _get) => ({
  isAuthenticated: false,
  user: null,

  login: (userData) =>
    set(() => ({
      isAuthenticated: true,
      user: userData,
    })),

  logout: () =>
    set(() => ({
      isAuthenticated: false,
      user: null,
    })),
});

const useAuthStore = create<AuthStoreState>()(
  devtools(AuthStore, { name: "AuthStore" })
);

export default useAuthStore;
