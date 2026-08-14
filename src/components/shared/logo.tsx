import { Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "light", className }: LogoProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5",
        variant === "light" && "mb-10",
        className,
      )}
    >
      <div className="auth-logo__mark flex h-9 w-9 items-center justify-center rounded-xl">
        <Hexagon className="h-5 w-5 text-white" strokeWidth={2.5} />
      </div>
      <span
        className={cn(
          "text-xl font-bold",
          variant === "dark" ? "text-white" : "auth-logo__name",
        )}
      >
        Prodigo
      </span>
    </div>
  );
}
