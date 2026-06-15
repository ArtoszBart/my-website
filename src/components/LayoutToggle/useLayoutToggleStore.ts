import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LayoutToggleStore {
  isListView: boolean;
  setIsListView: (value: boolean) => void;
}

export const useLayoutToggleStore = create<LayoutToggleStore>()(
  persist(
    (set) => ({
      isListView: true,
      setIsListView: (isListView) => set({ isListView }),
    }),
    {
      name: 'projects-list-layout',
    },
  ),
);
