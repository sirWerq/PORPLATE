import { z } from 'zod';

export const loginSchema = z.object({
    username: z
        .string()
        .min(5, 'Username must be more than 1 Characters')
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
