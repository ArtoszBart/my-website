'use client';

import Button from '@/components/Button';
import { useTranslations } from '@/i18n/translations';
import { useEffect, useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { LuDownload } from 'react-icons/lu';
import './mobileDemoModal.scss';

type Props = {
  projectName: string;
  href: string | undefined;
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileDemoModal(props: Props) {
  const t = useTranslations('MobileProjectModal');

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsVisible(props.isOpen);
    });

    return () => cancelAnimationFrame(frame);
  }, [props.isOpen]);

  return (
    <div
      className={`install-modal ${isVisible ? 'install-modal--visible' : ''}`}
      onClick={props.onClose}
    >
      <section
        className='install-modal__container'
        role='dialog'
        aria-modal='true'
        aria-labelledby='install-modal-title'
        onClick={(event) => event.stopPropagation()}
      >
        <button className='install-modal__close-button' onClick={props.onClose}>
          <FaXmark />
        </button>
        <h2 className='install-modal__title'>{props.projectName}</h2>
        <p className='install-modal__description'>
          {t('description', { projectName: props.projectName })}
        </p>

        <Button
          label={t('androidDownloadButton')}
          icon={<LuDownload />}
          href={props.href}
          sameTab
        />

        <h3 className='install-modal__subtitle'>{t('androidManualTitle')}</h3>
        <ol className='install-modal__list'>
          {t
            .raw('androidManual')
            .map(
              (step: { title: string; description: string }, idx: number) => (
                <li className='install-modal__list__item' key={idx}>
                  <strong>
                    {step.title.replace('{projectName}', props.projectName)}
                  </strong>
                  <p>
                    {step.description.replace(
                      '{fileName}',
                      `${props.projectName.toLowerCase().replaceAll(' ', '-')}.apk`,
                    )}
                  </p>
                </li>
              ),
            )}
        </ol>
      </section>
    </div>
  );
}
