import { z } from "zod";
export const logInSchema = z.object({
  email: z.string().min(1, { message: "Email is Required" }).email(),
  password: z
    .string()
    .min(8, { message: "Password is Required" })
  ,
});
