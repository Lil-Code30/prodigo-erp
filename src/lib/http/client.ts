import axios from "axios";
import { env } from "@/config/env";
import { useAuthStore } from "@/features/auth/stores/auth-store";
import { toApiError } from "@/lib/http/api-error";

export const httpClient = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 15_000,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      const url = error.config?.url ?? "";
      const isAuthCall = url.includes("/auth/login") || url.includes("/auth/refresh");
      if (!isAuthCall) {
        useAuthStore.getState().logout();
        if (typeof window !== "undefined") {
          window.location.assign(new URL("/login", window.location.origin).toString());
        }
      }
    }
    return Promise.reject(toApiError(error));
  },
);
