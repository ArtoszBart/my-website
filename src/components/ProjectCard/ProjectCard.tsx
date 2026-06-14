import { TranslationKey } from '@/data/projects';
import { Project } from '@/types/project';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { FaGithub, FaUpRightFromSquare } from 'react-icons/fa6';
import { SCOPE_ICONS, TECH_ICONS } from '../IconMapper';
import './projectCard.scss';

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
      <a
        className='project-card__thumbnail'
        aria-label={t('liveDemo')}
        href={project.link || project.repositoryLink}
        target='_blank'
        rel='noreferrer'
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
      </a>

      <div className='project-card__body'>
        <div className='project-card__body__header'>
          <h2 className='project-card__body__header__title'>{project.title}</h2>
          <div className='project-card__body__header__actions'>
            {project.link && (
              <a
                aria-label={t('liveDemo')}
                data-tooltip={t('liveDemo')}
                href={project.link}
                target='_blank'
                rel='noreferrer'
              >
                <FaUpRightFromSquare />
              </a>
            )}
            {project.repositoryLink && (
              <a
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
              <span
                key={idx}
                data-tooltip={t(SCOPE_ICONS[scope].translationKey)}
              >
                {SCOPE_ICONS[scope].icon}
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
                aria-label={TECH_ICONS[tech].label}
                data-tooltip={TECH_ICONS[tech].label}
                href={TECH_ICONS[tech].url}
                target='_blank'
                rel='noreferrer'
              >
                {TECH_ICONS[tech].icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
