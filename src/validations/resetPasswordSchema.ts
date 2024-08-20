import { z } from "zod";
import { errorMessage } from "constants/auth";

export type TResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, errorMessage.PASSWORD.COMMON)
      .max(30, errorMessage.PASSWORD.COMMON)
      .refine(
        (value) => /^[\x00-\x7F]+$/.test(value), // Checking for ASCII characters
        {
          message: errorMessage.PASSWORD.COMMON,
        }
      )
      .refine(
        (value) => !/^\s|\s$/.test(value), // Check if there is no space at the beginning or end
        {
          message: errorMessage.PASSWORD.COMMON,
        }
      ),

    confirm_password: z.string(),
  })

  .superRefine(({ password, confirm_password }, ctx) => {
    if (password !== confirm_password) {
      ctx.addIssue({
        code: "custom",
        message: errorMessage.CONFIRM_PASSWORD,
        path: ["confirm_password"],
      });
    }
  });
