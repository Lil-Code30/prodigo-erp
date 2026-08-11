import { z } from "zod";

export const loginSchema = z.object({
  identifier: z
    .string()
    .min(1, "Indiquez votre e-mail ou votre nom d'utilisateur.")
    .refine(
      (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
        /^[a-zA-Z0-9_.-]{2,}$/.test(value),
      "Identifiant invalide.",
    ),
  password: z.string().min(1, "Le mot de passe est requis."),
  remember: z.boolean().default(true),
});

export const personalInfoSchema = z.object({
  firstName: z.string().min(1, "Le prénom est requis."),
  lastName: z.string().min(1, "Le nom est requis."),
  username: z
    .string()
    .min(1, "Le nom d'utilisateur est requis.")
    .max(20, "20 caractères maximum."),
  email: z
    .string()
    .min(1, "L'adresse e-mail est requise.")
    .pipe(z.email("Adresse e-mail invalide.")),
  password: z.string().min(8, "8 caractères minimum."),
});

export const companyInfoSchema = z.object({
  companyName: z.string().min(1, "Le nom de l'entreprise est requis."),
  companySlug: z
    .string()
    .min(1, "L'identifiant est requis.")
    .regex(/^[a-z0-9-]+$/, "Minuscules, chiffres et tirets uniquement."),
  country: z.string().min(1, "Le pays est requis."),
});

export const registerSchema = personalInfoSchema
  .extend({
    companyName: companyInfoSchema.shape.companyName,
    companySlug: companyInfoSchema.shape.companySlug,
    country: companyInfoSchema.shape.country,
  })
  .strip();

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Indiquez votre adresse e-mail.")
    .pipe(z.email("Adresse e-mail invalide.")),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;

export function toFieldErrors(error: z.ZodError): Record<string, string> {
  const result: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "");
    if (key && !(key in result)) result[key] = issue.message;
  }
  return result;
}
