import { Hexagon } from "lucide-react";

export default function Logo() {
  return (
    <div className="mb-10 flex items-center gap-2.5">
      <div className="auth-logo__mark flex h-9 w-9 items-center justify-center rounded-xl">
        <Hexagon className="h-5 w-5 text-white" strokeWidth={2.5} />
      </div>
      <span className="auth-logo__name text-xl font-bold">Prodigo</span>
    </div>
  );
}
