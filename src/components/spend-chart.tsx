import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { Transaction } from "@/lib/bank/types";
import { formatMoney } from "@/lib/bank/format";

function lastDays(n: number, txs: Transaction[]) {
  const days: { key: string; label: string; spent: number }[] = [];
  const now = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    days.push({
      key,
      label: d.toLocaleDateString("en-US", { weekday: "narrow" }),
      spent: 0,
    });
  }
  const map = new Map(days.map((d) => [d.key, d]));
  for (const tx of txs) {
    if (tx.amount >= 0) continue;
    const key = tx.date.slice(0, 10);
    const bucket = map.get(key);
    if (bucket) bucket.spent += Math.abs(tx.amount);
  }
  return days;
}

export function SpendChart({ txs }: { txs: Transaction[] }) {
  const data = lastDays(14, txs);
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 0, left: -24, bottom: 0 }}>
          <XAxis dataKey="label" tick={{ fill: "#9a958c", fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#6e6a64", fontSize: 10 }} axisLine={false} tickLine={false} width={48} />
          <Tooltip
            cursor={{ fill: "rgba(236,232,225,0.04)" }}
            contentStyle={{
              background: "#1c2228",
              border: "1px solid #2a3036",
              borderRadius: 8,
              color: "#ece8e1",
              fontSize: 12,
            }}
            formatter={(value) => [formatMoney(Number(value ?? 0)), "Spent"]}
          />
          <Bar dataKey="spent" fill="#c5cdc8" radius={[4, 4, 0, 0]} maxBarSize={18} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
