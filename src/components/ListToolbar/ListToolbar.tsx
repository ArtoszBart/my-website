import './listToolbar.scss';

import { BEAN_OPTION } from '@/enums/beanOption.enum';
import { MODAL } from '@/enums/modal.enum';
import { useTranslations } from 'next-intl';
import Bean from '../Bean';
import Filters from './components/Filters';
import SearchBar from './components/SearchBar';
import Sortings from './components/Sortings';
import useListToolbar, { ListStateHook } from './useListToolbar';

interface IProps<T extends Record<string, string[]>, S extends string> {
  listStateHook: ListStateHook<T, S>;
  allFilters: Record<string, string[]>;
  allSortOptions: readonly S[];
}

export default function ListToolbar<
  T extends Record<string, string[]>,
  S extends string,
>({ listStateHook, allFilters, allSortOptions }: IProps<T, S>) {
  const t = useTranslations('TechnologiesOptions');
  const toolbarHook = useListToolbar<T, S>(listStateHook);

  return (
    <div className='toolbar'>
      <div className='toolbar__controls'>
        <div className='toolbar__controls__actions'>
          <button onClick={() => toolbarHook.setOpenedModal(MODAL.FILTERS)}>
            {t('toolbarOptions.filter')}
          </button>
          <hr />
          <button onClick={() => toolbarHook.setOpenedModal(MODAL.SORTINGS)}>
            {t('toolbarOptions.sort')}
          </button>
        </div>
        <SearchBar
          value={listStateHook.query}
          onChange={listStateHook.setQuery}
        />

        <Filters
          isOpened={toolbarHook.openedModal === MODAL.FILTERS}
          onClose={toolbarHook.closeModals}
          allFilters={allFilters}
          selectedFilters={listStateHook.selectedFilters}
          onToggleValue={toolbarHook.toggleFilter}
        />

        <Sortings
          isOpened={toolbarHook.openedModal === MODAL.SORTINGS}
          onClose={toolbarHook.closeModals}
          isDesc={toolbarHook.isSortingDesc}
          sortOption={allSortOptions}
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
                label={t(('types.' + value) as Parameters<typeof t>[0])}
                option={categoryName as BEAN_OPTION}
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
          option={BEAN_OPTION.RESET}
          onClick={toolbarHook.clearFilters}
        />
      )}
    </div>
  );
}
