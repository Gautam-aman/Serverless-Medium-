import zod, { number } from "zod"

export const signupSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
    name: zod.string().optional()
})



export const signinSchema = zod.object({
    email: zod.string().email(),
    Password: zod.string().min(6)
})



export const blogSchema = zod.object({
    content: zod.string(),
    title: zod.string(),
})



export const updateSchema = zod.object({
    title: zod.string(),
    content: zod.string(),
    id: number()
})

export type updateBlog = zod.infer<typeof updateSchema>
export type blogInput = zod.infer<typeof blogSchema>
export type SigninInput = zod.infer<typeof signinSchema>
export type SingupInput = zod.infer<typeof signupSchema>