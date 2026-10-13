'use client';

import { SERVICES } from '@/data/services';
import { useTranslations } from '@/i18n/translations';
import clsx from 'clsx';
import { FaChevronDown } from 'react-icons/fa6';
import RichText from '../RichText';
import './services.scss';
import useServices from './useServices';

export default function Services() {
  const t = useTranslations('ServicesPage');
  const { openedServiceId, onChevronToogleClick } = useServices();

  return (
    <div className='services-list'>
      {SERVICES.map((service, idx) => (
        <div
          className={clsx('services-list__card', {
            'services-list__card--opened':
              openedServiceId === service.translationKey,
          })}
          key={idx}
        >
          <div
            className='services-list__card__header'
            onClick={() => onChevronToogleClick(service.translationKey)}
          >
            <div className='services-list__card__header__main'>
              <div className='services-list__card__header__main__icon'>
                {service.icon}
              </div>

              <h3 className='services-list__card__header__main__title'>
                {t(`services.${service.translationKey}.title`)}
              </h3>
            </div>

            <div className='services-list__card__header__chevron'>
              <FaChevronDown />
            </div>
          </div>

          <div className='services-list__card__content'>
            <RichText
              className='services-list__card__content__text'
              t={t}
              text={`services.${service.translationKey}.content`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
