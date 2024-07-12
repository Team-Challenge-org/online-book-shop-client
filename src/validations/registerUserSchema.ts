import { z } from "zod";
import { errorMessage, EXCLUDED_DOMAINS } from "constants/auth";

export type TRegisterUserSchema = z.infer<typeof registerUserSchema>;

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const registerUserSchema = z
  .object({
    first_name: z
      .string()
      .regex(/^[А-Яа-яA-Za-z0-9\s-]+$/, errorMessage.FIRST_NAME)
      .min(2, errorMessage.FIRST_NAME)
      .max(30, errorMessage.FIRST_NAME),

    last_name: z
      .string()
      .regex(/^[А-Яа-яA-Za-z0-9\s-]+$/, errorMessage.LAST_NAME)
      .min(2, errorMessage.LAST_NAME)
      .max(50, errorMessage.LAST_NAME),

    phone_number: z
      .string()
      .refine(
        (value) => value.replace(/\D+/g, "").length === 12,
        errorMessage.PHONE_NUMBER
      )
      .transform((value) => value.replace(/\D+/g, "")),

    email: z
      .string()
      .refine((value) => emailRegex.test(value), errorMessage.EMAIL)
      .refine(
        (value) =>
          !EXCLUDED_DOMAINS.some((domain) => value.endsWith(`@${domain}`)),
        {
          message: errorMessage.EMAIL,
        }
      ),

    password: z
      .string()
      .trim()
      .min(8, errorMessage.PASSWORD.COMMON)
      .max(30, errorMessage.PASSWORD.COMMON)
      .refine((value) => /[a-zA-Z0-9~!$%^&*_\-=+}{'\?.-]/.test(value), {
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
