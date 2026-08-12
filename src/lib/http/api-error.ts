import axios from "axios";

export interface FieldErrorResponse {
  field: string;
  message: string;
}

export interface ApiErrorResponse {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;
  errorCode: string;
  traceId: string;
}

export interface ValidationErrorResponse extends ApiErrorResponse {
  errors: FieldErrorResponse[];
}

export interface ApiErrorFieldErrors {
  [field: string]: string;
}

export class ApiError extends Error {
  readonly status: number;
  readonly fieldErrors?: ApiErrorFieldErrors;
  readonly errorCode?: string;
  readonly traceId?: string;
  readonly path?: string;

  constructor(
    message: string,
    status = 0,
    fieldErrors?: ApiErrorFieldErrors,
    meta?: Pick<ApiError, "errorCode" | "traceId" | "path">,
  ) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.fieldErrors = fieldErrors;
    this.errorCode = meta?.errorCode;
    this.traceId = meta?.traceId;
    this.path = meta?.path;
  }
}

const FALLBACK_MESSAGE = "Une erreur est survenue. Veuillez réessayer.";

function readString(value: unknown): string | undefined {
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function readFieldErrors(data: unknown): ApiErrorFieldErrors | undefined {
  if (!data || typeof data !== "object") return undefined;
  const record = data as Record<string, unknown>;
  const candidate = record["errors"] ?? record["fieldErrors"];

  if (Array.isArray(candidate)) {
    const entries = candidate.filter(
      (entry): entry is FieldErrorResponse =>
        typeof entry === "object" &&
        entry !== null &&
        typeof (entry as Record<string, unknown>)["field"] === "string" &&
        typeof (entry as Record<string, unknown>)["message"] === "string",
    );
    if (entries.length === 0) return undefined;
    return Object.fromEntries(
      entries.map(({ field, message }) => [field, message]),
    );
  }

  if (candidate && typeof candidate === "object") {
    const entries = Object.entries(candidate as Record<string, unknown>);
    if (entries.length === 0) return undefined;
    return Object.fromEntries(
      entries.map(([k, v]) => [k, String(v)]),
    ) as ApiErrorFieldErrors;
  }

  return undefined;
}

function readMessage(data: unknown): string | undefined {
  if (!data || typeof data !== "object") return undefined;
  const record = data as Record<string, unknown>;
  return readString(record["message"]) ?? readString(record["error"]) ?? readString(record["detail"]);
}

export function toApiError(error: unknown): ApiError {
  if (error instanceof ApiError) return error;

  if (axios.isAxiosError(error)) {
    const status = error.response?.status ?? 0;
    const data = error.response?.data;
    const record =
      data && typeof data === "object" ? (data as Record<string, unknown>) : {};
    const meta = {
      errorCode: readString(record["errorCode"]),
      traceId: readString(record["traceId"]),
      path: readString(record["path"]),
    };
    const message =
      readMessage(data) ??
      error.message ??
      (status >= 500
        ? "Le serveur rencontre un problème. Veuillez réessayer plus tard."
        : FALLBACK_MESSAGE);
    return new ApiError(message, status, readFieldErrors(data), meta);
  }

  if (error instanceof Error) return new ApiError(error.message);

  return new ApiError(FALLBACK_MESSAGE);
}
