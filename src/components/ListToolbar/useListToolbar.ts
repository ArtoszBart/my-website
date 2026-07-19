import { MODAL } from '@/enums/modal.enum';
import { SORTING_ORDER } from '@/enums/sortingOrder.enum';
import { useState } from 'react';
import { ListStateHook } from './types/listStateHook.type';

const useListToolbar = <T extends Record<string, string[]>, S extends string>({
  listStateHook,
}: ListStateHook<T, S>) => {
  const [openedModal, setOpenedModal] = useState<MODAL | undefined>();

  const isSortingDesc =
    listStateHook.selectedSorting.order === SORTING_ORDER.DESC;

  const closeModals = () => {
    setOpenedModal(undefined);
  };

  const toggleFilter = (value: string, filterKey: string) => {
    listStateHook.setSelectedFilters((prev) => {
      const current = prev[filterKey];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [filterKey]: updated };
    });
  };

  function clearFilters() {
    listStateHook.setSelectedFilters(
      (prev) =>
        Object.fromEntries(
          Object.keys(prev).map((key) => [key, []]),
        ) as unknown as typeof prev,
    );
  }

  return {
    toggleFilter,
    clearFilters,
    isSortingDesc,
    setOpenedModal,
    openedModal,
    closeModals,
  };
};

export default useListToolbar;
