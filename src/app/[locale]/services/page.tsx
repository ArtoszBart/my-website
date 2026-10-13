import RichText from '@/components/RichText';
import Services from '@/components/Services';
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
        <h1>{t('title')}</h1>
        <RichText className='services__subtitle' t={t} text='subtitle' />

        <Services />
      </section>
    </main>
  );
}
