import { EXCLUDED_DOMAINS, errorMessage } from 'constants/auth';
import { z } from 'zod';

export type TLoginUserSchema = z.infer<typeof loginUserSchema>;

export const loginUserSchema = z.object({
  email_or_number: z
    .string()
    .email(errorMessage.PHONE_OR_EMAIL)
    .refine((value) => !EXCLUDED_DOMAINS.some((domain) => value.endsWith(`@${domain}`)), {
      message: errorMessage.PHONE_OR_EMAIL,
    }),
  login_password: z.string().min(8, { message: errorMessage.PHONE_OR_EMAIL }),
});
