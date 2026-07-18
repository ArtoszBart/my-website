import { useEffect } from 'react';

export interface IListControlModal {
  id: string;
  isOpened: boolean;
  onClose: () => void;
}

const useListControlModal = ({ id, isOpened, onClose }: IListControlModal) => {
  useEffect(() => {
    if (!isOpened) return;

    const handleClickOutside = (e: MouseEvent) => {
      const modal = document.querySelector(`#${id}`);

      if (modal && !modal.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpened, id, onClose]);
};

export default useListControlModal;
