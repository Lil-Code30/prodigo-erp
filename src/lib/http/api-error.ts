import axios from "axios";

export interface ApiErrorFieldErrors {
  [field: string]: string;
}

export class ApiError extends Error {
  readonly status: number;
  readonly fieldErrors?: ApiErrorFieldErrors;

  constructor(message: string, status = 0, fieldErrors?: ApiErrorFieldErrors) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

const FALLBACK_MESSAGE = "Une erreur est survenue. Veuillez réessayer.";

function readFieldErrors(data: unknown): ApiErrorFieldErrors | undefined {
  if (!data || typeof data !== "object") return undefined;
  const candidate = (data as Record<string, unknown>)["fieldErrors"] ?? (data as Record<string, unknown>)["errors"];
  if (!candidate || typeof candidate !== "object") return undefined;
  const entries = Object.entries(candidate as Record<string, unknown>);
  if (entries.length === 0) return undefined;
  return Object.fromEntries(entries.map(([k, v]) => [k, String(v)])) as ApiErrorFieldErrors;
}

function readMessage(data: unknown): string | undefined {
  if (!data || typeof data !== "object") return undefined;
  const record = data as Record<string, unknown>;
  const message = record["message"] ?? record["error"] ?? record["detail"];
  return typeof message === "string" ? message : undefined;
}

export function toApiError(error: unknown): ApiError {
  if (error instanceof ApiError) return error;

  if (axios.isAxiosError(error)) {
    const status = error.response?.status ?? 0;
    const data = error.response?.data;
    const message =
      readMessage(data) ??
      error.message ??
      (status >= 500
        ? "Le serveur rencontre un problème. Veuillez réessayer plus tard."
        : FALLBACK_MESSAGE);
    return new ApiError(message, status, readFieldErrors(data));
  }

  if (error instanceof Error) return new ApiError(error.message);

  return new ApiError(FALLBACK_MESSAGE);
}
