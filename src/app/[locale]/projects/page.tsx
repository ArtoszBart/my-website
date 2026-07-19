import Projects from '@/components/Projects';
import { useTranslations } from '@/i18n/translations';
import { type LocaleParams } from '@/i18n/types';
import { use } from 'react';

export default function ProjectsPage({ params }: LocaleParams) {
  const { locale } = use(params);
  const t = useTranslations(locale, 'ProjectsPage');

  return (
    <main>
      <h1>{t('title')}</h1>

      <Projects />
    </main>
  );
}
