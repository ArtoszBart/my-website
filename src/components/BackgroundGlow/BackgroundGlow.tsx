'use client';

import { useEffect, useState } from 'react';
import './backgroundGlow.scss';

type Glow = {
  top: number;
  left: number;
  sizeX: number;
  sizeY: number;
};

export default function BackgroundGlows() {
  const [glows, setGlows] = useState<Glow[]>([]);

  useEffect(() => {
    const generateGlow = (index: number): Glow => {
      const { innerHeight, innerWidth } = window;
      const isFirst = index === 0;

      const sizeX = isFirst
        ? 1600 + Math.random() * 800
        : 600 + Math.pow(Math.random(), 0.9) * 1600;

      const sizeY = isFirst
        ? 1600 + Math.random() * 800
        : 600 + Math.pow(Math.random(), 0.9) * 1600;

      return {
        sizeX,
        sizeY,
        top: index * innerHeight + Math.random() * innerHeight - sizeY / 2,
        left: Math.random() * innerWidth - sizeX / 2,
      };
    };

    const updateGlows = () => {
      const { scrollHeight } = document.documentElement;
      const count = Math.ceil(scrollHeight / window.innerHeight);

      setGlows((currentGlows) => {
        if (currentGlows.length === count) {
          return currentGlows;
        }

        if (currentGlows.length < count) {
          return [
            ...currentGlows,
            ...Array.from({ length: count - currentGlows.length }, (_, index) =>
              generateGlow(currentGlows.length + index),
            ),
          ];
        }

        return currentGlows.slice(0, count);
      });
    };

    updateGlows();

    const observer = new ResizeObserver(updateGlows);
    observer.observe(document.documentElement);

    window.addEventListener('resize', updateGlows);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateGlows);
    };
  }, []);

  return (
    <div className='glows-overlay' aria-hidden>
      {glows.map(({ top, left, sizeX, sizeY }, index) => (
        <div
          className='glows-overlay__glow'
          key={index}
          style={{
            top,
            left,
            width: sizeX,
            height: sizeY,
          }}
        />
      ))}
    </div>
  );
}
