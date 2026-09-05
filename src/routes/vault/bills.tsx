import { type FormEvent, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { DemoBanner } from "@/components/demo-banner";
import { Button } from "@/components/ui/button";
import { formatMoney } from "@/lib/bank/format";
import { useBank } from "@/lib/bank/store";

export const Route = createFileRoute("/vault/bills")({ component: Bills });

const BILLS = [
  { id: "b1", name: "Ikeja Electric", due: "12 Sep", naira: 18400 },
  { id: "b2", name: "Spectranet", due: "18 Sep", naira: 22500 },
  { id: "b3", name: "DSTV Compact", due: "20 Sep", naira: 15700 },
];

function Bills() {
  const accounts = useBank((s) => s.accounts);
  const payBill = useBank((s) => s.payBill);
  const [fromId, setFromId] = useState("chk");
  const [paid, setPaid] = useState<string[]>([]);

  function pay(e: FormEvent, id: string, name: string, naira: number) {
    e.preventDefault();
    const usd = Math.round((naira / 1500) * 100) / 100;
    const result = payBill(fromId, name, usd);
    if (!result.ok) {
      toast.error(result.error);
      return;
    }
    setPaid((p) => [...p, id]);
    toast.success(`${name} marked paid in the demo`);
  }

  return (
    <div className="space-y-6">
      <DemoBanner />
      <div>
        <h1 className="font-display text-3xl font-medium tracking-tight">Bills</h1>
        <p className="mt-1 text-sm text-muted">Naira labels. The vault ledger posts a USD equivalent debit.</p>
      </div>
      <label className="block text-xs text-muted" htmlFor="from-bill">
        Pay from
      </label>
      <select
        id="from-bill"
        value={fromId}
        onChange={(e) => setFromId(e.target.value)}
        className="h-11 w-full max-w-md rounded-md bg-elevated px-3 text-sm text-fg shadow-border"
      >
        {accounts.map((a) => (
          <option key={a.id} value={a.id}>
            {a.name} · {formatMoney(a.balance)}
          </option>
        ))}
      </select>
      <div className="space-y-3">
        {BILLS.map((b) => (
          <form
            key={b.id}
            onSubmit={(e) => pay(e, b.id, b.name, b.naira)}
            className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-surface p-4 shadow-border"
          >
            <div>
              <p className="text-sm text-fg">{b.name}</p>
              <p className="text-xs text-muted">Due {b.due} · ₦{b.naira.toLocaleString("en-NG")}</p>
            </div>
            <Button type="submit" size="sm" disabled={paid.includes(b.id)}>
              {paid.includes(b.id) ? "Paid" : "Pay in demo"}
            </Button>
          </form>
        ))}
      </div>
    </div>
  );
}
