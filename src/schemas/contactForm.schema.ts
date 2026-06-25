import { type ValidationErrorsTranslator } from '@/i18n/types';
import z from 'zod';
import { honeypotFields } from './shared/honeypotFields.schema';

const MAX_FILES_COUNT = 5;
const MAX_FILE_SIZE_MB = 5;
const MAX_FILE_SIZE = MAX_FILE_SIZE_MB * 1024 * 1024;
const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'text/plain',
  'text/csv',
  'application/zip',
  'application/x-rar-compressed',
  'application/x-7z-compressed',
];

export const createContactFormSchema = (t: ValidationErrorsTranslator) =>
  z
    .object({
      fullName: z
        .string()
        .trim()
        .min(3, { message: t('fullName.min', { count: 3 }) })
        .max(50, { message: t('fullName.max', { count: 50 }) }),
      email: z
        .email(t('email.invalid'))
        .max(50, { message: t('email.max', { count: 50 }) }),
      phone: z
        .string()
        .trim()
        .regex(/^\+?[0-9\s\-()]{9,20}$/, {
          message: t('phone.invalid'),
        })
        .or(z.literal('')),
      message: z
        .string()
        .trim()
        .min(10, { message: t('message.min') })
        .max(500, { message: t('message.max', { count: 500 }) }),
      dataProcessingConsent: z.boolean().refine((val) => val === true, {
        message: t('dataProcessingConsent.required'),
      }),
      attachments: z
        .array(z.instanceof(File))
        .max(MAX_FILES_COUNT, {
          message: t('attachments.maxCount', { count: MAX_FILES_COUNT }),
        })
        .refine((files) => files.every((file) => file.size <= MAX_FILE_SIZE), {
          message: t('attachments.maxSize', { count: MAX_FILE_SIZE_MB }),
        })
        .refine(
          (files) =>
            files.every(
              (file) =>
                file.type.startsWith('image/') ||
                ALLOWED_FILE_TYPES.includes(file.type),
            ),
          {
            message: t('attachments.invalidType'),
          },
        )
        .optional(),
    })
    .extend(honeypotFields.shape);
