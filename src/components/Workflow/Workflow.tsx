import { useTranslations } from '@/i18n/translations';
import './workflow.scss';

export default function Workflow() {
  const t = useTranslations('ServicesPage.workflow');

  return (
    <ol className='workflow-list'>
      {t
        .raw('content')
        .map((role: { title: string; description: string }, idx: number) => (
          <li className='workflow-list__item' key={role.title}>
            <h3 className='workflow-list__item__title'>
              <span className='workflow-list__item__title__number'>
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className='workflow-list__item__title__text'>
                {role.title}
              </span>
            </h3>

            <p className='workflow-list__item__description'>
              {role.description}
            </p>
          </li>
        ))}
    </ol>
  );
}
