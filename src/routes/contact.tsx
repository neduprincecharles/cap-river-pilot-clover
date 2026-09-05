import { type FormEvent, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BRANCHES, CONTACT } from "@/lib/site";

export const Route = createFileRoute("/contact")({ component: Contact });

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    toast.success("Message stored in this demo. Use WhatsApp or phone for a real reply.");
  }

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader current="/contact" />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="font-display text-4xl md:text-5xl">Contact</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Chinedu Chijioke — phone, WhatsApp, and mail. The form does not send to a real ticket queue.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <a className="block rounded-lg bg-surface p-5 shadow-border" href={`tel:${CONTACT.phoneTel}`}>
              <p className="text-xs uppercase tracking-[0.16em] text-muted">Phone</p>
              <p className="mt-1 font-display text-2xl">{CONTACT.phoneDisplay}</p>
            </a>
            <a className="block rounded-lg bg-surface p-5 shadow-border" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">WhatsApp</p>
              <p className="mt-1 font-display text-2xl">{CONTACT.whatsappDisplay}</p>
            </a>
            <a className="block rounded-lg bg-surface p-5 shadow-border" href={`mailto:${CONTACT.email}`}>
              <p className="text-xs uppercase tracking-[0.16em] text-muted">Email</p>
              <p className="mt-1 font-display text-xl break-all">{CONTACT.email}</p>
            </a>
            <p className="text-sm text-muted">
              {CONTACT.city} · {CONTACT.hours}
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-4 rounded-lg bg-surface p-6 shadow-border">
            <label className="block text-xs text-muted" htmlFor="name">
              Name
            </label>
            <Input id="name" name="name" required />
            <label className="block text-xs text-muted" htmlFor="mail">
              Email
            </label>
            <Input id="mail" name="mail" type="email" required />
            <label className="block text-xs text-muted" htmlFor="msg">
              Message
            </label>
            <textarea
              id="msg"
              name="msg"
              required
              rows={5}
              className="w-full rounded-md bg-elevated px-3 py-2 text-sm text-fg shadow-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            />
            <Button type="submit" size="lg" className="w-full" disabled={sent}>
              {sent ? "Recorded in demo" : "Send message"}
            </Button>
          </form>
        </div>

        <h2 className="mt-14 font-display text-3xl">Desks</h2>
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
