import {z} from "zod"


export const messageSchema = z.object({
    content: z.string().min(10,{message:"content must be min of 10 characters"}).max(10,{message:"content must be no longer than 300 characters"})
}) 