import { TECHNOLOGIES } from '@/data/technologies';
import { SORTING_ORDER } from '@/enums/sortingOrder.enum';
import { matchesFilter, matchesQuery } from '@/utils/filtering';
import { useMemo, useState } from 'react';
import { Filters, SORT_CONFIG, SortOption } from './config/config';

type Sorting = {
  order: SORTING_ORDER;
  option: SortOption;
};

const useTechnologies = () => {
  const [query, setQuery] = useState('');
  const [selectedSorting, _setSelectedSorting] = useState<Sorting>({
    order: SORTING_ORDER.ASC,
    option: 'default',
  });
  const [selectedFilters, setSelectedFilters] = useState<Filters>({
    platforms: [],
    environments: [],
    types: [],
  });

  const displayedTechnologies = useMemo(() => {
    const { platforms, environments, types } = selectedFilters;
    const q = query.toLowerCase();

    const filtered = Object.entries(TECHNOLOGIES).filter(([key, tech]) => {
      return (
        matchesQuery(q, [tech.label, key]) &&
        matchesFilter(platforms, tech.platforms) &&
        matchesFilter(environments, tech.environments) &&
        matchesFilter(types, tech.types)
      );
    });

    const sorted = [...filtered];
    const { comparator } = SORT_CONFIG[selectedSorting.option as SortOption];
    const multiplier = selectedSorting.order === SORTING_ORDER.ASC ? 1 : -1;

    if (comparator) {
      sorted.sort(([, a], [, b]) => comparator(a, b) * multiplier);
    } else if (selectedSorting.order === SORTING_ORDER.DESC) {
      sorted.reverse();
    }

    return sorted;
  }, [query, selectedFilters, selectedSorting]);

  const setSelectedSorting = (options: {
    option?: SortOption;
    order?: SORTING_ORDER;
  }) => {
    _setSelectedSorting((prev) => {
      const option = options.option ?? prev.option;
      const order = options.option
        ? SORT_CONFIG[option].defaultOrder
        : (options.order ?? prev.order);

      return { option, order };
    });
  };

  return {
    displayedTechnologies,
    query,
    setQuery,
    selectedFilters,
    setSelectedFilters,
    selectedSorting,
    setSelectedSorting,
  };
};

export default useTechnologies;
