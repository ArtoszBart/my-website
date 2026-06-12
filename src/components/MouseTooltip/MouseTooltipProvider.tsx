'use client';

import { PropsWithChildren, useEffect } from 'react';
import './mouseTooltip.scss';

export default function MouseTooltipProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const handler = (e: MouseEvent) => {
      const isFlipped = e.clientX > window.innerWidth - 200;

      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
      document.documentElement.classList.toggle('tooltip-flip', isFlipped);
    };

    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return <>{children}</>;
}
