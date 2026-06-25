import { createContactFormSchema } from '@/schemas/contactForm.schema';
import z from 'zod';

export type ContactFormData = z.infer<
  ReturnType<typeof createContactFormSchema>
>;
