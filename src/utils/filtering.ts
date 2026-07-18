export const matchesFilter = (
  selectedFilters: string[],
  searchIn: string[],
) => {
  if (selectedFilters.length === 0) return true;

  return searchIn.some((v) => selectedFilters.includes(v));
};

export const matchesQuery = (searchQuery: string, searchIn: string[]) => {
  const normalizedQuery = searchQuery
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  if (!normalizedQuery) return true;

  return searchIn.some((text) => text?.toLowerCase().includes(normalizedQuery));
};
