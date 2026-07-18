import './searchBar.scss';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { type Dispatch, type SetStateAction } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { ImSearch } from 'react-icons/im';

interface IProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export default function SearchBar({ value, onChange }: IProps) {
  const t = useTranslations('TechnologiesOptions.toolbarOptions');

  return (
    <div className='search-bar'>
      <input
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('search')}
        aria-label={t('search')}
      />
      <span
        className={clsx('search-bar__icon', {
          'search-bar__icon--active': value,
        })}
      >
        <ImSearch className='search-bar__icon-search' />
        <FaXmark
          className='search-bar__icon-clear'
          onClick={() => onChange('')}
        />
      </span>
    </div>
  );
}
