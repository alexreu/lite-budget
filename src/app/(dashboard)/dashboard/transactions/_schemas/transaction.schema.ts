import { TransactionType } from "@/sdk/types/transaction";
import { z } from "zod";

export const transactionSchema = z.object({
  amount: z.number(),
  description: z.string().optional(),
  date: z.date(),
  type: z.enum([TransactionType.INCOME, TransactionType.EXPENSE]),
  categoryId: z.number().optional(),
  accountId: z.string(),
  userId: z.string(),
  tagId: z.string().optional(),
});

export type TransactionSchema = z.infer<typeof transactionSchema>;
