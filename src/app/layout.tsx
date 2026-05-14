import Header from '@/components/Header';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Fira_Code, Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/main.scss';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin-ext'],
  variable: '--font-plus-jakarta-sans',
});

const firaCode = Fira_Code({
  subsets: ['latin-ext'],
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: 'Bartosz Art',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={clsx(plusJakartaSans.variable, firaCode.variable)}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
