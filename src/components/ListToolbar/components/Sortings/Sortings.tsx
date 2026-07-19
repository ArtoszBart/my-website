import './sortings.scss';

import RadioOption from '@/components/RadioOption';
import { SORTING_ORDER } from '@/enums/sortingOrder.enum';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { FaArrowDownShortWide, FaArrowUpWideShort } from 'react-icons/fa6';
import ListControlModal from '../ListControlModal';

interface IProps<T extends string> {
  isOpened: boolean;
  onClose: () => void;
  isDesc: boolean;
  sortOption: readonly T[];
  selectedOptions: string;
  onChange: (s: { option?: T; order?: SORTING_ORDER }) => void;
}

export default function Sortings<T extends string>({
  isOpened,
  onClose,
  isDesc,
  sortOption,
  selectedOptions,
  onChange,
}: IProps<T>) {
  const t = useTranslations('Toolbar');

  const handleSortingOrderClick = () => {
    onChange({
      order: isDesc ? SORTING_ORDER.ASC : SORTING_ORDER.DESC,
    });
  };

  return (
    <ListControlModal isOpened={isOpened} id='sortings' onClose={onClose}>
      <fieldset className='sortings'>
        <legend className='sortings__header' id='sortings-modal'>
          <span>{t('sortTitle')}</span>
          <span
            className={clsx('sortings__header__icon', {
              'sortings__header__icon--active': isDesc,
            })}
            onClick={handleSortingOrderClick}
          >
            <FaArrowUpWideShort
              className={`sortings__header__icon-${SORTING_ORDER.ASC}`}
            />
            <FaArrowDownShortWide
              className={`sortings__header__icon-${SORTING_ORDER.DESC}`}
            />
          </span>
        </legend>
        <div className='sortings__options'>
          {sortOption.map((option) => (
            <RadioOption
              key={option}
              label={t(('sortingOption.' + option) as Parameters<typeof t>[0])}
              value={option}
              group='sort'
              isChecked={selectedOptions === option}
              onChange={(value) => onChange({ option: value as T })}
            />
          ))}
        </div>
      </fieldset>
    </ListControlModal>
  );
}
