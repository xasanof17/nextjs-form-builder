import { z } from "zod";

export const formScheme = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
});

export type FormSchemeType = z.infer<typeof formScheme>;
