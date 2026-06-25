import z from 'zod';

export const honeypotFields = z.object({
  website: z.string().optional(),
  address: z.string().optional(),
});
