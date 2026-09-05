import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { DemoBanner } from "@/components/demo-banner";
import { TxRow } from "@/components/tx-row";
import { Input } from "@/components/ui/input";
import { useBank } from "@/lib/bank/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/vault/activity")({ component: Activity });

const FILTERS = ["All", "Income", "Transfer", "Dining", "Home", "Travel", "Business"] as const;

function Activity() {
  const txs = useBank((s) => s.transactions);
  const accounts = useBank((s) => s.accounts);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    return [...txs]
      .sort((a, b) => +new Date(b.date) - +new Date(a.date))
      .filter((t) => (filter === "All" ? true : t.category === filter))
      .filter((t) => {
        if (!query) return true;
        const account = accounts.find((a) => a.id === t.accountId)?.name ?? "";
        return `${t.merchant} ${t.category} ${account}`.toLowerCase().includes(query);
      });
  }, [txs, q, filter, accounts]);

  return (
    <div className="space-y-6">
      <DemoBanner />
      <div>
        <h1 className="font-display text-3xl font-medium tracking-tight">Activity</h1>
        <p className="mt-1 text-sm text-muted">Search merchants, categories, or sleeves.</p>
      </div>
      <Input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search activity"
        aria-label="Search activity"
      />
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "h-10 rounded-full px-4 text-sm",
              filter === f ? "bg-accent text-accent-fg" : "bg-elevated text-muted",
            )}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="rounded-lg bg-surface px-4 shadow-border">
        {list.length === 0 ? (
          <p className="py-8 text-sm text-muted">No matching activity.</p>
        ) : (
          list.map((tx) => <TxRow key={tx.id} tx={tx} />)
        )}
      </div>
    </div>
  );
}
