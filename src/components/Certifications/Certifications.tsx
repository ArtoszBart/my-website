import './certifications.scss';

import { CERTIFICATIONS } from '@/data/certifications';
import { useTranslations } from '@/i18n/translations';

export default function Certifications() {
  const t = useTranslations('AboutPage');

  return (
    <ul className='certifications'>
      {CERTIFICATIONS.map((cert, idx) => (
        <li key={idx} className='certifications__card'>
          <a
            href={`${process.env.NEXT_PUBLIC_CDN_URL}${cert.url}`}
            target='_blank'
            rel='noreferrer'
          >
            <div className='certifications__card__content'>
              {cert.source.icon}
              <h3>{cert.name}</h3>
            </div>

            <div className='certifications__card__overlay' aria-hidden='true'>
              <span className='certifications__card__overlay__label'>
                {t('preview')}
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
