import { MouseEvent, useRef, useState } from 'react';

type Ripple = {
  id: number;
  x: number;
  y: number;
  size: number;
};

const useLinkButton = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const idRef = useRef(0);

  const handleClick = (e: MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    setRipples((prev) => [...prev, { id: idRef.current++, x, y, size }]);
  };

  const clearRipple = (id: number) =>
    setRipples((prev) => prev.filter((r) => r.id !== id));

  return { handleClick, ripples, clearRipple };
};

export default useLinkButton;
