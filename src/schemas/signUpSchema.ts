import { z } from "zod";

export const usernameValidation = z
            .string()
            .min(2,"username must be atleast 2 character")
            .max(20,'username not exceed 20 character')
            .regex(/^\w+$/,"username must not contain special character")



export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message:"Invalid email address"}),
    password : z.string().min(6,{message:"password must be atleast 6 character"})
})