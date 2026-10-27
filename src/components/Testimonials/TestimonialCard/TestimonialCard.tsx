'use client';

import { useTranslations } from '@/i18n/translations';
import './testimonialCard.scss';
import useTestimonialCard, { ITestimonialCard } from './useTestimonialCard';

const CHAR_LIMIT = 250;

export default function TestimonialCard({ testimonial }: ITestimonialCard) {
  const t = useTranslations('ServicesPage.testimonials');

  const { cardRef, ...hook } = useTestimonialCard({
    testimonial,
    charLimit: CHAR_LIMIT,
  });

  return (
    <article
      className='testimonial-card'
      ref={cardRef}
      style={{ height: hook.isExpanded ? 'auto' : `${hook.minHeight}px` }}
    >
      <header className='testimonial-card__header'>
        <div
          className='testimonial-card__header__rating'
          aria-label='5 out of 5 stars'
        >
          {'★★★★★'}
        </div>

        {hook.hasOriginal && hook.isTranslated && (
          <span className='testimonial-card__header__translated'>
            {t('aiTranslated')}
          </span>
        )}
      </header>

      <div className='testimonial-card__content'>
        <div className='testimonial-card__content__text'>
          <div>
            {hook.contentRaw.length <= CHAR_LIMIT ? (
              <div>
                {hook.languageContent.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <div>
                {hook.displayedContent.map((paragraph, idx) => (
                  <p
                    key={idx}
                    style={{
                      display: `${idx === hook.displayedContent.length - 1 ? 'inline' : ''}`,
                    }}
                  >
                    {paragraph}
                  </p>
                ))}

                <span
                  className='testimonial-card__content__text__expand-button'
                  onClick={() => hook.setIsExpanded((prev) => !prev)}
                >
                  {hook.isExpanded ? t('showLess') : t('readMore')}
                </span>
              </div>
            )}
          </div>
        </div>
        {hook.hasOriginal && (
          <button
            type='button'
            onClick={() => hook.setIsTranslated((current) => !current)}
          >
            {hook.isTranslated ? t('viewOriginal') : t('showTranslated')}
          </button>
        )}
      </div>

      <footer className='testimonial-card__footer'>
        <div>
          <p className='testimonial-card__footer__author'>
            {testimonial.author}
          </p>

          <p className='testimonial-card__footer__position'>
            {testimonial.company && `${testimonial.company.companyName} | `}
            {t(`content.${testimonial.translationKey}.position`)}
          </p>
        </div>

        <a
          className='testimonial-card__footer__source'
          href={testimonial.url}
          target='_blank'
          rel='noreferrer'
        >
          <span>{t('source')}:</span> {testimonial.source.icon}
        </a>
      </footer>
    </article>
  );
}
