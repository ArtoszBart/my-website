import './filters.scss';

import Checkbox from '@/components/Checkbox';
import { useTranslations } from '@/i18n/translations';
import clsx from 'clsx';
import { FaChevronDown } from 'react-icons/fa6';
import ListControlModal from '../ListControlModal';
import useFilters, { type IuseFilters } from './useFilters';

interface IProps<T extends Record<string, string[]>> extends IuseFilters {
  isOpened: boolean;
  allFilters: Record<string, string[]>;
  selectedFilters: T;
  onToggleValue: (value: string, filterKey: string) => void;
}

export default function Filters<T extends Record<string, string[]>>({
  isOpened,
  onClose,
  allFilters,
  selectedFilters,

  onToggleValue,
}: IProps<T>) {
  const t = useTranslations('Toolbar');
  const { handleClose, openedGroup, toggleGroup } = useFilters({ onClose });

  return (
    <ListControlModal isOpened={isOpened} id='filters' onClose={handleClose}>
      {Object.entries(allFilters).map(([categoryName, values]) => (
        <fieldset
          key={categoryName}
          className={clsx('filters-group', {
            'filters-group--opened': openedGroup === categoryName,
          })}
        >
          <legend className='filters-group__toggle'>
            <button
              type='button'
              onClick={() => toggleGroup(categoryName)}
              aria-expanded={openedGroup === categoryName}
            >
              {t(('filterCategory.' + categoryName) as Parameters<typeof t>[0])}
              <FaChevronDown />
            </button>
          </legend>
          <div className='filters-group__panel'>
            <div className='filters-group__panel__inner'>
              {values.map((value) => (
                <Checkbox
                  key={value}
                  label={t(
                    ('filterOption.' + value) as Parameters<typeof t>[0],
                  )}
                  checked={selectedFilters[categoryName].includes(value)}
                  onChange={() => onToggleValue(value, categoryName)}
                />
              ))}
            </div>
          </div>
        </fieldset>
      ))}
    </ListControlModal>
  );
}
