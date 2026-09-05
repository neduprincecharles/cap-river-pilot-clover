export type AccountType = "checking" | "savings" | "invest" | "business";

export type Account = {
  id: string;
  name: string;
  type: AccountType;
  last4: string;
  balance: number;
};

export type TxStatus = "posted" | "pending";

export type Transaction = {
  id: string;
  accountId: string;
  merchant: string;
  category: string;
  amount: number;
  date: string;
  status: TxStatus;
};

export type BankCard = {
  id: string;
  name: string;
  last4: string;
  network: "Visa" | "Mastercard";
  frozen: boolean;
  accountId: string;
  expiry: string;
};

export type Session = {
  holder: string;
  memberSince: string;
};
