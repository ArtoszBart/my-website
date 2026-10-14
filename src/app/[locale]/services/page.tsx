import RichText from '@/components/RichText';
import Services from '@/components/Services';
import Workflow from '@/components/Workflow';
import { useTranslations } from '@/i18n/translations';
import { LocaleParams } from '@/i18n/types';
import { use } from 'react';
import './servicesPage.scss';

export default function ServicesPage({ params }: LocaleParams) {
  const { locale } = use(params);
  const t = useTranslations('ServicesPage', locale);

  return (
    <main>
      <section className='services'>
        <h1>{t('services.title')}</h1>
        <RichText
          className='services__subtitle'
          t={t}
          text='services.subtitle'
        />

        <Services />
      </section>

      <section className='workflow'>
        <h1>{t('workflow.title')}</h1>
        <RichText
          className='services__subtitle'
          t={t}
          text='workflow.subtitle'
        />

        <Workflow />
      </section>
    </main>
  );
}
