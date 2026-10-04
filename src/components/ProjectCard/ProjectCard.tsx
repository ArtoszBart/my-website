import './projectCard.scss';

import { SCOPES } from '@/data/scopes';
import { TECHNOLOGIES } from '@/data/technologies';
import { useTranslations } from '@/i18n/translations';
import { TranslationKey } from '@/types/data/projects';
import { Project } from '@/types/project';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaGithub, FaUpRightFromSquare } from 'react-icons/fa6';
import LiveDemoAction from './components/LiveDemoAction';
import MobileDemoModal from './components/MobileDemoModal';

type Props = {
  project: Project;
  isListLayout: boolean;
  index: number;
};

export default function ProjectCard({ project, isListLayout, index }: Props) {
  const t = useTranslations('ProjectsPage');
  const tProjects = useTranslations(
    `Projects.${project.translationKey as TranslationKey}`,
  );
  const [loaded, setLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={clsx('project-card', {
        'project-card--list': isListLayout,
      })}
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.15, 0.5),
      }}
    >
      <LiveDemoAction
        className='project-card__thumbnail'
        label={t('liveDemo')}
        href={project.link || project.repositoryLink}
        action={project.action}
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={project.blurThumbnail}
          alt={project.title}
          width={436}
          height={245}
          className='project-card__thumbnail__blur'
        />
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={436}
          height={245}
          onLoad={() => setLoaded(true)}
          className={clsx('project-card__thumbnail__image', {
            'project-card__thumbnail__image--loaded': loaded,
          })}
          fetchPriority={index === 0 ? 'high' : 'auto'}
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      </LiveDemoAction>

      <div className='project-card__body'>
        <div className='project-card__body__header'>
          <h2 className='project-card__body__header__title'>{project.title}</h2>
          <div className='project-card__body__header__actions'>
            {project.link && (
              <LiveDemoAction
                className='project-card__body__header__actions__icon'
                label={t('liveDemo')}
                href={project.link}
                action={project.action}
                onClick={() => setIsOpen(true)}
              >
                <FaUpRightFromSquare />
              </LiveDemoAction>
            )}
            {project.repositoryLink && (
              <a
                className='project-card__body__header__actions__icon'
                aria-label={t('repository')}
                data-tooltip={t('repository')}
                href={project.repositoryLink}
                target='_blank'
                rel='noreferrer'
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>
        <p className='project-card__body__snippet'>{tProjects(`snippet`)}</p>

        <div className='project-card__body__tags'>
          <div>
            <span className='project-card__body__tags__title'>
              {t('scope')}:
            </span>
            {project.scope.map((scope, idx) => (
              <span key={idx} data-tooltip={t(SCOPES[scope].translationKey)}>
                {SCOPES[scope].icon}
              </span>
            ))}
          </div>
          <div>
            <span className='project-card__body__tags__title'>
              {t('techstack')}:
            </span>
            {project.techstack.map((tech, idx) => (
              <a
                key={idx}
                aria-label={TECHNOLOGIES[tech].label}
                data-tooltip={TECHNOLOGIES[tech].label}
                href={TECHNOLOGIES[tech].url}
                target='_blank'
                rel='noreferrer'
              >
                {TECHNOLOGIES[tech].icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {project.action === 'install-modal' && (
        <MobileDemoModal
          projectName={project.title}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          href={project.link}
        />
      )}
    </motion.div>
  );
}
