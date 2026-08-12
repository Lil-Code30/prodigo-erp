import { httpClient } from "@/lib/http/client";
import type {
  ForgotPasswordInput,
  LoginInput,
  RegisterInput,
} from "@/features/auth/schemas/auth-schema";
import type {
  AuthResponse,
  MessageResponse,
  SelectedModule,
} from "@/features/auth/types";

export const authApi = {
  async login(input: LoginInput): Promise<AuthResponse> {
    const { data } = await httpClient.post<AuthResponse>("/auth/login", {
      username: input.username,
      password: input.password,
    });
    return data;
  },

  async register(input: RegisterInput): Promise<AuthResponse> {
    const { data } = await httpClient.post<AuthResponse>(
      "/auth/register",
      input,
    );
    return data;
  },

  async fetchModules(): Promise<SelectedModule[]> {
    const { data } = await httpClient.get<SelectedModule[]>("/auth/modules");
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
