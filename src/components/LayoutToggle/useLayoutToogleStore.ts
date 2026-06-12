import { create } from 'zustand';

interface LayoutToogleStore {
  isListView: boolean;
  setIsListView: (value: boolean) => void;
}

export const useLayoutToogleStore = create<LayoutToogleStore>((set) => ({
  isListView: true,
  setIsListView: (value) => set({ isListView: value }),
}));
