import zod from "zod";
export declare const signupSchema: zod.ZodObject<{
    email: zod.ZodString;
    password: zod.ZodString;
    name: zod.ZodOptional<zod.ZodString>;
}, "strip", zod.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
export declare const signinSchema: zod.ZodObject<{
    email: zod.ZodString;
    Password: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    email: string;
    Password: string;
}, {
    email: string;
    Password: string;
}>;
export declare const blogSchema: zod.ZodObject<{
    content: zod.ZodString;
    title: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    content: string;
    title: string;
}, {
    content: string;
    title: string;
}>;
export declare const updateSchema: zod.ZodObject<{
    title: zod.ZodString;
    content: zod.ZodString;
    id: zod.ZodNumber;
}, "strip", zod.ZodTypeAny, {
    content: string;
    title: string;
    id: number;
}, {
    content: string;
    title: string;
    id: number;
}>;
export type updateBlog = zod.infer<typeof updateSchema>;
export type blogInput = zod.infer<typeof blogSchema>;
export type SigninInput = zod.infer<typeof signinSchema>;
export type SingupInput = zod.infer<typeof signupSchema>;
