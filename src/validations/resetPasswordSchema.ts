import { z } from "zod";
import { errorMessage, EXCLUDED_DOMAINS } from "constants/auth";

export type TEmailCheckerSchema = z.infer<typeof emailCheckerSchema>;

export const emailCheckerSchema = z.object({
  email: z
    .string()
    .email(errorMessage.EMAIL)
    .refine(
      (value) =>
        !EXCLUDED_DOMAINS.some((domain) => value.endsWith(`@${domain}`)),
      {
        message: errorMessage.EMAIL,
      }
    ),
  // password: z
  //   .string()
  //   .trim()
  //   .min(8, errorMessage.PASSWORD.COMMON)
  //   .max(30, errorMessage.PASSWORD.COMMON)
  //   .refine((value) => /[a-zA-Z0-9~!$%^&*_\-=+}{'\?.-]/.test(value), {
  //     message: errorMessage.PASSWORD.COMMON,
  //   }),
  // confirm_password: z.string(),
});
// .superRefine(({ password, confirm_password }, ctx) => {
//   if (password !== confirm_password) {
//     ctx.addIssue({
//       code: "custom",
//       message: errorMessage.CONFIRM_PASSWORD,
//       path: ["confirm_password"],
//     });
//   }
// });
