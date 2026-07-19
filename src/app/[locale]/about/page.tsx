import Button from '@/components/Button';
import './aboutPage.scss';

import ImageLoader from '@/components/ImageLoader';
import Technologies from '@/components/Technologies';
import { useTranslations } from '@/i18n/translations';
import { Locale } from '@/i18n/types';
import { use } from 'react';
import { LuDownload } from 'react-icons/lu';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function AboutPage({ params }: Props) {
  const { locale } = use(params);
  const t = useTranslations(locale, 'AboutPage');

  return (
    <main id='about'>
      <section className='about'>
        <h1>{t('about')}</h1>

        <div className='about__content'>
          <ImageLoader
            className='about__content__image'
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/bartosz-art.png`}
            alt='Bartosz Art'
            width={890}
            height={1414}
            fetchPriority='high'
            loading='eager'
          />

          <div className='about__content__text'>
            {t.raw('about-me').map((paragraph: string, idx: number) => (
              <p key={idx}>{paragraph}</p>
            ))}
            <Button
              label={t('cv-button')}
              icon={<LuDownload />}
              href={`${process.env.NEXT_PUBLIC_CDN_URL}/CV_Bartosz_Art.pdf`}
            />
          </div>
        </div>

        <div className='about__quote'>
          <q>{t('quote')}</q>
          <cite>— Warren Buffett</cite>
        </div>
      </section>

      <section className='techs'>
        <h2>{t('techs')}</h2>
        <Technologies />
      </section>
    </main>
  );
}
