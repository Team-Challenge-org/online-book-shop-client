import { errorCommentMessage, errorDeliveryMessage } from 'constants/order';
import { z } from 'zod';
import { nameRegex } from './registerUserSchema';
import { errorMessage } from 'constants/auth';

export type TOrderSchema = z.infer<typeof orderSchema>;

export const orderSchema = z.object({
  city: z
    .string()
    .min(2, errorDeliveryMessage.CITY)
    .max(30, errorDeliveryMessage.CITY)
    .refine((value) => value.replace(/[А-ЯЄI][а-яєi]+/g, ''), errorDeliveryMessage.CITY),

  delivery_type: z
    .string()
    .min(2, errorDeliveryMessage.DELIVERY_TYPE)
    .max(50, errorDeliveryMessage.DELIVERY_TYPE),

  department: z
    .string()
    .min(2, errorDeliveryMessage.DEPARTMENT)
    .max(50, errorDeliveryMessage.DEPARTMENT),

  payment: z.string(),
  call: z.boolean(),
  comment: z.string().max(500, errorCommentMessage.COMMENT),

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
