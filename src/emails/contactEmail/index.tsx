import ContactEmail from './ContactEmail';
import plainText from './plainText';

export type ContactEmailPayload = {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
};

export const getContactEmailVariants = (payload: ContactEmailPayload) => {
  return {
    subject: `Formularz kontaktowy (${payload.fullName})`,
    react: <ContactEmail {...payload} />,
    text: plainText(payload),
  };
};
