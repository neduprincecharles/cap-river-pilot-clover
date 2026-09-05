import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/rates")({ component: Rates });

const ROWS = [
  { product: "Everyday current", rate: "0.15% p.a.", note: "Credit monthly in the demo" },
  { product: "Reserve savings", rate: "4.10% p.a.", note: "Idle cash sleeve" },
  { product: "Horizon book", rate: "Market", note: "Dividends as posted lines" },
  { product: "Business current", rate: "0.10% p.a.", note: "Operating cash" },
  { product: "Internal transfer", rate: "Free", note: "Between your sleeves" },
  { product: "Card freeze", rate: "Free", note: "Instant in the vault" },
];

function Rates() {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader current="/rates" />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="font-display text-4xl md:text-5xl">Rates</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Illustrative only. Not an offer to take deposits. Figures reset with the demo ledger.
        </p>
        <div className="mt-10 overflow-x-auto rounded-lg bg-surface shadow-border">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-[0.14em] text-muted">
                <th className="px-4 py-3 font-medium">Product</th>
                <th className="px-4 py-3 font-medium">Rate</th>
                <th className="px-4 py-3 font-medium">Note</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.product} className="border-b border-border last:border-0">
                  <td className="px-4 py-3">{r.product}</td>
                  <td className="px-4 py-3 tabular-nums">{r.rate}</td>
                  <td className="px-4 py-3 text-muted">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
