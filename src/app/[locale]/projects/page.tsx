import Projects from '@/components/Projects';
import { useTranslations } from '@/i18n/translations';
import { Locale } from '@/i18n/types';
import { use } from 'react';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function ProjectsPage({ params }: Props) {
  const { locale } = use(params);
  const t = useTranslations(locale, 'ProjectsPage');

  return (
    <main>
      <h1>{t('title')}</h1>

      <Projects />
    </main>
  );
}
