import { Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";

type LandingBrandProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function LandingBrand({
  variant = "dark",
  className,
}: LandingBrandProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
        <Hexagon className="h-5 w-5 text-white" strokeWidth={2.5} />
      </span>
      <span
        className={cn(
          "text-xl font-bold tracking-tight",
          variant === "dark" ? "text-gray-900" : "text-white",
        )}
      >
        Prodigo
      </span>
    </span>
  );
}
