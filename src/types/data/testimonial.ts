import { Messages } from 'next-intl';
import { TimelineEntry } from './experience';

export type Testimonial = {
  author: string;
  company?: TimelineEntry;
  source: TestimonialSource;
  url: string;
  orginalLanguage: string;
  translationKey: keyof Messages['ServicesPage']['testimonials']['content'];
};

type TestimonialSource = {
  icon: React.ReactNode;
  name: string;
};
