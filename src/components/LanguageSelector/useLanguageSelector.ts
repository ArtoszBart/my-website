import { useEffect, useRef, useState } from 'react';

const useLanguageSelector = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedValue, setSelectedValue] = useState('PL');

  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelection = (newValue: string) => {
    setSelectedValue(newValue);
  };

  useEffect(() => {
    const el = selectRef.current;
    if (!el) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!el.contains(event.target as Node)) {
        setIsOpened(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return { setIsOpened, selectRef, isOpened, selectedValue, handleSelection };
};

export default useLanguageSelector;
