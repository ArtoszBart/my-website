'use client';

import { useTranslations } from '@/i18n/translations';
import clsx from 'clsx';
import { FaChevronDown } from 'react-icons/fa6';
import './faq.scss';
import useFaq from './useFaq';

type Faq = { question: string; answer: string };

export default function Faq() {
  const t = useTranslations('ServicesPage.faq');
  const { openedFaqId, onToogleClick } = useFaq();

  return (
    <div className='faq-list'>
      {t.raw('items').map((faq: Faq, idx: number) => (
        <div
          className={clsx('faq-list__card', {
            'faq-list__card--opened': openedFaqId === faq.question,
          })}
          key={idx}
        >
          <div
            className='faq-list__card__header'
            onClick={() => onToogleClick(faq.question)}
          >
            <div className='faq-list__card__header__main'>
              <div className='faq-list__card__header__main__number'>
                {String(idx + 1).padStart(2, '0')}
              </div>

              <h3 className='faq-list__card__header__main__title'>
                {faq.question}
              </h3>
            </div>

            <div className='faq-list__card__header__chevron'>
              <FaChevronDown />
            </div>
          </div>

          <div className='faq-list__card__content'>
            <p className='faq-list__card__content__text'>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
