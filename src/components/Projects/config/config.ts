import { ENVIROMENT } from '@/enums/environment.enum';
import { PROJECT_TYPE } from '@/enums/projectType.enum';
import { SCOPE } from '@/enums/scope.enum';
import { SORTING_ORDER } from '@/enums/sortingOrder.enum';
import { Project } from '@/types/project';

export const allFilters = {
  scope: Object.values(SCOPE),
  environments: Object.values(ENVIROMENT),
  kind: Object.values(PROJECT_TYPE),
};

export const allSortOptions = ['default', 'date', 'name'] as const;

export const SORT_CONFIG: Record<
  SortOption,
  {
    defaultOrder: SORTING_ORDER;
    comparator?: (a: Project, b: Project) => number;
  }
> = {
  default: {
    defaultOrder: SORTING_ORDER.DESC,
    comparator: (a, b) => a.rating - b.rating,
  },
  name: {
    defaultOrder: SORTING_ORDER.ASC,
    comparator: (a, b) => a.title.localeCompare(b.title),
  },
  date: {
    defaultOrder: SORTING_ORDER.DESC,
    comparator: (a, b) => a.date.getTime() - b.date.getTime(),
  },
};

export type Filters = typeof allFilters;
export type SortOption = (typeof allSortOptions)[number];
