import { createFileRoute, Link } from "@tanstack/react-router";
import { DemoBanner } from "@/components/demo-banner";
import { SpendChart } from "@/components/spend-chart";
import { TxRow } from "@/components/tx-row";
import { Button } from "@/components/ui/button";
import { formatMoney } from "@/lib/bank/format";
import { totalBalance, useBank } from "@/lib/bank/store";

export const Route = createFileRoute("/vault/")({ component: Overview });

function Overview() {
  const accounts = useBank((s) => s.accounts);
  const txs = useBank((s) => s.transactions);
  const session = useBank((s) => s.session);
  const net = totalBalance(accounts);
  const recent = [...txs].sort((a, b) => +new Date(b.date) - +new Date(a.date)).slice(0, 6);

  return (
    <div className="space-y-6">
      <DemoBanner />
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-muted">Good evening, {session?.holder.split(" ")[0]}</p>
        <h1 className="mt-1 font-display text-3xl font-medium tracking-tight">Overview</h1>
        <p className="mt-3 text-xs text-muted">Total across sleeves</p>
        <p className="font-display text-4xl tabular-nums tracking-tight">{formatMoney(net)}</p>
        <Link to="/vault/move" className="mt-4 inline-flex">
          <Button>Move money</Button>
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {accounts.map((a) => (
          <Link
            key={a.id}
            to="/vault/accounts"
            className="rounded-lg bg-surface p-4 shadow-border transition-[box-shadow] duration-[var(--motion-quick)] hover:shadow-border-hover"
          >
            <p className="text-xs text-muted">
              {a.name} · {a.last4}
            </p>
            <p className="mt-2 text-xl tabular-nums">{formatMoney(a.balance)}</p>
          </Link>
        ))}
      </div>

      <section className="rounded-lg bg-surface p-4 shadow-border md:p-5">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="font-display text-xl">Fourteen-day spend</h2>
          <span className="text-xs text-muted">Debits only</span>
        </div>
        <SpendChart txs={txs} />
      </section>

      <section>
        <div className="mb-2 flex items-center justify-between">
          <h2 className="font-display text-xl">Recent activity</h2>
          <Link to="/vault/activity">
            <Button variant="ghost" size="sm">
              View all
            </Button>
          </Link>
        </div>
        <div className="rounded-lg bg-surface px-4 shadow-border">
          {recent.map((tx) => (
            <TxRow key={tx.id} tx={tx} />
          ))}
        </div>
      </section>
    </div>
  );
}
