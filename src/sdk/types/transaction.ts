export enum TransactionType {
  INCOME = "income",
  EXPENSE = "expense",
}

export type Transaction = {
  id: string;
  amount: number;
  description: string;
  date: Date;
  type: TransactionType;
  categoryId: number;
  accountId: string;
  userId: string;
};
