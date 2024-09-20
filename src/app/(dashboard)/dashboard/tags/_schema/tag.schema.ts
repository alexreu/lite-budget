import { z } from "zod";

export const createTagSchema = z.object({
  name: z.string().min(1),
  userId: z.string(),
  color: z.string().optional(),
});

export const deleteTagSchema = z.object({
  id: z.string().uuid("Invalid tag ID"),
});

export const tagResourceSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  color: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type CreateTagSchema = z.infer<typeof createTagSchema>;
export type TagResourceSchema = z.infer<typeof tagResourceSchema>;
export type DeleteTagSchema = z.infer<typeof deleteTagSchema>;
