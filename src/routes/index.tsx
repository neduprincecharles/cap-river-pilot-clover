import { type FormEvent, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CreditCard,
  Landmark,
  Lock,
  PiggyBank,
  Smartphone,
  Wallet,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DEMO_PIN } from "@/lib/bank/seed";
import { useBank } from "@/lib/bank/store";
import { BRAND, CONTACT } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

const PRODUCTS = [
  { icon: Wallet, title: "Everyday current", body: "Salary in, bills out, card spend in one sleeve." },
  { icon: PiggyBank, title: "Reserve savings", body: "Interest posted monthly on idle cash." },
  { icon: Landmark, title: "Horizon book", body: "Long-horizon holdings beside your cash ledger." },
  { icon: Building2, title: "Business current", body: "Vendor payouts and payroll in a dedicated book." },
  { icon: CreditCard, title: "Debit and travel cards", body: "Freeze from the vault. Linked to Everyday." },
  { icon: Smartphone, title: "Instant transfers", body: "Move between sleeves the same minute." },
];

const STATS = [
  { k: "Desks", v: "4 cities" },
  { k: "Sleeves", v: "Personal + business" },
  { k: "Hours", v: CONTACT.hours },
  { k: "Channel", v: "WhatsApp + phone" },
];

function Home() {
  const navigate = useNavigate();
  const hydrated = useBank((s) => s.hydrated);
  const session = useBank((s) => s.session);
  const signIn = useBank((s) => s.signIn);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const code = String(new FormData(e.currentTarget).get("pin") ?? "");
    const result = signIn(code);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    void navigate({ to: "/vault" });
  }

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader current="/" />
      <main>
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-12 md:pt-20">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">Nigeria · demonstration bank</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            {BRAND}. Quiet capital at scale.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted md:text-lg">
            Personal, reserve, and business ledgers in one vault. Browse products, rates, desks, and support —
            then unlock the demo with a four-digit code.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#vault">
              <Button size="lg">
                Open the vault
                <ArrowRight className="size-4" />
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Talk to the desk
              </Button>
            </Link>
          </div>
        </section>

        <section className="border-y border-border">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.k} className="bg-bg px-5 py-6">
                <p className="text-xs uppercase tracking-[0.16em] text-muted">{s.k}</p>
                <p className="mt-2 font-display text-xl">{s.v}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl">A full product shelf</h2>
              <p className="mt-2 max-w-xl text-sm text-muted">Six desks under one name. Open any of them in the vault.</p>
            </div>
            <Link to="/products" className="hidden text-sm text-accent md:inline">
              All products
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <article key={p.title} className="rounded-lg bg-surface p-5 shadow-border">
                <p.icon className="size-5 text-accent" />
                <h3 className="mt-4 font-display text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
            <div>
              <Lock className="size-5 text-accent" />
              <h2 className="mt-4 font-display text-3xl">Custody with a visible lock</h2>
              <p className="mt-3 text-sm text-muted">
                Freeze cards, inspect pending spend, and lock the vault when you step away. Security notes live
                on their own page.
              </p>
              <Link to="/security" className="mt-6 inline-flex">
                <Button variant="secondary">Read security</Button>
              </Link>
            </div>
            <div>
              <h2 className="font-display text-3xl">Reach the desk</h2>
              <p className="mt-3 text-sm text-muted">
                Phone, WhatsApp, and mail go to Chinedu — same numbers on every page.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a className="hover:underline" href={`tel:${CONTACT.phoneTel}`}>
                    {CONTACT.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
                    WhatsApp {CONTACT.whatsappDisplay}
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href={`mailto:${CONTACT.email}`}>
                    {CONTACT.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="vault" className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-xl bg-surface p-6 shadow-border md:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Member access</p>
            <h2 className="mt-2 font-display text-3xl font-medium">Open the vault</h2>
            <p className="mt-2 max-w-lg text-sm text-muted">
              Demonstration code <span className="text-fg tabular-nums">{DEMO_PIN}</span>. Not a real institution.
            </p>
            {!hydrated ? (
              <p className="mt-8 text-sm text-muted">Preparing the vault…</p>
            ) : session ? (
              <div className="mt-8">
                <p className="text-sm text-fg">Signed in as {session.holder}.</p>
                <Link to="/vault" className="mt-4 inline-flex">
                  <Button size="lg">
                    Continue to overview
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 max-w-xs space-y-3">
                <label className="block text-xs font-medium text-muted" htmlFor="pin">
                  Access code
                </label>
                <Input
                  id="pin"
                  name="pin"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  placeholder="Four digits"
                  defaultValue=""
                  maxLength={4}
                  onChange={() => setError("")}
                  aria-invalid={Boolean(error)}
                />
                {error ? <p className="text-sm text-debit">{error}</p> : null}
                <Button type="submit" size="lg" className="w-full">
                  Unlock
                </Button>
              </form>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
