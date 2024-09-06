import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z
    .string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

export type SignInSchema = z.infer<typeof signInSchema>;
