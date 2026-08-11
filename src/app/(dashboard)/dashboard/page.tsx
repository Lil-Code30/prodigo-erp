import { Hexagon } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 rounded-2xl border border-dashed bg-white px-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E66A1F]">
        <Hexagon className="h-7 w-7 text-white" strokeWidth={2.5} />
      </div>
      <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
      <p className="text-gray-500">
        Vous êtes connecté à Prodigo. Le tableau de bord est en cours de
        construction.
      </p>
    </div>
  );
}
