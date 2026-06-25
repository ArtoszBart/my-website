'use server';

import { EmailData } from '@/types/emails';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(props: EmailData): Promise<boolean> {
  const sender = props.from
    ? `${props.from} <${process.env.EMAIL_ADDRESS_SENDER}>`
    : process.env.EMAIL_ADDRESS_SENDER!;

  const emailAttachments = props.attachments
    ? await Promise.all(
        props.attachments.map(async (file) => ({
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
        })),
      )
    : undefined;

  const { data, error } = await resend.emails.send({
    from: sender,
    to: props.to,
    replyTo: props.replyTo,
    subject: props.subject,
    react: props.react,
    text: props.text,
    attachments: emailAttachments,
  });

  if (error) {
    console.error(error);
    return false;
  }

  console.log(data);
  return true;
}
