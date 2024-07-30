import { errorDeliveryMessage } from 'constants/delivery';
import { z } from 'zod';

export type TOrderContactsSchema = z.infer<typeof orderContactsSchema>;

export const orderContactsSchema = z.object({
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
});
