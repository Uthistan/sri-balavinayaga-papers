import { z } from "zod";

/** Shared by the client form and the server action so validation can't drift. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  company: z.string().trim().min(2, "Please enter your company name."),
  email: z.email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .max(20, "That phone number looks too long.")
    .optional(),
  requirement: z
    .string()
    .trim()
    .min(10, "Tell us the grade, grammage and quantity you need.")
    .max(2000, "Please keep this under 2000 characters."),
});

export type ContactInput = z.infer<typeof contactSchema>;
