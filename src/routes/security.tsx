import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/security")({ component: Security });

const ITEMS = [
  { t: "Vault lock", d: "Sign out from any screen. The next visitor needs the access code." },
  { t: "Card freeze", d: "Travel and Everyday cards freeze independently." },
  { t: "Matching books", d: "Every internal transfer writes a debit and a credit." },
  { t: "Local ledger", d: "Demo data stays in this browser. It is not a shared bank database." },
  { t: "No live rails", d: "No NIP, no card network, no real settlement." },
  { t: "Plain language", d: "Every page repeats that this is a demonstration." },
];

function Security() {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader current="/security" />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="font-display text-4xl md:text-5xl">Security</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Controls you can see. This is product theatre, not a regulated control framework.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((i) => (
            <article key={i.t} className="rounded-lg bg-surface p-5 shadow-border">
              <h2 className="font-display text-xl">{i.t}</h2>
              <p className="mt-2 text-sm text-muted">{i.d}</p>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
