import { errorDeliveryMessage } from 'constants/delivery';
import { z } from 'zod';
import { emailRegex, nameRegex } from './registerUserSchema';
import { errorMessage, EXCLUDED_DOMAINS } from 'constants/auth';

export type TOrderContactsSchema = z.infer<typeof orderContactsSchema>;

export const ukranianRegex = /[А-ЩЬЮЯҐЄІЇа-щьюяґєії]+/g;

export const orderContactsSchema = z.object({
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

  city: z
    .string()
    .min(2, errorDeliveryMessage.CITY)
    .max(30, errorDeliveryMessage.CITY)
    .refine((value) => ukranianRegex.test(value), errorDeliveryMessage.CITY),

  department: z
    .string()
    .min(2, errorDeliveryMessage.DEPARTMENT)
    .max(50, errorDeliveryMessage.DEPARTMENT),

  payment: z.string(),
  call: z.boolean(),
});
