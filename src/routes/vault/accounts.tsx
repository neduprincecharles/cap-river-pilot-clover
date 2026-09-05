import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { DemoBanner } from "@/components/demo-banner";
import { TxRow } from "@/components/tx-row";
import { formatMoney } from "@/lib/bank/format";
import { useBank } from "@/lib/bank/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/vault/accounts")({ component: Accounts });

const LABELS = { checking: "Spending", savings: "Reserve", invest: "Invested", business: "Operating" } as const;

function Accounts() {
  const accounts = useBank((s) => s.accounts);
  const txs = useBank((s) => s.transactions);
  const [id, setId] = useState(accounts[0]?.id ?? "chk");
  const selected = accounts.find((a) => a.id === id) ?? accounts[0];
  const list = txs
    .filter((t) => t.accountId === selected?.id)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <div className="space-y-6">
      <DemoBanner />
      <div>
        <h1 className="font-display text-3xl font-medium tracking-tight">Accounts</h1>
        <p className="mt-1 text-sm text-muted">Three sleeves. One relationship.</p>
      </div>
      <div className="flex flex-col gap-2">
        {accounts.map((a) => (
          <button
            key={a.id}
            type="button"
            onClick={() => setId(a.id)}
            className={cn(
              "flex min-h-16 items-center justify-between rounded-lg px-4 text-left shadow-border",
              a.id === selected?.id ? "bg-elevated" : "bg-surface",
            )}
          >
            <div>
              <p className="text-sm text-fg">{a.name}</p>
              <p className="text-xs text-muted">
                {LABELS[a.type]} · ···{a.last4}
              </p>
            </div>
            <p className="text-sm tabular-nums">{formatMoney(a.balance)}</p>
          </button>
        ))}
      </div>
      {selected ? (
        <section>
          <h2 className="mb-2 font-display text-xl">{selected.name} activity</h2>
          <div className="rounded-lg bg-surface px-4 shadow-border">
            {list.length === 0 ? (
              <p className="py-8 text-sm text-muted">No activity on this sleeve.</p>
            ) : (
              list.map((tx) => <TxRow key={tx.id} tx={tx} />)
            )}
          </div>
        </section>
      ) : null}
    </div>
  );
}
