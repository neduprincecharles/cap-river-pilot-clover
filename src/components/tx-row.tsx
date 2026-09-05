import { formatDate, formatSigned } from "@/lib/bank/format";
import type { Transaction } from "@/lib/bank/types";
import { cn } from "@/lib/utils";

export function TxRow({ tx }: { tx: Transaction }) {
  const credit = tx.amount > 0;
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border py-3 last:border-b-0">
      <div className="min-w-0">
        <p className="truncate text-sm text-fg">{tx.merchant}</p>
        <p className="text-xs text-muted">
          {formatDate(tx.date)} · {tx.category}
          {tx.status === "pending" ? " · Pending" : ""}
        </p>
      </div>
      <p className={cn("shrink-0 text-sm tabular-nums", credit ? "text-credit" : "text-fg")}>
        {formatSigned(tx.amount)}
      </p>
    </div>
  );
}
