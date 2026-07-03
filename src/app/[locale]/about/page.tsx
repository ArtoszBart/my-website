import './aboutPage.scss';

import ImageLoader from '@/components/ImageLoader';
import LinkButton from '@/components/LinkButton';
import { useTranslations } from 'next-intl';
import { LuDownload } from 'react-icons/lu';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <main id='about'>
      <section className='about'>
        <h1>{t('title')}</h1>

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
            <LinkButton
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
    </main>
  );
}
