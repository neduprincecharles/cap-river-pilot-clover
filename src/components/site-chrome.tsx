import { Link } from "@tanstack/react-router";
import { LedgerMark } from "@/components/mark";
import { BRAND, CONTACT } from "@/lib/site";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/rates", label: "Rates" },
  { to: "/about", label: "About" },
  { to: "/security", label: "Security" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ current }: { current: string }) {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <Link to="/" className="flex items-center gap-2 text-fg">
          <LedgerMark className="size-5" />
          <span className="font-display text-lg tracking-tight md:text-xl">{BRAND}</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn("min-h-11 inline-flex items-center hover:text-fg", current === l.to && "text-fg")}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="vault"
            className="inline-flex min-h-11 items-center rounded-md bg-accent px-3 text-sm font-medium text-accent-fg"
          >
            Open vault
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="flex items-center gap-2 font-display text-lg">
            <LedgerMark className="size-4" />
            {BRAND}
          </p>
          <p className="mt-2 text-sm text-muted">A demonstration bank for personal, business, and reserve ledgers.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Contact</p>
          <a className="mt-2 block text-sm text-fg hover:underline" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
          <a className="mt-1 block text-sm text-fg hover:underline" href={`tel:${CONTACT.phoneTel}`}>
            {CONTACT.phoneDisplay}
          </a>
          <a className="mt-1 block text-sm text-fg hover:underline" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp {CONTACT.whatsappDisplay}
          </a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Explore</p>
          <Link to="/products" className="mt-2 block text-sm text-muted hover:text-fg">
            Products
          </Link>
          <Link to="/rates" className="mt-1 block text-sm text-muted hover:text-fg">
            Rates
          </Link>
          <Link to="/security" className="mt-1 block text-sm text-muted hover:text-fg">
            Security
          </Link>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Notice</p>
          <p className="mt-2 text-sm text-subtle">
            Product demonstration only. Not a licensed bank. Not NDIC or FDIC insured. Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
