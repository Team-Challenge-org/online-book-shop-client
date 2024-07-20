import { z } from "zod";
import { errorMessage } from "constants/auth";

export type TResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .trim()
      .min(8, errorMessage.PASSWORD.COMMON)
      .max(30, errorMessage.PASSWORD.COMMON)
      .refine((value) => /[a-zA-Z0-9~!$%^&*_\-=+}{'?.-]/.test(value), {
        message: errorMessage.PASSWORD.COMMON,
      }),
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
