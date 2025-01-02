import { z } from 'zod';

export const registerSchema = z
    .object({
        fullname: z
            .string()
            .min(8, 'fullname must be more than 8 Characters')
            .max(50, 'fullname must be less than 50 Characters')
            .regex(/^[A-Za-z]+$/, 'Only alphabet letters are allowed'),
        username: z
            .string()
            .min(1, 'Username must be more than 1 Characters')
            .max(32, 'Username must be less than 32 Characters')
            .regex(
                /^[\w]/,
                'Username must start with a letter, number, or underscore'
            ),
        email: z.string().email('Invalid Email'),
        password: z
            .string()
            .min(8, 'Password must be more than 8 Characters')
            .max(32, 'Password must be less than 32 Characters'),
        confirmPassword: z
            .string()
            .min(8, 'Password must be more than 8 Characters')
            .max(32, 'Password must be less than 32 Characters'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'password does not match',
        path: ['confirmPassword'],
    });

export const loginSchema = z.object({
    username: z
        .string()
        .min(1, 'Username must be more than 1 Characters')
        .max(32, 'Username must be less than 32 Characters')
        .regex(
            /^[\w]/,
            'Username must start with a letter, number, or underscore'
        ),
    email: z.string().email('Invalid Email'),
    password: z
        .string()
        .min(8, 'Password must be more than 8 Characters')
        .max(32, 'Password must be less than 32 Characters'),
});
