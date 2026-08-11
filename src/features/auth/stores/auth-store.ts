"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { AuthUser } from "@/features/auth/types";

interface AuthState {
  user: AuthUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  setSession: (payload: { user: AuthUser; accessToken: string }) => void;
  setUser: (user: AuthUser) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      setSession: ({ user, accessToken }) =>
        set({ user, accessToken, isAuthenticated: true }),
      setUser: (user) => set({ user }),
      logout: () =>
        set({ user: null, accessToken: null, isAuthenticated: false }),
    }),
    {
      name: "prodigo-auth",
      storage: createJSONStorage(() => {
        if (typeof window === "undefined") {
          throw new Error("localStorage is unavailable on the server");
        }
        return localStorage;
      }),
    },
  ),
);
