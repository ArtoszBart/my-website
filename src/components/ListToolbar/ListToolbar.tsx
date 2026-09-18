import './listToolbar.scss';

import { MODAL } from '@/enums/modal.enum';
import { useTranslations } from '@/i18n/translations';
import { PropsWithChildren } from 'react';
import Bean from '../Bean';
import Filters from './components/Filters';
import SearchBar from './components/SearchBar';
import Sortings from './components/Sortings';
import { ListStateHook } from './types/listStateHook.type';
import useListToolbar from './useListToolbar';

interface IProps<T extends Record<string, string[]>, S extends string>
  extends ListStateHook<T, S>, PropsWithChildren {}

export default function ListToolbar<
  T extends Record<string, string[]>,
  S extends string,
>({ listStateHook, children }: IProps<T, S>) {
  const t = useTranslations('Toolbar');
  const toolbarHook = useListToolbar<T, S>({ listStateHook });

  return (
    <div className='toolbar'>
      <div className='toolbar__controls'>
        <div className='toolbar__controls__actions'>
          <button onClick={() => toolbarHook.setOpenedModal(MODAL.FILTERS)}>
            {t('filter')}
          </button>
          <hr />
          <button onClick={() => toolbarHook.setOpenedModal(MODAL.SORTINGS)}>
            {t('sort')}
          </button>
          {children}
        </div>
        <SearchBar
          value={listStateHook.query}
          onChange={listStateHook.setQuery}
        />

        <Filters
          id='technologies'
          isOpened={toolbarHook.openedModal === MODAL.FILTERS}
          onClose={toolbarHook.closeModals}
          allFilters={listStateHook.allFilters}
          selectedFilters={listStateHook.selectedFilters}
          onToggleValue={toolbarHook.toggleFilter}
        />

        <Sortings
          isOpened={toolbarHook.openedModal === MODAL.SORTINGS}
          onClose={toolbarHook.closeModals}
          isDesc={toolbarHook.isSortingDesc}
          sortOption={listStateHook.allSortOptions}
          selectedOptions={listStateHook.selectedSorting.option}
          onChange={listStateHook.setSelectedSorting}
        />
      </div>

      <div className='toolbar__selected-filters'>
        {Object.entries(listStateHook.selectedFilters).map(
          ([categoryName, values]) =>
            values.map((value) => (
              <Bean
                key={value}
                label={t(('filterOption.' + value) as Parameters<typeof t>[0])}
                option={categoryName}
                onClick={() => toolbarHook.toggleFilter(value, categoryName)}
              />
            )),
        )}
      </div>
      {Object.values(listStateHook.selectedFilters).some(
        (filters) => filters.length,
      ) && (
        <Bean
          label='Reset filters'
          option={'reset'}
          onClick={toolbarHook.clearFilters}
        />
      )}
    </div>
  );
}
