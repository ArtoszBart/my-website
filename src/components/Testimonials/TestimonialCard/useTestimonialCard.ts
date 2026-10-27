import { Testimonial } from '@/types/data/testimonial';
import { useEffect, useRef, useState } from 'react';

export interface ITestimonialCard {
  testimonial: Testimonial & {
    originalContent?: string[];
    content: string[];
    position: string;
  };
}

const useTestimonialCard = ({
  testimonial,
  charLimit,
}: ITestimonialCard & { charLimit: number }) => {
  const cardRef = useRef<HTMLElement>(null);

  const [isTranslated, setIsTranslated] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [minHeight, setMinHeight] = useState<number>();

  const hasOriginal = !!testimonial.originalContent;
  const languageContent =
    hasOriginal && !isTranslated
      ? testimonial.originalContent!
      : testimonial.content;

  const contentRaw = languageContent.join('\n\n');

  const summary = contentRaw.substring(0, charLimit);
  const displayedContent = isExpanded
    ? languageContent
    : [summary.trimEnd() + '...'];

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsExpanded(false);
        }
      },
      { threshold: 0 },
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const height = card.getBoundingClientRect().height;

    setMinHeight(height);
  }, []);

  return {
    cardRef,
    isExpanded,
    minHeight,
    hasOriginal,
    isTranslated,
    contentRaw,
    languageContent,
    displayedContent,
    setIsExpanded,
    setIsTranslated,
  };
};

export default useTestimonialCard;
