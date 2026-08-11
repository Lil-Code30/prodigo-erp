import { httpClient } from "@/lib/http/client";
import type {
  ForgotPasswordInput,
  LoginInput,
  RegisterInput,
} from "@/features/auth/schemas/auth-schema";
import type {
  LoginResponse,
  MessageResponse,
  RegisterResponse,
} from "@/features/auth/types";

// PLACEHOLDER — endpoints and payloads are not final.
// Adjust the paths below to match your Spring Boot API contract once available.
export const authApi = {
  async login(input: LoginInput): Promise<LoginResponse> {
    const { data } = await httpClient.post<LoginResponse>("/auth/login", {
      identifier: input.identifier,
      password: input.password,
    });
    return data;
  },

  async register(input: RegisterInput): Promise<RegisterResponse> {
    const { data } = await httpClient.post<RegisterResponse>(
      "/auth/register",
      input,
    );
    return data;
  },

  async forgotPassword(input: ForgotPasswordInput): Promise<MessageResponse> {
    const { data } = await httpClient.post<MessageResponse>(
      "/auth/forgot-password",
      input,
    );
    return data;
  },
};
