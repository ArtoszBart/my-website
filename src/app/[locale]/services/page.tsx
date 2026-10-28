import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
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
        <p className='services__subtitle'>{t('services.subtitle')}</p>

        <Services />
      </section>

      <section className='workflow'>
        <h1>{t('workflow.title')}</h1>
        <p className='services__subtitle'>{t('workflow.subtitle')}</p>

        <Workflow />
      </section>

      <section className='testimonials'>
        <h1>{t('testimonials.title')}</h1>
        <p className='services__subtitle'>{t('testimonials.subtitle')}</p>

        <Testimonials locale={locale} />
      </section>
    </main>
  );
}
