import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .max(255)
    .regex(
      new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"),
      "Email format is not correct"
    ),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean(),
});
