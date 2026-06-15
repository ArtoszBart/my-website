'use client';

import LayoutToggle, { useLayoutToggleStore } from '@/components/LayoutToggle';
import ProjectCard from '@/components/ProjectCard';
import { PROJECTS } from '@/data/projects';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import './projectsPage.scss';

export default function ProjectsPage() {
  const { isListView } = useLayoutToggleStore();
  const t = useTranslations('ProjectsPage');

  return (
    <main>
      <h1>{t('title')}</h1>

      <div className='projects-toolbar'>
        <LayoutToggle />
      </div>

      <div
        className={clsx('project-list', {
          'project-list--list': isListView,
        })}
      >
        {PROJECTS.map((project, idx) => (
          <ProjectCard
            key={project.title}
            index={idx}
            project={project}
            isListLayout={isListView}
          />
        ))}
      </div>
    </main>
  );
}
