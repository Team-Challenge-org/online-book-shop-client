import { errorMessage, EXCLUDED_DOMAINS } from 'constants/auth';
import { z } from 'zod';
import { emailRegex } from './registerUserSchema';

export type TLoginUserSchema = z.infer<typeof loginUserSchema>;

export const loginUserSchema = z.object({
  email_or_number: z
    .string()
    .min(5, errorMessage.PHONE_OR_EMAIL)
    .refine((value) => value.includes('@'), errorMessage.PHONE_OR_EMAIL)
    .refine((value) => emailRegex.test(value), errorMessage.PHONE_OR_EMAIL)
    .refine((value) => !EXCLUDED_DOMAINS.some((domain) => value.endsWith(`@${domain}`)), {
      message: errorMessage.PHONE_OR_EMAIL,
    })
    .or(
      z
        .string()
        .max(12, errorMessage.PHONE_OR_EMAIL)
        .refine((value) => value.replace(/\D+/g, '').length === 12, errorMessage.PHONE_OR_EMAIL)
        .transform((value) => value.replace(/\D+/g, '')),
    )
    .or(
      z
        .string()
        .min(13, errorMessage.PHONE_OR_EMAIL)
        .max(13, errorMessage.PHONE_OR_EMAIL)
        .refine((value) => value[0] === '+', errorMessage.PHONE_OR_EMAIL)
        .transform((value) => value.replace(/\D+/g, '')),
    ),

  login_password: z
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
});
