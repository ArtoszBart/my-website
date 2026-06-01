import Header from '@/components/Header';
import { routing } from '@/i18n/routing';
import { Locale } from '@/i18n/types';
import '@/styles/main.scss';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Fira_Code, Plus_Jakarta_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin-ext'],
  variable: '--font-plus-jakarta-sans',
});

const firaCode = Fira_Code({
  subsets: ['latin-ext'],
  variable: '--font-fira-code',
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'Metadata',
  });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={clsx(plusJakartaSans.variable, firaCode.variable)}
    >
      <body>
        <NextIntlClientProvider>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
