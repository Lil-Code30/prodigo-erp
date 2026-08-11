"use client";

import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/features/auth/api/auth-api";
import type {
  ForgotPasswordInput,
  LoginInput,
  RegisterInput,
} from "@/features/auth/schemas/auth-schema";

export function useLoginMutation() {
  return useMutation({
    mutationFn: (input: LoginInput) => authApi.login(input),
  });
}

export function useRegisterMutation() {
  return useMutation({
    mutationFn: (input: RegisterInput) => authApi.register(input),
  });
}

export function useForgotPasswordMutation() {
  return useMutation({
    mutationFn: (input: ForgotPasswordInput) => authApi.forgotPassword(input),
  });
}
