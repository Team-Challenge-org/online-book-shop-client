import { z } from 'zod';
import { emailRegex, nameRegex } from './registerUserSchema';
import { errorMessage, EXCLUDED_DOMAINS } from 'constants/auth';

export type TProfileSchema = TLastNameSchema | TFirstNameSchema | TPhoneNumberSchema | TEmailSchema;

type TFirstNameSchema = z.infer<typeof firstNameSchema>;
export type TLastNameSchema = z.infer<typeof lastNameSchema>;
type TPhoneNumberSchema = z.infer<typeof phoneNumberSchema>;
type TEmailSchema = z.infer<typeof emailSchema>;

export const firstNameSchema = z.object({
  first_name: z
    .string()
    .regex(nameRegex, errorMessage.FIRST_NAME)
    .min(2, errorMessage.FIRST_NAME)
    .max(30, errorMessage.FIRST_NAME),
});

export const lastNameSchema = z.object({
  last_name: z
    .string()
    .regex(nameRegex, errorMessage.LAST_NAME)
    .min(2, errorMessage.LAST_NAME)
    .max(50, errorMessage.LAST_NAME),
});

export const phoneNumberSchema = z.object({
  phone_number: z
    .string()
    .refine((value) => value.replace(/\D+/g, '').length === 12, errorMessage.PHONE_NUMBER)
    .transform((value) => value.replace(/\D+/g, '')),
});

export const emailSchema = z.object({
  email: z
    .string()
    .refine((value) => emailRegex.test(value), errorMessage.EMAIL)
    .refine((value) => !EXCLUDED_DOMAINS.some((domain) => value.endsWith(`@${domain}`)), {
      message: errorMessage.EMAIL,
    }),
});
