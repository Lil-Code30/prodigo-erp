"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  Building2,
  Globe2,
  MapPin,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Field from "@/features/auth/components/field";
import {
  personalInfoSchema,
  registerSchema,
  toFieldErrors,
} from "@/features/auth/schemas/auth-schema";
import { useRegisterMutation } from "@/features/auth/hooks/use-auth";

const COUNTRIES = [
  "Cameroun",
  "Côte d'Ivoire",
  "Sénégal",
  "Gabon",
  "Togo",
  "Bénin",
  "Mali",
  "Burkina Faso",
  "RD Congo",
  "Congo",
  "Tchad",
  "Niger",
  "Guinée",
  "Autre",
];

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "")
    .slice(0, 255);
}

type Strength = 1 | 2 | 3;

function passwordStrength(pw: string): Strength {
  if (!pw) return 1;
  let score = 0;
  if (pw.length >= 8) score++;
  if (pw.length >= 12) score++;
  if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  if (score <= 1) return 1;
  if (score <= 3) return 2;
  return 3;
}

const STRENGTH_CLASS: Record<Strength, { label: string; className: string }> = {
  1: { label: "Faible", className: "strength-weak" },
  2: { label: "Moyen", className: "strength-medium" },
  3: { label: "Fort", className: "strength-strong" },
};

export default function RegisterForm() {
  const router = useRouter();
  const registerMutation = useRegisterMutation();

  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    companyName: "",
    companySlug: "",
    country: "Cameroun",
  });
  const [slugTouched, setSlugTouched] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  function update(field: keyof typeof values, value: string) {
    setValues((v) => {
      const next = { ...v, [field]: value };
      if (field === "companyName" && !slugTouched) {
        next.companySlug = slugify(value);
      }
      return next;
    });
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (step === 1) {
      const parsed = personalInfoSchema.safeParse({
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.username,
        email: values.email,
        password: values.password,
      });
      if (!parsed.success) {
        setErrors(toFieldErrors(parsed.error));
        return;
      }
      setErrors({});
      setStep(2);
      return;
    }

    const parsed = registerSchema.safeParse(values);
    if (!parsed.success) {
      setErrors(toFieldErrors(parsed.error));
      return;
    }
    setErrors({});

    registerMutation.mutate(parsed.data, {
      onSuccess: () => setSuccess(true),
    });
  }

  const submitting = registerMutation.isPending;
  const strength = passwordStrength(values.password);

  if (success) {
    return (
      <div>
        <div className="success-icon">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h1 className="success-title text-4xl font-bold">
          Compte créé avec succès
        </h1>
        <p className="success-body">
          Bienvenue sur Prodigo, {values.firstName || "à vous"}. Votre espace{" "}
          <span className="success-strong">{values.companyName}</span> est prêt.
          Vous pouvez maintenant vous connecter.
        </p>
        <Button
          size="lg"
          className="mt-6 w-full"
          onClick={() => router.push("/login")}
        >
          Se connecter
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <>
      <h1 className="auth-title text-4xl font-bold">Créer votre compte</h1>
      <p className="auth-subtitle">
        {step === 1
          ? "Commencez par vos informations personnelles."
          : "Parlez-nous de votre entreprise."}
      </p>

      <div className="step-bars">
        <div className="step-bar step-bar--active" />
        <div className={`step-bar ${step === 2 ? "step-bar--active" : ""}`} />
      </div>
      <div className="step-labels">
        <span className="step-labels__item--active">1. Compte</span>
        <span className={step === 2 ? "step-labels__item--active" : undefined}>
          2. Entreprise
        </span>
      </div>

      {registerMutation.isError && (
        <div className="auth-alert auth-alert--error" role="alert">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          {registerMutation.error.message}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {step === 1 ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Field label="Prénom" htmlFor="firstName" error={errors.firstName}>
                <Input
                  id="firstName"
                  maxLength={150}
                  value={values.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                  placeholder="Jean"
                  aria-invalid={errors.firstName ? true : undefined}
                />
              </Field>
              <Field label="Nom" htmlFor="lastName" error={errors.lastName}>
                <Input
                  id="lastName"
                  maxLength={150}
                  value={values.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                  placeholder="Fotso"
                  aria-invalid={errors.lastName ? true : undefined}
                />
              </Field>
            </div>

            <Field
              label="Nom d'utilisateur"
              htmlFor="username"
              error={errors.username}
              right={
                <span className="text-xs text-muted-foreground">
                  {values.username.length}/20
                </span>
              }
            >
              <div className="relative">
                <User className="input-icon h-4 w-4" />
                <Input
                  id="username"
                  maxLength={20}
                  value={values.username}
                  onChange={(e) => update("username", e.target.value)}
                  className="pl-10"
                  placeholder="jfotso"
                  aria-invalid={errors.username ? true : undefined}
                />
              </div>
            </Field>

            <Field label="Adresse e-mail" htmlFor="email" error={errors.email}>
              <div className="relative">
                <Mail className="input-icon h-4 w-4" />
                <Input
                  id="email"
                  type="email"
                  maxLength={150}
                  value={values.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="pl-10"
                  placeholder="jean.fotso@entreprise.cm"
                  aria-invalid={errors.email ? true : undefined}
                />
              </div>
            </Field>

            <Field
              label="Mot de passe"
              htmlFor="password"
              error={errors.password}
              hint={!errors.password ? "8 caractères minimum." : undefined}
            >
              <div className="relative">
                <Lock className="input-icon h-4 w-4" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  minLength={8}
                  maxLength={100}
                  value={values.password}
                  onChange={(e) => update("password", e.target.value)}
                  className="pl-10 pr-10"
                  placeholder="••••••••"
                  aria-invalid={errors.password ? true : undefined}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="input-toggle"
                  aria-label={
                    showPassword
                      ? "Masquer le mot de passe"
                      : "Afficher le mot de passe"
                  }
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {values.password && (
                <div className="strength-meter">
                  <div className="strength-bars">
                    {[1, 2, 3].map((i) => (
                      <span
                        key={i}
                        className={`strength-bar ${
                          i <= strength ? STRENGTH_CLASS[strength].className : ""
                        }`}
                      />
                    ))}
                  </div>
                  <span
                    className={`strength-label ${STRENGTH_CLASS[strength].className}`}
                  >
                    {STRENGTH_CLASS[strength].label}
                  </span>
                </div>
              )}
            </Field>

            <Button type="submit" size="lg" className="w-full">
              Continuer
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <Field
              label="Nom de l'entreprise"
              htmlFor="companyName"
              error={errors.companyName}
            >
              <div className="relative">
                <Building2 className="input-icon h-4 w-4" />
                <Input
                  id="companyName"
                  maxLength={255}
                  value={values.companyName}
                  onChange={(e) => update("companyName", e.target.value)}
                  className="pl-10"
                  placeholder="Ets Fotso & Fils"
                  aria-invalid={errors.companyName ? true : undefined}
                />
              </div>
            </Field>

            <Field
              label="Identifiant de l'entreprise"
              htmlFor="companySlug"
              error={errors.companySlug}
              hint={
                !errors.companySlug
                  ? `Aperçu : prodigo.app/${values.companySlug || "votre-entreprise"}`
                  : undefined
              }
            >
              <div className="relative">
                <Globe2 className="input-icon h-4 w-4" />
                <Input
                  id="companySlug"
                  maxLength={255}
                  value={values.companySlug}
                  onChange={(e) => {
                    setSlugTouched(true);
                    update("companySlug", slugify(e.target.value));
                  }}
                  className="pl-10"
                  placeholder="ets-fotso-fils"
                  aria-invalid={errors.companySlug ? true : undefined}
                />
              </div>
            </Field>

            <Field label="Pays" htmlFor="country" error={errors.country}>
              <div className="relative">
                <MapPin className="absolute left-2.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Select
                  value={values.country}
                  onValueChange={(value) => {
                    if (value) update("country", value);
                  }}
                >
                  <SelectTrigger className="w-full pl-9">
                    <SelectValue placeholder="Choisir un pays" />
                  </SelectTrigger>
                  <SelectContent>
                    {COUNTRIES.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </Field>

            <div className="flex gap-3 pt-1">
              <Button type="button" variant="outline" onClick={() => setStep(1)}>
                <ArrowLeft className="h-4 w-4" />
                Retour
              </Button>
              <Button
                type="submit"
                size="lg"
                className="flex-1"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Création...
                  </>
                ) : (
                  "Créer mon compte"
                )}
              </Button>
            </div>
          </div>
        )}
      </form>

      <p className="auth-switch">
        Vous avez déjà un compte ?{" "}
        <button
          type="button"
          className="auth-link"
          onClick={() => router.push("/login")}
        >
          Se connecter
        </button>
      </p>
    </>
  );
}
