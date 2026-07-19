import { SORTING_ORDER } from '@/enums/sortingOrder.enum';
import { Dispatch, SetStateAction } from 'react';

export type ListStateHook<
  T extends Record<string, string[]>,
  S extends string,
> = {
  listStateHook: {
    query: string;
    setQuery: Dispatch<SetStateAction<string>>;
    selectedFilters: T;
    setSelectedFilters: Dispatch<SetStateAction<T>>;
    selectedSorting: { order: SORTING_ORDER; option: string };
    setSelectedSorting: (s: { option?: S; order?: SORTING_ORDER }) => void;
    allFilters: Record<string, string[]>;
    allSortOptions: readonly S[];
  };
};
