import HeroDecor from '@/components/HeroDecor';
import ImageLoader from '@/components/ImageLoader';
import { SOCIALS } from '@/consts/socials';
import Link from 'next/link';
import './mainPage.scss';

export default function Home() {
  return (
    <main>
      <nav className='socials'>
        {SOCIALS.map((social) => (
          <Link
            key={social.url}
            href={social.url}
            className='socials__button'
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
              <span className='nowrap'>Full-Stack Developer</span> |{' '}
              <span className='nowrap'>Software Engineer</span> |{' '}
              <span className='nowrap'>Maritime Yacht Skipper</span>
            </p>
          </HeroDecor>
        </div>

        <div className='hero__right'>
          <ImageLoader
            className='hero__image'
            src={`${process.env.CDN_URL}/bartosz-art-hero.webp`}
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
