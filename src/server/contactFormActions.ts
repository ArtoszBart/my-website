'use server';

import { getContactEmailVariants } from '@/emails/contactEmail';
import { sendEmail } from '@/emails/resendClient';
import { createContactFormSchema } from '@/schemas/contactForm.schema';
import { ActionResult } from '@/types/actions';
import { ContactFormData } from '@/types/schemas';
import { isHoneypotTriggered } from '@/utils/honeypotValidation';
import { formatErrors } from '@/utils/zodErrors';
import { getTranslations } from 'next-intl/server';

export async function sendEmailAction(
  data: ContactFormData,
): Promise<ActionResult> {
  if (isHoneypotTriggered(data)) {
    return { success: true };
  }

  const t = await getTranslations('ValidationErrors');
  const contactFormSchema = createContactFormSchema(t);

  const validationResult = contactFormSchema.safeParse(data);
  if (!validationResult.success) {
    return {
      errors: { ...formatErrors(validationResult.error) },
      success: false,
    };
  }

  const succeeded = await sendEmail({
    from: 'Formularz kontaktowy',
    to: [process.env.EMAIL_ADDRESS_RECIEVER!],
    replyTo: validationResult.data.email,
    attachments: validationResult.data.attachments,
    ...getContactEmailVariants(validationResult.data),
  });

  return {
    success: succeeded,
  };
}
