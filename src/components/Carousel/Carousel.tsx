'use client';

import clsx from 'clsx';
import { Children, PropsWithChildren } from 'react';
import './carousel.scss';
import useCarousel from './useCarousel';

interface IProps extends PropsWithChildren {
  name: string;
}

export default function Carousel({ children, name }: IProps) {
  const { carouselRef, ...hook } = useCarousel({ children });

  return (
    <>
      <div
        className='carousel'
        ref={carouselRef}
        onTouchStart={hook.handleTouchStart}
        onTouchEnd={hook.handleTouchEnd}
        onScroll={hook.handleScroll}
      >
        {Children.map(children, (child, index) => (
          <div className='carousel__slide' key={index}>
            {child}
          </div>
        ))}
      </div>

      <nav className='carousel-pagination' aria-label={`${name} pages`}>
        {Array.from({ length: hook.pageCount }, (_, page) => (
          <button
            className={clsx('carousel-pagination__dot', {
              'carousel-pagination__dot--active': page === hook.currentPage,
            })}
            key={page}
            type='button'
            aria-label={`Go to ${name} page ${page + 1}`}
            aria-current={page === hook.currentPage ? 'true' : undefined}
            onClick={() => hook.scrollToPage(page)}
          />
        ))}
      </nav>
    </>
  );
}
