import { createFileRoute } from "@tanstack/react-router";
import { DemoBanner } from "@/components/demo-banner";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/vault/help")({ component: Help });

function Help() {
  return (
    <div className="space-y-6">
      <DemoBanner />
      <div>
        <h1 className="font-display text-3xl font-medium tracking-tight">Desk</h1>
        <p className="mt-1 text-sm text-muted">Same numbers as the public site.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <a className="rounded-lg bg-surface p-4 shadow-border" href={`tel:${CONTACT.phoneTel}`}>
          <p className="text-xs text-muted">Phone</p>
          <p className="mt-1 text-sm">{CONTACT.phoneDisplay}</p>
        </a>
        <a className="rounded-lg bg-surface p-4 shadow-border" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
          <p className="text-xs text-muted">WhatsApp</p>
          <p className="mt-1 text-sm">{CONTACT.whatsappDisplay}</p>
        </a>
        <a className="rounded-lg bg-surface p-4 shadow-border" href={`mailto:${CONTACT.email}`}>
          <p className="text-xs text-muted">Email</p>
          <p className="mt-1 break-all text-sm">{CONTACT.email}</p>
        </a>
      </div>
    </div>
  );
}
