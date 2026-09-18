import { TIMELINE_CATEGORY, timelineItems } from '@/data/experience';
import { useMemo, useState } from 'react';
import { allFilters } from './config/config';

const useTimeline = () => {
  const [openedId, setOpenedId] = useState<string>();
  const [isFiltersModalOpened, setIsFiltersModalOpened] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([
    TIMELINE_CATEGORY.WORK,
  ]);

  const handleItemClick = (timelineItemId: string) => {
    if (timelineItemId === openedId) return setOpenedId(undefined);
    setOpenedId(timelineItemId);
  };

  const toggleFilter = (value: string) => {
    setSelectedFilters((prev) =>
      prev.includes(value as TIMELINE_CATEGORY)
        ? prev.filter((filter) => filter !== value)
        : [...prev, value as TIMELINE_CATEGORY],
    );
  };

  const closeFiltersModals = () => {
    setIsFiltersModalOpened(false);
  };

  const displayedExperience = useMemo(() => {
    if (selectedFilters.length === 0) return timelineItems;

    const filtered = timelineItems.filter((item) =>
      selectedFilters.includes(item.category),
    );

    return filtered;
  }, [selectedFilters]);

  return {
    displayedExperience,
    setIsFiltersModalOpened,
    isFiltersModalOpened,
    closeFiltersModals,
    allFilters,
    selectedFilters,
    toggleFilter,
    openedId,
    handleItemClick,
  };
};

export default useTimeline;
