import { create, type StateCreator } from "zustand";
import type { AuthStoreState } from "../types/AuthTypes";
import { devtools } from "zustand/middleware";

const AuthStore: StateCreator<AuthStoreState> = (set, _get) => ({
  isLoggedIn: false,
  user: null,

  login: (userData) =>
    set(() => ({
      isLoggedIn: true,
      user: userData,
    })),

  logout: () =>
    set(() => ({
      isLoggedIn: false,
      user: null,
    })),
});

const useAuthStore = create<AuthStoreState>()(
  devtools(AuthStore, { name: "AuthStore" })
);

export default useAuthStore;
