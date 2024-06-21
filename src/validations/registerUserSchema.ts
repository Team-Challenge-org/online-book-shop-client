import { z } from "zod";

export type TRegisterUserSchema = z.infer<typeof registerUserSchema>;

export const registerUserSchema = z
  .object({
    first_name: z.string().min(1, { message: "Name is required" }),
    last_name: z.string().min(1, { message: "Last name is required" }),
    phone_number: z.number(),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .trim(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// for validation confirm password
// const schema = z.object({
//     // ... other fields in your array
//     password: z.string().min(6, "Password must be at least 6 characters").trim(),
//     confirmPassword: z.string().equalTo(z.ref('password'), { message: "Passwords must match" }),
//   });
