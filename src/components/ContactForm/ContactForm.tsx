'use client';

import { createContactFormSchema } from '@/schemas/contactForm.schema';
import { sendEmailAction } from '@/server/contactFormActions';
import { useTranslations } from 'next-intl';
import { FaRegPaperPlane } from 'react-icons/fa6';
import { Checkbox, Files, Form, Input } from '../Form';

export default function ContactForm() {
  const t = useTranslations('Forms');

  return (
    <Form
      schemaFactory={createContactFormSchema}
      onSubmit={sendEmailAction}
      submitLabel={t('submit')}
      SubmitIcon={FaRegPaperPlane}
      defaultValues={{
        fullName: '',
        email: '',
        phone: '',
        message: '',
        attachments: [],
        dataProcessingConsent: false,
      }}
    >
      <div className='form__section-title'>
        <h4>{t('contactDetails')}</h4>
      </div>

      <div className='form__input-section'>
        <Input
          name='fullName'
          placeholder={t('fullName')}
          tabIndex={1}
          required
        />
        <Input name='email' placeholder={t('email')} tabIndex={2} required />
        <Input name='phone' placeholder={t('phone')} tabIndex={3} />
      </div>

      <div className='form__section-title'>
        <h4>{t('ideaTitle')}</h4>
        <p>{t('ideaDescription')}</p>
      </div>
      <Input
        name='message'
        placeholder={t('message')}
        tabIndex={4}
        multiline
        required
      />

      <Files name='attachments' label={t('attachments')} tabIndex={5} />

      <Checkbox
        name='dataProcessingConsent'
        label={t('dataProcessingConsent')}
        tabIndex={6}
      />
    </Form>
  );
}
