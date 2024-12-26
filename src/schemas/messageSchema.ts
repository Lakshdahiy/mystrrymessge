import {z} from "zod";


export const messageSchema = z.object({
    Content: z
    .string()
    .min(10,{message:'content must be atleat 10 character long'})
    .max(300,{message:'content must not exceed 300 character'})
})

