import { errorDeliveryMessage } from 'constants/delivery';
import { z } from 'zod';
import { emailRegex, nameRegex } from './registerUserSchema';
import { errorMessage, EXCLUDED_DOMAINS } from 'constants/auth';

export type TOrderContactsSchema = z.infer<typeof orderSchema>;

const orderContactsSchema = z.object({
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
    .regex(nameRegex, errorDeliveryMessage.CITY)
    .min(2, errorDeliveryMessage.CITY)
    .max(30, errorDeliveryMessage.CITY),

  delivery_type: z.string(),

  department: z.string().min(2, errorDeliveryMessage.DEPARTMENT),

  payment: z.string(),
  call: z.boolean(),
  another_recipient: z.boolean(),
});

const anotherRecipientSchema = z.object({
  another_recipient: z.literal(true),
  recipient_first_name: z
    .string()
    .regex(nameRegex, errorMessage.FIRST_NAME)
    .min(2, errorMessage.FIRST_NAME)
    .max(30, errorMessage.FIRST_NAME),
  recipient_last_name: z
    .string()
    .regex(nameRegex, errorMessage.LAST_NAME)
    .min(2, errorMessage.LAST_NAME)
    .max(50, errorMessage.LAST_NAME),
  recipient_phone_number: z
    .string()
    .refine((value) => value.replace(/\D+/g, '').length === 12, errorMessage.PHONE_NUMBER)
    .transform((value) => value.replace(/\D+/g, '')),
});

const notAnotherRecipientSchema = z.object({
  another_recipient: z.literal(false),
});

const schemaCond = z.discriminatedUnion('another_recipient', [
  anotherRecipientSchema,
  notAnotherRecipientSchema,
]);

export const orderSchema = z.intersection(schemaCond, orderContactsSchema);
