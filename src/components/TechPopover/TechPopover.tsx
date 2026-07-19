import './techPopover.scss';

import { TechMeta } from '@/data/technologies';
import { useTranslations } from '@/i18n/translations';
import { FaXmark } from 'react-icons/fa6';
import useTechPopover from './useTechPopover';

interface TechPopoverProps {
  techKey: string;
  tech: TechMeta;
  description: string;
  experience: string;
  anchorName: string;
}

export default function TechPopover({
  techKey,
  tech,
  anchorName,
  description,
  experience,
}: TechPopoverProps) {
  const t = useTranslations('TechnologiesPopover');
  const { popoverRef } = useTechPopover();

  return (
    <div
      ref={popoverRef}
      className='tech-popover'
      role='dialog'
      aria-labelledby={`${techKey}-popover-title`}
      aria-describedby={`${techKey}-popover-description`}
      id={techKey}
      popover='auto'
      style={{ positionAnchor: anchorName }}
    >
      <div className='tech-popover__container'>
        <button
          className='tech-popover__close'
          popoverTarget={techKey}
          popoverTargetAction='hide'
          aria-label={`Zamknij informacje o ${tech.label}`}
        >
          <FaXmark />
        </button>

        <div className='tech-popover__header'>
          <div className='tech-popover__header__icon'>{tech.icon}</div>

          <h3
            id={`${techKey}-popover-title`}
            className='tech-popover__header__title'
          >
            {tech.label}
          </h3>
        </div>

        <span className='tech-popover__experience'>
          {t('experience')}: <b>{experience}</b>
        </span>

        <p
          id={`${techKey}-popover-description`}
          className='tech-popover__description'
        >
          {description}
        </p>

        <a
          className='tech-popover__link'
          href={tech.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          {t('website')}
        </a>
      </div>
    </div>
  );
}
