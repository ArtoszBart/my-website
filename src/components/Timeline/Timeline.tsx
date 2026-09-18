'use client';

import { TECHNOLOGIES } from '@/data/technologies';
import { useTranslations } from '@/i18n/translations';
import clsx from 'clsx';
import Bean from '../Bean';
import Filters from '../ListToolbar/components/Filters';
import './timeline.scss';
import useTimeline from './useTimeline';

export default function Timeline() {
  const t = useTranslations('Toolbar');
  const t2 = useTranslations('Timeline');
  const t3 = useTranslations('ProjectsPage');
  const hook = useTimeline();

  return (
    <>
      <div className='toolbar'>
        <div className='toolbar__controls'>
          <div className='toolbar__controls__actions'>
            <button onClick={() => hook.setIsFiltersModalOpened(true)}>
              {t('filter')}
            </button>
          </div>

          <Filters
            id='timeline'
            isOpened={hook.isFiltersModalOpened}
            onClose={hook.closeFiltersModals}
            allFilters={hook.allFilters}
            selectedFilters={{ categories: hook.selectedFilters }}
            onToggleValue={hook.toggleFilter}
          />
        </div>

        <div className='toolbar__selected-filters'>
          {hook.selectedFilters.map((filter) => (
            <Bean
              key={filter}
              label={t(('filterOption.' + filter) as Parameters<typeof t>[0])}
              option={filter}
              onClick={() => hook.toggleFilter(filter)}
            />
          ))}
        </div>
      </div>
      <ul className='timeline'>
        {hook.displayedExperience.map((timelineItem, idx) => (
          <li
            key={idx}
            className={clsx(
              'timeline__item',
              `timeline__item--${timelineItem.category}`,
            )}
            style={{ gridRow: idx + 1 }}
            onClick={() => hook.handleItemClick(timelineItem.id)}
          >
            <h3 className='timeline__item__title'>
              {t2.has(`${timelineItem.id}.title`)
                ? t2(`${timelineItem.id}.title`)
                : timelineItem.title}
            </h3>
            <p className='timeline__item__subtitle'>
              <a
                className='timeline__item__subtitle__company'
                href={timelineItem.link}
                target='_blank'
                rel='noreferrer'
                onClick={(e) => e.stopPropagation()}
              >
                {timelineItem.companyName}
              </a>
              <span className='timeline__item__subtitle__divider'>|</span>
              <span className='timeline__item__subtitle__period'>
                {timelineItem.startDate.toMonthYear()} -{' '}
                {timelineItem.endDate?.toMonthYear() ?? 'current'}
              </span>
            </p>
            <div
              className={clsx('timeline__item__content', {
                'timeline__item__content--visible':
                  hook.openedId === timelineItem.id,
              })}
            >
              <div className='timeline__item__content__inner'>
                <div className='timeline__item__content__tag-list'>
                  <span className='tag-list__title'>{t3('techstack')}:</span>
                  <ul>
                    {timelineItem.techstack.map((tech, idx) => (
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
                  </ul>
                </div>

                <span>{t2(`${timelineItem.id}.description`)}</span>

                <ul className='timeline__item__content__contributions'>
                  {t2
                    .raw(`${timelineItem.id}.contributions`)
                    .map((entry: string, idx: number) => (
                      <li key={idx}>
                        <span>{entry}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
