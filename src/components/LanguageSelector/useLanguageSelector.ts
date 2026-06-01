import { usePathname, useRouter } from '@/i18n/routing';
import { Locale } from '@/i18n/types';
import { useLocale } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

const useLanguageSelector = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isOpened, setIsOpened] = useState(false);
  const [selectedValue, setSelectedValue] = useState(locale);

  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelection = (newLocale: Locale) => {
    setSelectedValue(newLocale);

    router.replace({ pathname }, { locale: newLocale });
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
