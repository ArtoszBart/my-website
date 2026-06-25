import './contactPage.scss';

import ContactForm from '@/components/ContactForm';
import HeroDecor from '@/components/HeroDecor';
import ImageLoader from '@/components/ImageLoader';
import Socials from '@/components/Socials/';

export default function ContactPage() {
  return (
    <main>
      <div className='contact-banner'>
        <div className='contact-banner__image-container'>
          <ImageLoader
            className='contact-banner__image'
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/bartosz-art-hero.webp`}
            alt='Bartosz Art'
            width={890}
            height={1414}
            fetchPriority='high'
            loading='eager'
          />
        </div>

        <Socials />

        <HeroDecor reversed compact>
          <h1 className='contact__title'>Bartosz Art</h1>
          <p className='contact__subtitle'>
            <a href='tel:+48791971029'>+48 791-971-029</a>
          </p>
          <p className='contact__subtitle'>
            <a href='mailto:bartosz.art@gmail.com'>bartosz.art@gmail.com</a>
          </p>
        </HeroDecor>
      </div>

      <ContactForm />
    </main>
  );
}
