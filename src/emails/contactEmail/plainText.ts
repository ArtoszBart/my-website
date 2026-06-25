import { type ContactEmailPayload } from '.';

const plainText = (payload: ContactEmailPayload) => {
  return `
		Nowa wiadomość z formularza kontaktowego

		Imię: ${payload.fullName}
		Email: ${payload.email}
		Telefon: ${payload.phone || '-'}

		Wiadomość:
		${payload.message}
  `;
};

export default plainText;
