import { useState } from 'react';

const useFaq = () => {
  const [openedFaqId, setOpenedFaqId] = useState<string>();

  const onToogleClick = (id: string) => {
    setOpenedFaqId((prev) => (prev === id ? undefined : id));
  };

  return { openedFaqId, onToogleClick };
};

export default useFaq;
