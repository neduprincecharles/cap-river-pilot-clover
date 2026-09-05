import { createFileRoute, Navigate } from "@tanstack/react-router";
import { VaultShell } from "@/components/vault-shell";
import { useBank } from "@/lib/bank/store";

export const Route = createFileRoute("/vault")({ component: VaultLayout });

function VaultLayout() {
  const hydrated = useBank((s) => s.hydrated);
  const session = useBank((s) => s.session);

  if (!hydrated) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-bg text-muted">
        Preparing the vault…
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/" />;
  }

  return <VaultShell />;
}
