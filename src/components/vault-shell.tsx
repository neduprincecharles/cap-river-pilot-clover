import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowLeftRight, CreditCard, LayoutGrid, LifeBuoy, LogOut, Receipt, Wallet } from "lucide-react";
import { LedgerMark } from "@/components/mark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useBank } from "@/lib/bank/store";

const NAV = [
  { to: "/vault", label: "Overview", icon: LayoutGrid },
  { to: "/vault/accounts", label: "Accounts", icon: Wallet },
  { to: "/vault/activity", label: "Activity", icon: ArrowLeftRight },
  { to: "/vault/cards", label: "Cards", icon: CreditCard },
  { to: "/vault/bills", label: "Bills", icon: Receipt },
  { to: "/vault/help", label: "Desk", icon: LifeBuoy },
] as const;

export function VaultShell() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const session = useBank((s) => s.session);
  const signOut = useBank((s) => s.signOut);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <div className="mx-auto flex min-h-dvh max-w-6xl">
        <aside className="hidden w-56 shrink-0 flex-col border-r border-border px-4 py-6 md:flex">
          <Link to="/vault" className="mb-8 flex items-center gap-2 px-2 text-fg">
            <LedgerMark className="size-5" />
            <span className="font-display text-lg tracking-tight">Quantum Ledger</span>
          </Link>
          <nav className="flex flex-1 flex-col gap-1">
            {NAV.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex min-h-11 items-center gap-3 rounded-md px-3 text-sm transition-colors duration-[var(--motion-quick)]",
                    active ? "bg-elevated text-fg" : "text-muted hover:bg-elevated hover:text-fg",
                  )}
                >
                  <item.icon className="size-4" />
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/vault/move"
              className={cn(
                "mt-3 flex min-h-11 items-center justify-center rounded-md bg-accent px-3 text-sm font-medium text-accent-fg",
                pathname === "/vault/move" && "opacity-90",
              )}
            >
              Move money
            </Link>
          </nav>
          <div className="mt-6 border-t border-border pt-4">
            <p className="px-2 text-sm text-fg">{session?.holder}</p>
            <p className="px-2 text-xs text-muted">Member since {session?.memberSince}</p>
            <Button variant="ghost" size="sm" className="mt-2 w-full justify-start text-muted" onClick={signOut}>
              <LogOut className="size-4" />
              Lock vault
            </Button>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col pb-24 md:pb-0">
          <header className="flex items-center justify-between border-b border-border px-4 py-4 md:hidden">
            <Link to="/vault" className="flex items-center gap-2">
              <LedgerMark className="size-5" />
              <span className="font-display text-lg">Quantum Ledger</span>
            </Link>
            <Button variant="ghost" size="icon" aria-label="Lock vault" onClick={signOut}>
              <LogOut className="size-4" />
            </Button>
          </header>
          <main className="flex-1 px-4 py-6 md:px-8 md:py-8">
            <Outlet />
          </main>
        </div>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-bg/95 md:hidden">
        <div className="grid grid-cols-6">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex min-h-14 flex-col items-center justify-center gap-1 text-[11px]",
                  active ? "text-fg" : "text-muted",
                )}
              >
                <item.icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
