import { ENVIROMENT } from '@/enums/environment.enum';
import { SORTING_ORDER } from '@/enums/sortingOrder.enum';
import { PLATFORM } from '@/enums/techPlatform.enum';
import { TECH_TYPE } from '@/enums/techType.enum';
import { TechMeta } from '@/types/data/technologies';

export const allFilters = {
  platforms: Object.values(PLATFORM),
  environments: Object.values(ENVIROMENT),
  types: Object.values(TECH_TYPE),
};

export const allSortOptions = ['default', 'name', 'experience'] as const;

export const SORT_CONFIG: Record<
  SortOption,
  {
    defaultOrder: SORTING_ORDER;
    comparator?: (a: TechMeta, b: TechMeta) => number;
  }
> = {
  default: { defaultOrder: SORTING_ORDER.ASC },
  name: {
    defaultOrder: SORTING_ORDER.ASC,
    comparator: (a, b) => a.label.localeCompare(b.label),
  },
  experience: {
    defaultOrder: SORTING_ORDER.DESC,
    comparator: (a, b) => a.experience - b.experience,
  },
};

export type Filters = typeof allFilters;
export type SortOption = (typeof allSortOptions)[number];
