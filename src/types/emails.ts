import { type ReactNode } from 'react';

export type EmailData = {
  from?: string;
  to: string[];
  replyTo: string;
  subject: string;
  react: ReactNode;
  text: string;
  attachments?: File[];
};
