'use client';

import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import './imageLoader.scss';

export default function ImageLoader(props: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      {...props}
      alt={props.alt}
      className={clsx(props.className, { 'image-loader--loading': isLoading })}
      onLoad={() => setIsLoading(false)}
    />
  );
}
