import { httpClient } from "@/lib/http/client";
import type {
  ForgotPasswordInput,
  LoginInput,
  RegisterInput,
} from "@/features/auth/schemas/auth-schema";
import type {
  AuthResponse,
  MessageResponse,
  Module,
} from "@/features/auth/types";

// PLACEHOLDER — replace with GET /modules from the Spring Boot API.
const PLACEHOLDER_MODULES: Module[] = [
  { moduleId: 1, moduleName: "Gestion de la relation client", moduleKey: "CRM" },
  { moduleId: 2, moduleName: "Facturation", moduleKey: "INVOICE" },
  { moduleId: 3, moduleName: "Gestion des stocks", moduleKey: "INVENTORY" },
  { moduleId: 4, moduleName: "Commandes et ventes", moduleKey: "SALES" },
  { moduleId: 5, moduleName: "Comptabilité", moduleKey: "ACCOUNTING" },
  { moduleId: 6, moduleName: "Ressources humaines", moduleKey: "HR" },
];

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

  async fetchModules(): Promise<Module[]> {
    // const { data } = await httpClient.get<Module[]>("/modules");
    // return data;
    return PLACEHOLDER_MODULES;
  },

  async forgotPassword(input: ForgotPasswordInput): Promise<MessageResponse> {
    const { data } = await httpClient.post<MessageResponse>(
      "/auth/forgot-password",
      input,
    );
    return data;
  },
};
