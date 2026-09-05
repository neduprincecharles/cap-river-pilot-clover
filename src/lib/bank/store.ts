import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DEMO_HOLDER, DEMO_PIN, seedAccounts, seedCards, seedTransactions } from "./seed";
import type { Account, BankCard, Session, Transaction } from "./types";

type BankState = {
  hydrated: boolean;
  session: Session | null;
  accounts: Account[];
  transactions: Transaction[];
  cards: BankCard[];
  markHydrated: () => void;
  signIn: (pin: string) => { ok: true } | { ok: false; error: string };
  signOut: () => void;
  resetDemo: () => void;
  transfer: (fromId: string, toId: string, amount: number, memo: string) => { ok: true } | { ok: false; error: string };
  payBill: (fromId: string, merchant: string, amount: number) => { ok: true } | { ok: false; error: string };
  toggleFreeze: (cardId: string) => void;
};

function cloneSeed() {
  return {
    accounts: seedAccounts.map((a) => ({ ...a })),
    transactions: seedTransactions.map((t) => ({ ...t })),
    cards: seedCards.map((c) => ({ ...c })),
  };
}

export const useBank = create<BankState>()(
  persist(
    (set, get) => ({
      hydrated: false,
      session: null,
      ...cloneSeed(),
      markHydrated: () => set({ hydrated: true }),
      signIn: (pin) => {
        if (pin.replace(/\D/g, "") !== DEMO_PIN) {
          return { ok: false, error: "That code is not recognized." };
        }
        set({
          session: { holder: DEMO_HOLDER, memberSince: "2019" },
        });
        return { ok: true };
      },
      signOut: () => set({ session: null }),
      resetDemo: () => set({ ...cloneSeed() }),
      transfer: (fromId, toId, amount, memo) => {
        if (fromId === toId) return { ok: false, error: "Choose two different accounts." };
        if (!Number.isFinite(amount) || amount <= 0) return { ok: false, error: "Enter an amount greater than zero." };
        const cents = Math.round(amount * 100) / 100;
        const accounts = get().accounts.map((a) => ({ ...a }));
        const from = accounts.find((a) => a.id === fromId);
        const to = accounts.find((a) => a.id === toId);
        if (!from || !to) return { ok: false, error: "Account not found." };
        if (from.balance < cents) return { ok: false, error: "Insufficient funds." };
        from.balance = Math.round((from.balance - cents) * 100) / 100;
        to.balance = Math.round((to.balance + cents) * 100) / 100;
        const now = new Date().toISOString();
        const note = memo.trim();
        const debit: Transaction = {
          id: `tx-${crypto.randomUUID()}`,
          accountId: fromId,
          merchant: note ? `${note} · to ${to.name}` : `Transfer to ${to.name}`,
          category: "Transfer",
          amount: -cents,
          date: now,
          status: "posted",
        };
        const credit: Transaction = {
          id: `tx-${crypto.randomUUID()}`,
          accountId: toId,
          merchant: note ? `${note} · from ${from.name}` : `Transfer from ${from.name}`,
          category: "Transfer",
          amount: cents,
          date: now,
          status: "posted",
        };
        set({
          accounts,
          transactions: [debit, credit, ...get().transactions],
        });
        return { ok: true };
      },
      payBill: (fromId, merchant, amount) => {
        if (!Number.isFinite(amount) || amount <= 0) return { ok: false, error: "Enter an amount greater than zero." };
        const cents = Math.round(amount * 100) / 100;
        const accounts = get().accounts.map((a) => ({ ...a }));
        const from = accounts.find((a) => a.id === fromId);
        if (!from) return { ok: false, error: "Account not found." };
        if (from.balance < cents) return { ok: false, error: "Insufficient funds." };
        from.balance = Math.round((from.balance - cents) * 100) / 100;
        const debit: Transaction = {
          id: `tx-${crypto.randomUUID()}`,
          accountId: fromId,
          merchant,
          category: "Home",
          amount: -cents,
          date: new Date().toISOString(),
          status: "posted",
        };
        set({ accounts, transactions: [debit, ...get().transactions] });
        return { ok: true };
      },
      toggleFreeze: (cardId) =>
        set({
          cards: get().cards.map((c) => (c.id === cardId ? { ...c, frozen: !c.frozen } : c)),
        }),
    }),
    {
      name: "quantum-ledger-vault",
      skipHydration: true,
      partialize: (s) => ({
        session: s.session,
        accounts: s.accounts,
        transactions: s.transactions,
        cards: s.cards,
      }),
      onRehydrateStorage: () => () => {
        useBank.getState().markHydrated();
      },
    },
  ),
);

export function totalBalance(accounts: Account[]) {
  return accounts.reduce((sum, a) => sum + a.balance, 0);
}
