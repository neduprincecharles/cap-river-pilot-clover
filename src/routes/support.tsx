import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/support")({ component: Support });

const FAQS = [
  { q: "How do I open the vault?", a: "Use access code 1847 on the home page." },
  { q: "Can I send real money?", a: "No. Transfers stay between demo sleeves." },
  { q: "Who do I call?", a: `${CONTACT.phoneDisplay} or WhatsApp ${CONTACT.whatsappDisplay}.` },
  { q: "Where are you?", a: "Desks in Lagos, Abuja, Port Harcourt, and Enugu — demonstration addresses." },
  { q: "I froze a card by mistake.", a: "Open Cards in the vault and unfreeze." },
  { q: "Balances look wrong.", a: "Lock the vault and unlock again, or keep using the stored demo ledger." },
];

function Support() {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader current="/support" />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="font-display text-4xl md:text-5xl">Support</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Desk hours {CONTACT.hours}. Same human on phone, WhatsApp, and mail.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <a className="rounded-md bg-accent px-4 py-3 font-medium text-accent-fg" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp the desk
          </a>
          <a className="rounded-md bg-elevated px-4 py-3 shadow-border" href={`tel:${CONTACT.phoneTel}`}>
            Call {CONTACT.phoneDisplay}
          </a>
          <Link to="/contact" className="rounded-md bg-elevated px-4 py-3 shadow-border">
            Contact form
          </Link>
        </div>
        <div className="mt-12 space-y-4">
          {FAQS.map((f) => (
            <article key={f.q} className="border-b border-border pb-4">
              <h2 className="font-display text-xl">{f.q}</h2>
              <p className="mt-2 text-sm text-muted">{f.a}</p>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
