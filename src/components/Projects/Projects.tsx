'use client';

import './projects.scss';

import clsx from 'clsx';
import LayoutToggle, { useLayoutToggleStore } from '../LayoutToggle';
import ListToolbar from '../ListToolbar';
import ProjectCard from '../ProjectCard';
import useProjects from './useProjects';

export default function Projects() {
  const { isListView } = useLayoutToggleStore();
  const { displayedProjects, ...hook } = useProjects();

  return (
    <>
      <ListToolbar listStateHook={hook}>
        <LayoutToggle />
      </ListToolbar>

      <div
        className={clsx('project-list', {
          'project-list--list': isListView,
        })}
      >
        {displayedProjects.map((project, idx) => (
          <ProjectCard
            key={project.title}
            index={idx}
            project={project}
            isListLayout={isListView}
          />
        ))}
      </div>
    </>
  );
}
