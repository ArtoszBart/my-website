import { TechMeta } from '@/data/technologies';
import { SORTING_ORDER } from '@/enums/sortingOrder.enum';
import { TechEnvironment } from '@/enums/techEnvironment.enum';
import { TechPlatform } from '@/enums/techPlatform.enum';
import { TechType } from '@/enums/techType.enum';

export const allFilters = {
  platforms: Object.values(TechPlatform),
  environments: Object.values(TechEnvironment),
  types: Object.values(TechType),
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
