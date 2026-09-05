import type { Account, BankCard, Transaction } from "./types";

function daysAgo(n: number, hour = 12) {
  const d = new Date();
  d.setHours(hour, n % 50, 0, 0);
  d.setDate(d.getDate() - n);
  return d.toISOString();
}

export const DEMO_PIN = "1847";
export const DEMO_HOLDER = "Alex Rivera";

export const seedAccounts: Account[] = [
  { id: "chk", name: "Everyday", type: "checking", last4: "4412", balance: 12480.22 },
  { id: "sav", name: "Reserve", type: "savings", last4: "9021", balance: 84210.0 },
  { id: "biz", name: "Business", type: "business", last4: "7740", balance: 31050.4 },
];

export const seedCards: BankCard[] = [
  {
    id: "c1",
    name: "Everyday Debit",
    last4: "4412",
    network: "Visa",
    frozen: false,
    accountId: "chk",
    expiry: "08/28",
  },
  {
    id: "c2",
    name: "Travel",
    last4: "8891",
    network: "Mastercard",
    frozen: false,
    accountId: "chk",
    expiry: "03/29",
  },
];

export const seedTransactions: Transaction[] = [
  { id: "t1", accountId: "chk", merchant: "Northfield Market", category: "Groceries", amount: -86.4, date: daysAgo(0, 18), status: "pending" },
  { id: "t2", accountId: "chk", merchant: "Atlas Transit", category: "Transit", amount: -3.5, date: daysAgo(0, 9), status: "posted" },
  { id: "t3", accountId: "chk", merchant: "Payroll · Quantum Labs", category: "Income", amount: 4820.0, date: daysAgo(1, 8), status: "posted" },
  { id: "t4", accountId: "chk", merchant: "Lumen Cafe", category: "Dining", amount: -14.2, date: daysAgo(1, 13), status: "posted" },
  { id: "t5", accountId: "sav", merchant: "Interest credit", category: "Income", amount: 42.18, date: daysAgo(2, 0), status: "posted" },
  { id: "t6", accountId: "chk", merchant: "Harbor Utilities", category: "Home", amount: -128.9, date: daysAgo(3, 10), status: "posted" },
  { id: "t7", accountId: "chk", merchant: "Kinfolk Books", category: "Shopping", amount: -32.0, date: daysAgo(4, 16), status: "posted" },
  { id: "t8", accountId: "chk", merchant: "Transfer to Reserve", category: "Transfer", amount: -1500.0, date: daysAgo(5, 11), status: "posted" },
  { id: "t9", accountId: "sav", merchant: "Transfer from Everyday", category: "Transfer", amount: 1500.0, date: daysAgo(5, 11), status: "posted" },
  { id: "t10", accountId: "chk", merchant: "Oak + Ember", category: "Dining", amount: -64.8, date: daysAgo(6, 19), status: "posted" },
  { id: "t11", accountId: "inv", merchant: "Dividend · Horizon ETF", category: "Income", amount: 118.4, date: daysAgo(7, 6), status: "posted" },
  { id: "t12", accountId: "chk", merchant: "City Health", category: "Health", amount: -45.0, date: daysAgo(8, 14), status: "posted" },
  { id: "t13", accountId: "chk", merchant: "Aether Fuel", category: "Transit", amount: -52.3, date: daysAgo(9, 17), status: "posted" },
  { id: "t14", accountId: "chk", merchant: "Sable Atelier", category: "Shopping", amount: -210.0, date: daysAgo(11, 15), status: "posted" },
  { id: "t15", accountId: "chk", merchant: "Westline Rent", category: "Home", amount: -2400.0, date: daysAgo(12, 9), status: "posted" },
  { id: "t16", accountId: "chk", merchant: "Payroll · Quantum Labs", category: "Income", amount: 4820.0, date: daysAgo(15, 8), status: "posted" },
  { id: "t17", accountId: "chk", merchant: "Nova Air", category: "Travel", amount: -386.2, date: daysAgo(18, 7), status: "posted" },
  { id: "t18", accountId: "inv", merchant: "Contribution", category: "Transfer", amount: 750.0, date: daysAgo(20, 10), status: "posted" },
  { id: "t19", accountId: "chk", merchant: "Contribution to Horizon", category: "Transfer", amount: -750.0, date: daysAgo(20, 10), status: "posted" },
  { id: "t20", accountId: "chk", merchant: "Field Day Market", category: "Groceries", amount: -71.15, date: daysAgo(21, 12), status: "posted" },
  { id: "t21", accountId: "biz", merchant: "Vendor · Atlas Print", category: "Business", amount: -640.0, date: daysAgo(2, 11), status: "posted" },
  { id: "t22", accountId: "biz", merchant: "Client receipt · Northfield", category: "Income", amount: 2800.0, date: daysAgo(4, 9), status: "posted" },
  { id: "t23", accountId: "biz", merchant: "Payroll out", category: "Business", amount: -1200.0, date: daysAgo(10, 8), status: "posted" },
];
