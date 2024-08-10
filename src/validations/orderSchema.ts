import { errorDeliveryMessage } from 'constants/delivery';
import { z } from 'zod';
import { emailRegex, nameRegex } from './registerUserSchema';
import { errorMessage, EXCLUDED_DOMAINS } from 'constants/auth';

export type TOrderSchema = z.infer<typeof orderSchema>;

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

  payment: z.string(),
  call: z.boolean(),
  another_recipient: z.boolean(),
});

const typeDeliveryEnum = z.enum(['1', '2', '3', '4']);

const deliveryNpBranchSchema = z.object({
  delivery_type: z.literal(typeDeliveryEnum.enum[1]),
  department: z.string().min(2, errorDeliveryMessage.DEPARTMENT),
});

const deliveryUPBranchSchema = z.object({
  delivery_type: z.literal(typeDeliveryEnum.enum[2]),
  department: z.string().min(2, errorDeliveryMessage.DEPARTMENT),
});

const deliveryMeestBranchSchema = z.object({
  delivery_type: z.literal(typeDeliveryEnum.enum[3]),
  department: z.string().min(2, errorDeliveryMessage.DEPARTMENT),
});

const deliveryNPCourierSchema = z.object({
  delivery_type: z.literal(typeDeliveryEnum.enum[4]),
  np_street: z.string().min(2, errorDeliveryMessage.STREET),
  np_house: z.string().min(2, errorDeliveryMessage.HOUSE),
  np_apart: z.string().min(2, errorDeliveryMessage.APART),
});

const deliveryType = z.discriminatedUnion('delivery_type', [
  deliveryNpBranchSchema,
  deliveryUPBranchSchema,
  deliveryMeestBranchSchema,
  deliveryNPCourierSchema,
]);

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

export const orderSchema = z.intersection(schemaCond, orderContactsSchema, deliveryType);
