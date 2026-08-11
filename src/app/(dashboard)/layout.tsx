import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <header className="flex h-16 items-center justify-between border-b bg-white px-6">
        <span className="text-lg font-bold text-gray-900">Prodigo</span>
        <span className="text-sm text-gray-500">Espace de travail</span>
      </header>
      <main className="flex flex-1 flex-col p-6">{children}</main>
    </div>
  );
}
