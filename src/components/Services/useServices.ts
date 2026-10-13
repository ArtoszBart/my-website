import { useState } from 'react';

const useServices = () => {
  const [openedServiceId, setOpenedServiceId] = useState<string>();

  const onChevronToogleClick = (id: string) => {
    setOpenedServiceId((prev) => (prev === id ? undefined : id));
  };

  return { openedServiceId, onChevronToogleClick };
};

export default useServices;
