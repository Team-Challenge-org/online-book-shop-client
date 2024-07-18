import { errorMessage } from 'constants/auth';
import { z } from 'zod';
import { emailRegex } from './registerUserSchema';

export type TLoginUserSchema = z.infer<typeof loginUserSchema>;

export const loginUserSchema = z.object({
  email_or_number: z
    .string()
    .refine((value) => value.replace(/\D+/g, "").length === 12 || emailRegex.test(value), errorMessage.PHONE_OR_EMAIL),
  login_password: z.string().min(8, errorMessage.PASSWORD.COMMON)
  .max(30, errorMessage.PASSWORD.COMMON)
  .refine(
    (value) => /^[\x00-\x7F]+$/.test(value), // Checking for ASCII characters
    {
      message: errorMessage.PASSWORD.COMMON,
    }
  )
  .refine(
    (value) => !/^\s|\s$/.test(value), // Check if there is no space at the beginning or end
    {
      message: errorMessage.PASSWORD.COMMON,
    }
  ),
});
