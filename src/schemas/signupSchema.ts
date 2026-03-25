import {z} from "zod"

export const usernameValidation = z.string().min(2 ,"Username must be atleast of 2 character")
                                    .max(20 , "Username must be atleast of 20 character")
                                    .regex(/^[a-zA-Z0-9_]+$/,"username not contain special character");

export const signupValidation = z.object({
    username: usernameValidation,
    email : z.string().email({message:"Invalid email"}),
    password : z.string().min(8,{message :"password must be atleast 8 character"})
})