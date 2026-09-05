import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { BRAND, BRANCHES } from "@/lib/site";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader current="/about" />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="font-display text-4xl md:text-5xl">About {BRAND}</h1>
        <p className="mt-4 max-w-2xl text-muted">
          {BRAND} is a demonstration of a full retail site: products, rates, desks, support, and a working
          vault. It is not a licensed deposit-taker.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="rounded-lg bg-surface p-6 shadow-border">
            <h2 className="font-display text-2xl">What you can do</h2>
            <p className="mt-3 text-sm text-muted">
              Walk the public site, unlock the vault with 1847, move money between sleeves, freeze cards, and
              raise a desk ticket from Support or Contact.
            </p>
          </article>
          <article className="rounded-lg bg-surface p-6 shadow-border">
            <h2 className="font-display text-2xl">What we are not</h2>
            <p className="mt-3 text-sm text-muted">
              Not NDIC insured, not CBN licensed, not a place to send real funds. Names and balances are
              theatre for the product.
            </p>
          </article>
        </div>
        <h2 className="mt-12 font-display text-3xl">Desks</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {BRANCHES.map((b) => (
            <article key={b.city} className="rounded-lg bg-surface p-4 shadow-border">
              <p className="font-display text-xl">{b.city}</p>
              <p className="mt-1 text-sm text-muted">{b.line}</p>
              <p className="mt-2 text-xs text-subtle">{b.hours} WAT</p>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
