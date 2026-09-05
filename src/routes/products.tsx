import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/products")({ component: Products });

const ITEMS = [
  {
    title: "Everyday current",
    who: "Salary, rent, cards",
    points: ["Naira and dollar sleeves in the vault demo", "Debit card freeze", "Bill pay from the vault"],
  },
  {
    title: "Reserve savings",
    who: "Idle cash",
    points: ["Monthly interest credit", "Internal transfer in minutes", "No lock-in in the demo"],
  },
  {
    title: "Horizon book",
    who: "Longer money",
    points: ["Dividend lines", "Contribution from Everyday", "Held beside cash, not mixed"],
  },
  {
    title: "Business current",
    who: "Operators and desks",
    points: ["Vendor payouts", "Payroll memo transfers", "Separate last-four from personal"],
  },
  {
    title: "Cards",
    who: "Everyday + travel",
    points: ["Visa and Mastercard faces", "Freeze / unfreeze", "Linked to Everyday"],
  },
  {
    title: "Desk support",
    who: "Members",
    points: ["Phone and WhatsApp", "Four city desks", "Same contact on every page"],
  },
];

function Products() {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader current="/products" />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="font-display text-4xl md:text-5xl">Products</h1>
        <p className="mt-3 max-w-2xl text-muted">
          A retail and business shelf. Figures in the vault are demonstration balances, not deposits.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {ITEMS.map((item) => (
            <article key={item.title} className="rounded-lg bg-surface p-6 shadow-border">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">{item.who}</p>
              <h2 className="mt-2 font-display text-2xl">{item.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <Link to="/" hash="vault" className="mt-10 inline-flex">
          <Button size="lg">Open the vault</Button>
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
