import {z} from "zod";


export const signInSchema = z.object({
    identifier: z.string(), //identifier is nothing but email just a industry level term
    password: z.string(),

})