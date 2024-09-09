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
    .max(30, errorMessage.FIRST_NAME)
    .default(''),

  last_name: z
    .string()
    .regex(nameRegex, errorMessage.LAST_NAME)
    .min(2, errorMessage.LAST_NAME)
    .max(50, errorMessage.LAST_NAME)
    .default(''),

  phone_number: z
    .string()
    .refine((value) => value.replace(/\D+/g, '').length === 12, errorMessage.PHONE_NUMBER)
    .transform((value) => value.replace(/\D+/g, ''))
    .default(''),

  email: z
    .string()
    .refine((value) => emailRegex.test(value), errorMessage.EMAIL)
    .refine((value) => !EXCLUDED_DOMAINS.some((domain) => value.endsWith(`@${domain}`)), {
      message: errorMessage.EMAIL,
    })
    .default(''),

  city: z
    .string()
    .regex(nameRegex, errorDeliveryMessage.CITY)
    .min(2, errorDeliveryMessage.CITY)
    .max(30, errorDeliveryMessage.CITY)
    .default(''),

  delivery_type: z.string().default('1'),

  payment: z.string().default('online'),
  call: z.boolean().default(false),
  another_recipient: z.boolean().default(false),
  comment: z.string().max(500, errorMessage.COMMENT),
});

enum typeDeliveryEnum {
  NPBranch = '1',
  UPBranch = '2',
  MeestBranch = '3',
  NPCourier = '4',
}

const deliveryNpBranchSchema = z.object({
  delivery_type: z.literal(typeDeliveryEnum.NPBranch),
  department: z.string().min(2, errorDeliveryMessage.DEPARTMENT),
});

const deliveryUPBranchSchema = z.object({
  delivery_type: z.literal(typeDeliveryEnum.UPBranch),
  department: z.string().min(2, errorDeliveryMessage.DEPARTMENT),
});

const deliveryMeestBranchSchema = z.object({
  delivery_type: z.literal(typeDeliveryEnum.MeestBranch),
  department: z.string().min(2, errorDeliveryMessage.DEPARTMENT),
});

const deliveryNPCourierSchema = z.object({
  delivery_type: z.literal(typeDeliveryEnum.NPCourier),
  np_street: z.string().min(2, errorDeliveryMessage.STREET),
  np_house: z.string().min(2, errorDeliveryMessage.HOUSE),
  np_apart: z.string(),
});

const schemaCondDeliveryType = z.discriminatedUnion('delivery_type', [
  deliveryNpBranchSchema,
  deliveryUPBranchSchema,
  deliveryMeestBranchSchema,
  deliveryNPCourierSchema,
]);

const defaultDeliveryTypeSchema = z.object({
  delivery_type: z.nativeEnum(typeDeliveryEnum).default(typeDeliveryEnum.NPBranch),
});

const validationDeliveryTypeSchema = z.intersection(
  schemaCondDeliveryType,
  defaultDeliveryTypeSchema,
);

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

const schemaCondRecipient = z.discriminatedUnion('another_recipient', [
  anotherRecipientSchema,
  notAnotherRecipientSchema,
]);

const orderFullContactsSchema = z.intersection(schemaCondRecipient, orderContactsSchema);

export const orderSchema = z.intersection(validationDeliveryTypeSchema, orderFullContactsSchema);
