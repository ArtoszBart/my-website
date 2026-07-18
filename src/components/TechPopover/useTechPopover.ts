import { useEffect, useRef } from 'react';

const useTechPopover = () => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const popover = popoverRef.current;
    if (!popover) return;

    const handleScroll = () => {
      if (popover.matches(':popover-open')) {
        popover.hidePopover();
      }
    };

    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, []);

  return { popoverRef };
};

export default useTechPopover;
