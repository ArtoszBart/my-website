'use client';

import './technologies.scss';

import { useTranslations } from '@/i18n/translations';
import { toCssIdent } from '@/utils/css';
import ListToolbar from '../ListToolbar';
import TechPopover from '../TechPopover';
import useTechnologies from './useTechnologies';

export default function Technologies() {
  const t = useTranslations('Technologies');
  const { displayedTechnologies, ...hook } = useTechnologies();

  return (
    <>
      <ListToolbar listStateHook={hook} />
      <div className='techs__grid'>
        {displayedTechnologies.length > 0 ? (
          displayedTechnologies.map(([key, tech]) => {
            type Translation = Parameters<typeof t>[0];
            const anchorName = `--${toCssIdent(key)}`;
            const description = t(('descriptions.' + key) as Translation);
            const experience = t(
              ('experience.' + tech.experience.toString()) as Translation,
            );

            return (
              <div className='techs__grid__item' key={key}>
                <button
                  className='techs__grid__item__icon'
                  popoverTarget={key}
                  style={{ anchorName }}
                >
                  {tech.icon}
                </button>

                <span className='techs__grid__item__label'>{tech.label}</span>

                <TechPopover
                  techKey={key}
                  tech={tech}
                  anchorName={anchorName}
                  description={description}
                  experience={experience}
                />
              </div>
            );
          })
        ) : (
          <p className='techs__grid__no-results'>
            Brak wyników dla: <span>{hook.query}</span>
          </p>
        )}
      </div>
    </>
  );
}
