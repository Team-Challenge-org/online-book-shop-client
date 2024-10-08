import { z } from 'zod';
import { errorMessage, EXCLUDED_DOMAINS } from 'constants/auth';

export type TRegisterUserSchema = z.infer<typeof registerUserSchema>;

export const nameRegex = /^[А-Яа-яA-Za-ziIіІєЄ'\s-]+$/;
export const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const registerUserSchema = z
  .object({
    first_name: z
      .string()
      .regex(nameRegex, errorMessage.FIRST_NAME)
      .min(2, errorMessage.FIRST_NAME)
      .max(30, errorMessage.FIRST_NAME),

    last_name: z
      .string()
      .regex(nameRegex, errorMessage.LAST_NAME)
      .min(2, errorMessage.LAST_NAME)
      .max(50, errorMessage.LAST_NAME),

    phone_number: z
      .string()
      .refine((value) => value.replace(/\D+/g, '').length === 12, errorMessage.PHONE_NUMBER)
      .transform((value) => value.replace(/\D+/g, '')),

    email: z
      .string()
      .refine((value) => emailRegex.test(value), errorMessage.EMAIL)
      .refine((value) => !EXCLUDED_DOMAINS.some((domain) => value.endsWith(`@${domain}`)), {
        message: errorMessage.EMAIL,
      }),

    password: z
      .string()
      .min(8, errorMessage.PASSWORD.COMMON)
      .max(30, errorMessage.PASSWORD.COMMON)
      .refine(
        (value) => /^[\x00-\x7F]+$/.test(value), // Checking for ASCII characters
        {
          message: errorMessage.PASSWORD.COMMON,
        },
      )
      .refine(
        (value) => !/^\s|\s$/.test(value), // Check if there is no space at the beginning or end
        {
          message: errorMessage.PASSWORD.COMMON,
        },
      ),

    confirm_password: z.string(),
  })

  .superRefine(({ password, confirm_password }, ctx) => {
    if (password !== confirm_password) {
      ctx.addIssue({
        code: 'custom',
        message: errorMessage.CONFIRM_PASSWORD,
        path: ['confirm_password'],
      });
    }
  });
