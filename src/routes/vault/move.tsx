import { type FormEvent, type ReactNode, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { DemoBanner } from "@/components/demo-banner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatMoney } from "@/lib/bank/format";
import { useBank } from "@/lib/bank/store";

export const Route = createFileRoute("/vault/move")({ component: MoveMoney });

function MoveMoney() {
  const accounts = useBank((s) => s.accounts);
  const transfer = useBank((s) => s.transfer);
  const navigate = useNavigate();
  const [fromId, setFromId] = useState(accounts[0]?.id ?? "chk");
  const [toId, setToId] = useState(accounts[1]?.id ?? "sav");
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const amt = Number(fd.get("amount"));
    const memo = String(fd.get("memo") ?? "");
    const result = transfer(fromId, toId, amt, memo);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    toast.success("Transfer posted");
    void navigate({ to: "/vault/activity" });
  }

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <DemoBanner />
      <div>
        <h1 className="font-display text-3xl font-medium tracking-tight">Move money</h1>
        <p className="mt-1 text-sm text-muted">Internal only. Posts to both sleeves at once.</p>
      </div>
      <form onSubmit={onSubmit} className="space-y-4 rounded-lg bg-surface p-5 shadow-border">
        <Field label="From" htmlFor="from">
          <Select id="from" value={fromId} onChange={setFromId} />
        </Field>
        <Field label="To" htmlFor="to">
          <Select id="to" value={toId} onChange={setToId} />
        </Field>
        <Field label="Amount" htmlFor="amount">
          <Input
            id="amount"
            name="amount"
            inputMode="decimal"
            placeholder="0.00"
            onChange={() => setError("")}
          />
        </Field>
        <Field label="Memo (optional)" htmlFor="memo">
          <Input id="memo" name="memo" placeholder="What is this for?" />
        </Field>
        {error ? <p className="text-sm text-debit">{error}</p> : null}
        <Button type="submit" size="lg" className="w-full">
          Post transfer
        </Button>
      </form>
    </div>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="text-xs font-medium text-muted">
        {label}
      </label>
      {children}
    </div>
  );
}

function Select({ id, value, onChange }: { id: string; value: string; onChange: (v: string) => void }) {
  const accounts = useBank((s) => s.accounts);
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-11 w-full rounded-md bg-elevated px-3 text-sm text-fg shadow-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {accounts.map((a) => (
        <option key={a.id} value={a.id}>
          {a.name} · {formatMoney(a.balance)}
        </option>
      ))}
    </select>
  );
}
