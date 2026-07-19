import { PROJECTS } from '@/data/projects';
import { SORTING_ORDER } from '@/enums/sortingOrder.enum';
import { matchesFilter, matchesQuery } from '@/utils/filtering';
import { useMemo, useState } from 'react';
import {
  allFilters,
  allSortOptions,
  Filters,
  SORT_CONFIG,
  SortOption,
} from './config/config';

type Sorting = {
  order: SORTING_ORDER;
  option: SortOption;
};

const useProjects = () => {
  const [query, setQuery] = useState('');
  const [selectedSorting, _setSelectedSorting] = useState<Sorting>({
    order: SORTING_ORDER.DESC,
    option: 'default',
  });
  const [selectedFilters, setSelectedFilters] = useState(
    Object.fromEntries(
      Object.keys(allFilters).map((key) => [key, []]),
    ) as unknown as Filters,
  );

  const displayedProjects = useMemo(() => {
    const q = query.toLowerCase();

    const filtered = PROJECTS.filter((project) => {
      return (
        matchesQuery(q, [project.title]) &&
        matchesFilter(selectedFilters.scope, project.scope) &&
        matchesFilter(selectedFilters.environments, project.environments) &&
        matchesFilter(selectedFilters.kind, [project.kind])
      );
    });

    const sorted = [...filtered];
    const { comparator } = SORT_CONFIG[selectedSorting.option as SortOption];
    const multiplier = selectedSorting.order === SORTING_ORDER.ASC ? 1 : -1;

    if (comparator) {
      sorted.sort((a, b) => comparator(a, b) * multiplier);
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
    displayedProjects,
    query,
    setQuery,
    selectedFilters,
    setSelectedFilters,
    selectedSorting,
    setSelectedSorting,
    allFilters,
    allSortOptions,
  };
};

export default useProjects;
