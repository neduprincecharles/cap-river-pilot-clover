import { createFileRoute } from "@tanstack/react-router";
import { DemoBanner } from "@/components/demo-banner";
import { Button } from "@/components/ui/button";
import { useBank } from "@/lib/bank/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/vault/cards")({ component: Cards });

function Cards() {
  const cards = useBank((s) => s.cards);
  const accounts = useBank((s) => s.accounts);
  const toggle = useBank((s) => s.toggleFreeze);

  return (
    <div className="space-y-6">
      <DemoBanner />
      <div>
        <h1 className="font-display text-3xl font-medium tracking-tight">Cards</h1>
        <p className="mt-1 text-sm text-muted">Freeze instantly. Linked to Everyday.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((card) => {
          const account = accounts.find((a) => a.id === card.accountId);
          return (
            <article key={card.id} className="space-y-3">
              <div
                className={cn(
                  "relative aspect-[1.68/1] overflow-hidden rounded-xl p-5 text-accent-fg",
                  card.frozen ? "bg-elevated text-muted" : "bg-accent",
                )}
              >
                <p className="text-xs uppercase tracking-[0.16em]">{card.network}</p>
                <p className="mt-8 font-display text-2xl tracking-wide">···· ···· ···· {card.last4}</p>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider opacity-70">Holder</p>
                    <p className="text-sm">Alex Rivera</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-wider opacity-70">Exp</p>
                    <p className="text-sm tabular-nums">{card.expiry}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between px-1">
                <div>
                  <p className="text-sm text-fg">{card.name}</p>
                  <p className="text-xs text-muted">
                    {account?.name}
                    {card.frozen ? " · Frozen" : ""}
                  </p>
                </div>
                <Button variant={card.frozen ? "primary" : "secondary"} size="sm" onClick={() => toggle(card.id)}>
                  {card.frozen ? "Unfreeze" : "Freeze"}
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
