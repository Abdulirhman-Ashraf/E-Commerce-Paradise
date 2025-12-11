
import z from "zod"
export const signUpSchema = z.object({
  name:z.string(),
  email:z.string().min(1,{message:"email required"}).email(),
  password:z.string().min(8,{message:"password must be 8 characters long"}),
  confirmPassword:z.string(),
})
.refine((data)=>data.password===data.confirmPassword,{
    message:"password must match",
    path:["confirmPassword"]
})