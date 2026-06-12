import HeroDecor from '@/components/HeroDecor';
import ImageLoader from '@/components/ImageLoader';
import { SOCIALS } from '@/consts/socials';
import { useTranslations } from '@/i18n/translations';
import { Locale } from '@/i18n/types';
import Link from 'next/link';
import { Fragment, use } from 'react';
import './mainPage.scss';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function Home({ params }: Props) {
  const { locale } = use(params);
  const t = useTranslations(locale, 'HomePage');

  return (
    <main id='home'>
      <nav className='socials'>
        {SOCIALS.map((social) => (
          <Link
            key={social.url}
            href={social.url}
            className='socials__button'
            aria-label={social.label}
            target='_blank'
            rel='noopener noreferrer'
          >
            {social.icon}
          </Link>
        ))}
      </nav>

      <div className='hero'>
        <div className='hero__left'>
          <HeroDecor>
            <h1 className='hero__title'>Bartosz Art</h1>
            <p className='hero__subtitle'>
              {t.raw('roles').map((role: string, idx: number) => (
                <Fragment key={idx}>
                  {idx > 0 && ' | '}
                  <span className='nowrap'>{role}</span>
                </Fragment>
              ))}
            </p>
          </HeroDecor>
        </div>

        <div className='hero__right'>
          <ImageLoader
            className='hero__image'
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/bartosz-art-hero.webp`}
            alt='Bartosz Art'
            width={890}
            height={1414}
            fetchPriority='high'
            loading='eager'
          />
        </div>
      </div>
    </main>
  );
}
