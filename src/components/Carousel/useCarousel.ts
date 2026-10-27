import {
  Children,
  ReactNode,
  TouchEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

const useCarousel = ({ children }: { children: ReactNode }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);
  const touchStartX = useRef<number | null>(null);

  const [isDesktop, setIsDesktop] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const itemCount = Children.count(children);
  const pageCount = Math.ceil(itemCount / (isDesktop ? 2 : 1));
  const currentPage = Math.min(activePage, pageCount - 1);

  const scrollToPage = (page: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const targetPage = Math.max(0, Math.min(page, pageCount - 1));

    isProgrammaticScroll.current = true;
    setActivePage(targetPage);

    carousel.scrollTo({
      left: targetPage * carousel.clientWidth,
      behavior: 'smooth',
    });
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const deltaX = touchStartX.current - event.changedTouches[0].clientX;

    if (Math.abs(deltaX) >= 50) {
      scrollToPage(currentPage + Math.sign(deltaX));
    }

    touchStartX.current = null;
  };

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel || !carousel.clientWidth) return;

    if (isProgrammaticScroll.current) return;

    const page = Math.round(carousel.scrollLeft / carousel.clientWidth);

    setActivePage(Math.min(Math.max(page, 0), pageCount - 1));
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktop(event.matches);
      setActivePage(0);
      carouselRef.current?.scrollTo({ left: 0, behavior: 'instant' });
    };

    handleChange(mediaQuery);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScrollEnd = () => {
      isProgrammaticScroll.current = false;
    };

    carousel.addEventListener('scrollend', handleScrollEnd);

    return () => {
      carousel.removeEventListener('scrollend', handleScrollEnd);
    };
  }, []);

  return {
    carouselRef,
    handleTouchStart,
    handleTouchEnd,
    handleScroll,
    pageCount,
    currentPage,
    scrollToPage,
  };
};

export default useCarousel;
