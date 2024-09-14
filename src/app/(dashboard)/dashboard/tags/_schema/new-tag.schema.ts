import { z } from "zod";

export const newTagSchema = z.object({
  name: z.string().min(1),
  userId: z.string(),
  color: z.string().optional(),
});

export type NewTagSchema = z.infer<typeof newTagSchema>;
