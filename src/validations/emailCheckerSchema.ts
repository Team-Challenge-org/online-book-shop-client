import { z } from "zod";
import { errorMessage, EXCLUDED_DOMAINS } from "constants/auth";

export type TEmailCheckerSchema = z.infer<typeof emailCheckerSchema>;

export const emailCheckerSchema = z.object({
  email: z
    .string()
    .email(errorMessage.EMAIL)
    .refine(
      (value) =>
        !EXCLUDED_DOMAINS.some((domain) => value.endsWith(`@${domain}`)),
      {
        message: errorMessage.EMAIL,
      }
    ),
});
