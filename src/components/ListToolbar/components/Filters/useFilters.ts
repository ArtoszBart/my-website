import { useState } from 'react';

export interface IuseFilters {
  onClose: () => void;
}

const useFilters = ({ onClose }: IuseFilters) => {
  const [openedGroup, setOpenedGroup] = useState<string>();

  function toggleGroup(key: string) {
    setOpenedGroup((prev) => (key === prev ? undefined : key));
  }

  const handleClose = () => {
    onClose();
    setOpenedGroup(undefined);
  };

  return { openedGroup, toggleGroup, handleClose };
};

export default useFilters;
